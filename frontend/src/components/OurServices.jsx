import React from "react";
import { motion } from "framer-motion";
import point from "../assets/point2.png";
import service from "../assets/our-services.png";

const data = [
  {
    title: "Integrated Facility Management Services",
    image: "/assets/integrated.png",
    services: [
      "Soft Services",
      "Hard Services",
      "Business Support Services",
      "Security Services",
      "Physical Man Guarding",
      "Electronic Security Systems",
    ],
  },
  {
    title: "Housekeeping & Deep Cleaning",
    image: "/assets/housekeeping.png",
    services: [
      "Corporate Cleaning (offices, IT parks)",
      "Deep Cleaning Services",
      "Janitorial Services",
      "Floor Care",
      "Facade & High‑Rise Cleaning",
      "Disinfectant Services",
    ],
  },
  {
    title: "Mechanical, Electrical & Plumbing (MEP)",
    image: "/assets/mep.png",
    services: [
      "HVAC Operation & Maintenance",
      "Building Management Systems (BMS)",
      "Fire & Safety Management",
      "Plumbing Services",
      "Minor Civil & Electrical Works",
    ],
  },
  {
    title: "Specialty Services",
    image: "/assets/specialty.png",
    services: [
      "Pest Control",
      "Landscaping Maintenance",
      "Waterproofing & Painting Services",
      "Production / Industrial Support Services",
      "Event Management",
    ],
  },
];

export default function OurServices() {
  return (
    <div className="relative font-Lora py-10 px-4 sm:px-6 md:px-20">
      <motion.div
        className="font-semibold text-center mb-8 flex justify-center text-yellow-400"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center">
          <img src={service} alt="Our services" className="h-8 sm:h-[5vh] md:h-[6vh]" />
          <div className="ml-3 text-xl sm:text-2xl md:text-4xl text-purple-800">OUR SERVICES</div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible no-scrollbar pb-4">
        {data.map((section, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-md p-4 sm:p-5 bg-white/90 border border-dashed border-gray-300
              transition duration-200 hover:shadow-xl hover:scale-[1.02] flex flex-col min-w-[280px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={section.image} alt={section.title} className="w-10 h-10 mb-3 object-contain" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-600 hover:font-semibold mb-3">
              {section.title}
            </h3>
            <ul className="text-gray-700 space-y-2">
              {section.services.map((service, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-sm sm:text-base hover:font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img src={point} alt="point" className="h-3 mt-1" />
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
