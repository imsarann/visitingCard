// import CountUp from "react-countup";
// const stats = [
//   { label: "Happy Clients", value: 250 },
//   { label: "Sites in Pan India", value: 300 },
//   { label: "Employees Deployed", value: 14500 },
//   { label: "Million Spaces", value: 90 },
// ];

// export default function Stats() {
//   return (
//     <div className=" w-[100vw] flex justify-center items-center flex-col">
//       <div className="text-fourth font-BricolageGrotesque  w-[70vw]  flex justify-center items-center text-[18px]">
//         <div className="">

//         We serve 250+ clients across 300+ sites in pan India and manage 90
//         Million+ sq ft space with an employee base of 14500+ deployed across
//         various sites.
//         </div>
//       </div>
//       <section className="py-12">
//         <div className="max-w-6xl bg-amber-400 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="rounded-2xl shadow-lg p-6 text-center text-white
//             bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500
//                hover:scale-105 transition-transform duration-300"
//             >
//               <h2 className="text-4xl font-extrabold">
//                 <CountUp end={stat.value} duration={2.5} /> +
//               </h2>
//               <p className="mt-2 text-lg font-medium">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Happy Clients", value: 250 },
  { label: "Sites in Pan India", value: 300 },
  { label: "Employees Deployed", value: 14500 },
  { label: "Million Spaces", value: 90 },
];

export default function Stats() {
  return (
    <div className="w-full mt-[30px] flex justify-center items-center flex-col">
      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-fourth  font-BricolageGrotesque w-[70vw] text-center text-[22px] text-shadow-fourth font-bold mb-8"
      >
        We serve 250+ clients across 300+ sites in pan India and manage 90
        Million+ sq ft space with an employee base of 14500+ deployed across
        various sites.
      </motion.div>

      {/* Stats Section */}
      <section className="py-12 w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 
            rounded-[80px] lg:rounded-[100px]   border-dashed border-yellow-700 border-2 
            mx-auto px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl py-6 text-center text-white hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-4xl font-extrabold">
                <CountUp end={stat.value} duration={2.5} /> +
              </h2>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

