import React from "react";
import img from "../Img/Footer.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function Footer() {
  const images = [
    "https://picsum.photos/id/101/600/400",
    "https://picsum.photos/id/102/600/400",
    "https://picsum.photos/id/103/600/400",
  ];

  // ანიმაციის ვარიანტები
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <footer className="w-full mt-20 px-4">
      <div className="relative w-[600px] h-[400px] overflow-hidden m-auto mb-10 rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.3 },
              className: "absolute w-full h-full object-cover",
            }}
          />
        </AnimatePresence>

        <button
          onClick={() => paginate(1)}
          className="absolute left-[0] z-2 top-[50%]"
        >
          ◀
        </button>
        <button
          onClick={() => paginate(-1)}
          className="absolute right-1 z-2 top-[50%]"
        >
          ▶
        </button>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl p-[3px] flex items-center justify-center">
        <motion.div
          className="absolute inset-[-100%] z-0 bg-[conic-gradient(from_0deg,#00d4ff,#EBC1AE,#ff00c8,#00ff94,#ffea00,#EBC1AE,#EBC1AE,#00d4ff)]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 w-full h-full bg-white overflow-hidden rounded-[14px]">
          <img
            src={img}
            alt="Footer"
            className="w-full h-auto block object-cover"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
