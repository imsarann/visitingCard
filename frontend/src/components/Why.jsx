import { motion } from "framer-motion";

export default function Why() {
  const commitmentPoints = [
    "Commitment towards service delivery",
    "Create workplace safety and hygiene",
    "Deliver quality and peace",
    "Offer cost effective facility management solution",
    "Manage risks and adhere to statutory compliances",
  ];

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-10 sm:gap-8 sm:px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[80px] font-bold text-purple-800 text-center"
      >
        Why Propcare
      </motion.h2>

      {/* Icon */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 fill-gray-800 transition duration-300 hover:fill-amber-500"
        >
          <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74v1.4c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7v-3.6c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
        </svg>
      </motion.div>

      {/* Commitment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {commitmentPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1.05, y: 60, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-6 rounded-xl overflow-hidden shadow-lg w-full max-w-[300px] mx-auto transition-all duration-300 hover:scale-105"
          >
            {/* Gradient Background */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #FCF55F, #DAA520)",
                zIndex: 0,
              }}
            />

            {/* Hover Reflection */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at center, white 10%, transparent 60%)",
                zIndex: 1,
              }}
            />

            {/* Text */}
            <div className="relative z-10 text-center text-gray-900 font-semibold text-sm sm:text-base">
              {point}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
