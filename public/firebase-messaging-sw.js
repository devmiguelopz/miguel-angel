// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js"
);

// Inicializa tu app de Firebase en el SW
firebase.initializeApp({
  apiKey: "AIzaSyCti_HzPJvLeWFUYoVhtkJElmYJ4jQL9gs",
  authDomain: "paints-78769.firebaseapp.com",
  projectId: "paints-78769",
  storageBucket: "paints-78769.firebasestorage.app",
  messagingSenderId: "377740311156",
  appId: "1:377740311156:web:df659f182f1b38eb09af21",
  measurementId: "G-N6FPDEYNRY",
});

self.addEventListener("push", (event) => {
  if (!event.data) return;

  let payload;
  try {
    payload = event.data.json();
  } catch (e) {
    console.error("No es JSON:", e);
    return;
  }

  // Si viene bajo { message: { notification, data } }
  const msg = payload.message || payload;
  const { notification = {}, data = {} } = msg;

  const title = notification.title || data.title || "Notificación";
  const options = {
    body: notification.body || data.body || "",
    icon: notification.icon || data.icon || "/favicon.ico",
    data,
  };

  // 4) Asegúrate de esperar a que termine showNotification
  event.waitUntil(self.registration.showNotification(title, options));
});
