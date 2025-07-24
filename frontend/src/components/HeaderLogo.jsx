import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/PropCareLogo-footer.webp";

export default function HeaderLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}

      className="
        bg-white 
        shadow-[4px_4px_1px_#fabd00] 
        border-2 border-LogoBorder 
        rounded-xl 
        w-[50vw] sm:w-[40vw] md:w-[20vw] lg:w-[15vw] 
        h-auto 
        flex justify-center items-center 
        p-2
      "
    >
      <img
        src={logo}
        alt="PropCare Logo"
        className="w-full h-auto max-h-[10vh] object-contain"
      />
    </motion.div>
  );
}
