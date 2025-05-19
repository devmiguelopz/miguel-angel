// lib/firebase.ts
"use client";

import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCti_HzPJvLeWFUYoVhtkJElmYJ4jQL9gs",
  authDomain: "paints-78769.firebaseapp.com",
  projectId: "paints-78769",
  storageBucket: "paints-78769.firebasestorage.app",
  messagingSenderId: "377740311156",
  appId: "1:377740311156:web:df659f182f1b38eb09af21",
  measurementId: "G-N6FPDEYNRY",
};

// Inicializa Firebase solo una vez
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let messagingInstance: ReturnType<
  typeof import("firebase/messaging").getMessaging
> | null = null;

/**
 * - Registra el service worker
 * - Pide permiso de notificaciones
 * - Inicializa FCM y retorna el token de dispositivo
 */
export async function initFcm(): Promise<string | null> {
  if (typeof window === "undefined") return null;

  const { getMessaging, getToken, onMessage } = await import(
    "firebase/messaging"
  );

  // 1) Registra el SW
  let registration: ServiceWorkerRegistration | undefined;
  try {
    registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
      { scope: "/" }
    );
    console.log("SW registered:", registration);
  } catch (err) {
    console.error("SW registration failed:", err);
    return null;
  }

  // 2) Pide permiso de notificaciones
  const permission = await Notification.requestPermission();
  if (permission !== "granted") return null;

  // 3) Inicializa messaging solo una vez
  if (!messagingInstance) {
    messagingInstance = getMessaging(app);
    onMessage(messagingInstance, (payload) => {
      console.debug("FCM foreground message:", payload);
    });
  }

  // 4) Obtiene el token, pasando el registration
  const fcmToken = await getToken(messagingInstance, {
    vapidKey:
      "BJaRHqzgTygZma0GWAAH9CsiIDlJ5AfWfbnFzwSiG5c6ohvtpyj7J-kepKeVlKkYMj4NR1pwES1HsRvKCnHrwwo",
    serviceWorkerRegistration: registration,
  });

  return fcmToken ?? null;
}

/**
 * Se subscribe a mensajes en primer plano.
 * Devuelve una función para desuscribirse.
 */
export function onFcmMessage(
  handler: Parameters<typeof import("firebase/messaging").onMessage>[1]
): () => void {
  if (typeof window === "undefined" || !messagingInstance) {
    return () => {};
  }
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { onMessage } = require("firebase/messaging");
  return onMessage(messagingInstance, handler);
}
