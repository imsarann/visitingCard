import { motion } from 'framer-motion';
import logo from "../assets/PropCareLogo-footer.webp";

export default function HeaderLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        scale: { type: "spring", bounce: 0.7, duration: 0.5 },
      }}
      whileHover={{ scale: 1.05 }}
      className="
        shadow-[4px_4px_1px_#fabd00] 
        border-2 border-LogoBorder 
        rounded-xl 
        bg-white
        p-1 
        flex justify-center items-center 
        w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[18vw] xl:w-[12vw] pl-[5vw]  md:pl-[2vw]
        h-[12vh] sm:h-[10vh] md:h-[11vh] lg:h-[12vh]
      "
    >
      <img
        src={logo}
        alt="PropCare Logo"
        className="h-full w-auto object-contain"
      />
    </motion.div>
  );
}
