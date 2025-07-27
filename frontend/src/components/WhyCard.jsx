import React from 'react'
import {motion} from "motion/react"
export default function WhyCard({point, cardKey}) {
  return (
    <div>
        <motion.div
            key={cardKey}
            initial={{ scale: 1.05, y: 60, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: cardKey * 0.1 }}
            className="group relative p-6 rounded-xl overflow-hidden shadow-lg h-[90px] w-full max-w-[300px] mx-auto transition-all duration-300 hover:scale-105"
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #FCF55F, #DAA520)",
                zIndex: 0,
              }}
            />

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at center, white 10%, transparent 60%)",
                zIndex: 1,
              }}
            />

            <div className="relative z-10 flex items-center justify-center text-center text-gray-900 font-semibold text-sm sm:text-base">
              {point}
            </div>
          </motion.div>
    </div>
  )
}
