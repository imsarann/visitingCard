import { motion } from "motion/react";
import HeaderLogo from "./HeaderLogo";
import titleArrow from "../assets/title-arrow.png";
import titleArrowIn from "../assets/title-arrow-inverted.png";
import FirstContact from "./FirstContact";

export default function Title({ text }) {
  const name = ["A", "G", "G", "I", "N"];

  return (
    <div className="min-w-screen relative z-[10] overflow-hidden">
      {/* Background Arrows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 pointer-events-none">
              {/* First arrow - Top Left */}
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

              {/* Second Arrow - Bottom Right */}
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
          className="font-Audiowide font-bold leading-tight"
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="flex justify-center pt-[5vh] text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw]">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-tr  from-[#FFEA00] via-[#FFC000] to-[#E49B0F] hover:from-[#DFFF00] hover:via-[#FFBF00]] hover:to-[#E49B0F] bg-clip-text text-transparent"
              style={{
                textShadow: `
      0 0 1px #FFEA00,
      0 0 2px #FFC000,
      0 0 3px #DAA520,
      0 0 4px #FFC000,
      0 0 5px #DAA520
    `,
              }}
            >
              {name.join("")}
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05, color: "#ca8a04", fontWeight: 600 }}
          className="text-fourth/90 font-BricolageGrotesque transition duration-300 text-[20px] sm:text-[28px] md:text-[42px] mt-4"
        >
          Engineer
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          whileHover={{ scale: 1.03, color: "#ca8a04" }}
          className="font-semibold text-fourth transition duration-300 text-lg sm:text-xl md:text-3xl font-Julee  mt-3"
        >
          Facilities Managed. Peace Delivered.
        </motion.div>
        {/* CTA */}
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
