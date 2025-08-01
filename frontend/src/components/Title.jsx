import { motion } from "motion/react";
import HeaderLogo from "./HeaderLogo";
import titleArrow from "../assets/title-arrow.png";
import titleArrowIn from "../assets/title-arrow-inverted.png";
import FirstContact from "./FirstContact";

export default function Title({ text }) {
  const name = ["A", "G", "G", "I", "N"];

  return (
    <div className="min-w-screen relative z-[10] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 pointer-events-none">
              <div className="flex justify-start">
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 0.05, x: 0 }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.05 }}
                  src={titleArrow}
                  className="absolute h-[18vh] sm:h-[23vh] md:h-[30vh] brightness-50 sm:opacity-10 left-0 top-0"
                  alt="arrow"
                />
              </div>

              <div className="flex justify-end pr-[10vw]">
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 0.05, x: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  src={titleArrowIn}
                  className="absolute h-[18vh] sm:h-[23vh] md:h-[30vh] brightness-50 sm:opacity-10 right-0 bottom-0"
                  alt="arrow-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-[90vh] justify-center items-center px-4 text-center">
        <HeaderLogo />

        <motion.div
          className="font-ArchivoBlack  leading-tight"
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="flex  justify-center pt-[5vh] text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw]">
            <motion.span
              initial={{ scale: 1, opacity: 0, y : 80, delay : 0.2   }}
              animate={{ scale: 1, opacity: 1 , y : 0}}
              transition={{ duration: 0.8 }}
              className="  text-transparent "
              style={{
                textShadow: `
                0 0 0px #FFEA00,
                0 0 0px #FFC000,
                0 0 0px #DAA520,
                0 0 0px #FFC000,
                0 0 0px #DAA520
                `,
                WebkitTextStroke : "1px #DAA520"
              }}
            >
              {name.join("")}
            </motion.span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ scale: 1.05, color: "#DAA520" }}
          className="text-fourth font-Audiowide text-[20px] sm:text-[28px] md:text-[48px] mt-4"
        >
          Engineer
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ scale: 1.03, color: "#DAA520" }}
          className=" text-fourth font-bold  text-lg sm:text-xl md:text-4xl font-Julee  mt-4"
        >
          Facilities Managed. Peace Delivered.
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FirstContact />
        </motion.div>
      </div>
    </div>
  );
}