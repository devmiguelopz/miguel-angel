"use client";

import React, { useCallback, useState } from "react";
import { Film, Popcorn, Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationPage() {
  const [showModal, setShowModal] = useState(false);
  const smallHearts = [
    "left-4 top-[25%]",
    "left-4 top-[60%]",
    "right-4 top-[40%]",
    "right-4 top-[75%]",
  ];

  const details = [
    { text: "Cinemark Mallplaza Trujillo" },
    { text: "Jueves 22 de mayo, 9:10 PM" },
  ];

  const handleTicketClick = useCallback(() => {
    setShowModal(true);
  }, []);
  const closeModal = () => setShowModal(false);

  return (
    <>
      {/* Modal animado */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 max-w-sm w-full text-center relative"
            >
              <button onClick={closeModal} className="absolute top-3 right-3">
                <X className="w-6 h-6 text-gray-600" />
              </button>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-semibold text-gray-800"
              >
                ¡Stitch verá la película contigo, Yameli!
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-8 relative overflow-hidden"
      >
        {/* Corazones grandes animados */}
        {[
          { pos: "top-0 left-0", dir: 360, dur: 30 },
          { pos: "top-0 right-0", dir: -360, dur: 35 },
          { pos: "bottom-0 left-0", dir: 360, dur: 32 },
          { pos: "bottom-0 right-0", dir: -360, dur: 33 },
        ].map(({ pos, dir, dur }, idx) => (
          <motion.svg
            key={idx}
            animate={{ rotate: dir }}
            transition={{ repeat: Infinity, duration: dur, ease: "linear" }}
            className={`absolute ${pos} w-64 h-64 text-pink-500 opacity-20`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
        ))}

        {/* Corazones pequeños */}
        {smallHearts.map((pos, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -8, 0],
              rotate: i % 2 === 0 ? [0, 15, 0] : [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + i * 0.5,
              ease: "easeInOut",
            }}
            className={`absolute ${pos}`}
          >
            <motion.svg
              className="w-6 h-6 text-pink-400 opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>
          </motion.div>
        ))}

        {/* Tarjeta */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700 overflow-hidden"
        >
          {/* Poster */}
          <div className="relative flex flex-col">
            <img
              src="https://m.media-amazon.com/images/M/MV5BOWUyM2Y5YWMtZTUzZC00ODBiLTg1N2QtNGMzOTNkOTVjMDY4XkEyXkFqcGc@._V1_FMjpg_UX770_.jpg"
              alt="Póster Lilo & Stitch"
              className="w-full h-auto object-cover"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute top-4 right-4 w-28 h-28 rounded-full overflow-hidden ring-4 ring-pink-400 cursor-pointer"
              onClick={handleTicketClick}
            >
              <img
                src="/images/you-and-her.jpg"
                alt="Miguel y Yameli"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div className="p-4">
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/9JIyINjMfcc?autoplay=1&controls=1"
                  title="Tráiler Lilo & Stitch"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Texto y acción */}
          <div className="p-10 flex flex-col justify-between text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-5xl font-extrabold mb-4 drop-shadow-lg flex items-center"
              >
                Yameli, soy Miguel, mi aventura más hermosa
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="ml-3 text-pink-400"
                >
                  <Heart className="w-8 h-8" />
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-lg opacity-80 mb-6"
              >
                Dicen que ‘Ohana’ significa familia, y desde que llegaste,
                siento que encontré la mía en ti. Acompáñame a una noche donde
                las risas sean reales, los abrazos inevitables, y las miradas
                digan más que mil palabras. Vamos a ver
                <span className="text-pink-400 font-semibold">
                  Lilo & Stitch
                </span>
                , pero no como cualquiera: tú y yo, perdiéndonos en esa historia
                donde el caos se vuelve tierno, y el amor… simplemente
                extraterrestre. Porque si Stitch pudo encontrar su lugar en el
                mundo,{" "}
                <span className="text-pink-400 font-semibold">
                  yo ya encontré el mío a tu lado.
                </span>
              </motion.p>
              <ul className="space-y-3 text-sm">
                {details.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.2, duration: 0.5 }}
                    className="flex items-center"
                  >
                    <Film className="w-5 h-5 mr-2 text-indigo-300 animate-pulse" />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
              {/* Palomitas más dinámicas */}
              <motion.div
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="flex space-x-6 mt-6 justify-center"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 + i * 0.2 }}
                  >
                    <Popcorn className="w-8 h-8 text-pink-300 hover:scale-110" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Tickets y botón */}
            <motion.div className="flex flex-col items-center mt-8 space-y-6">
              <motion.img
                src="/images/ticket1.png"
                alt="Ticket coleccionable"
                className="w-40 h-auto drop-shadow-xl rounded-lg ring-4 ring-pink-400 ring-opacity-70 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
                onClick={handleTicketClick}
              />
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(255, 99, 150, 0.6)",
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-shadow shadow-lg"
                onClick={handleTicketClick}
              >
                Confirmar asistencia
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
