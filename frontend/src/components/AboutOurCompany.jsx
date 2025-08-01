import { stagger, useAnimate } from "motion/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

import home from "../assets/home.jpg";
import office from "../assets/office-building.png";
import arrow from "../assets/arrow.png";

export default function AboutOurCompany() {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) startAnimating();
  }, [isInView]);

  const startAnimating = () => {
    animate(
      ".words",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 1,
        ease: "easeInOut",
        delay: stagger(0.05),
      }
    );
  };

  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere porro ullam nobis maxime ipsa possimus eaque id temporibus et ratione impedit hic cupiditate commodi sint, itaque sit. Culpa, aliquam sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit, itaque quam laborum impedit non excepturi quis, repellat consequatur reiciendis sit harum magnam porro eaque. Iure dolorem magni qui doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum voluptatibus, in iste corporis dicta nulla, perspiciatis expedita nihil illum esse. Dolores, esse mollitia. Vitae dolore sequi voluptates unde. Eveniet.";

  return (
    
    <div className="min-h-screen  bg-white/50  border-dashed  pb-10 md:pb-5 rounded-[80px] md:rounded-[250px] border w-full flex flex-wrap items-center   max-w-screen-xl mx-auto  justify-center px-4 md:px-0">
      <div className="w-full flex-wrap max-w-[1280px] flex flex-col justify-center">
        <div className="flex  justify-center">
          <motion.div
            className="flex text-fourth justify-center items-center pt-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            <div className="text-center mb-8 ">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center items-center gap-2"
              >
                <img src={office} alt="office" className="h-6 md:h-[5vh]" />
                <motion.h1 className="text-xl md:text-4xl font-bold text-purple-800">
                  ABOUT OUR COMPANY
                </motion.h1>
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex  justify-center items-center  mt-2 text-base md:text-2xl"
              >
                <motion.img
                  src={arrow}
                  alt="arrow"
                  className="hidden md:block h-5 md:h-[5vh]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { duration: 1 } }}
                />
                <p className="pl-3">
                  The Fastest Growing Integrated Facility Management Company
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="  mt-[5vh] flex md:flex-row flex-col-reverse gap-10 w-full px-4">

          <div className="w-full lg:w-1/2 flex items-center justify-center px-4">
            <div
              className="border-2 p-1 rounded-2xl bg-white/80 border-amber-500"
              style={{
                background: "linear-gradient(45deg, #FCF55F, #DAA520)",
              }}
            >
              <img
                src={home}
                alt="home"
                className="w-auto h-[45vh] md:h-[50vh] border-2 border-fourth rounded-2xl brightness-90 object-cover"
              />
            </div>
          </div>

          <div
            ref={scope}
            className="  w-full h-full  lg:w-1/2 flex justify-center ">
            <div className=" rounded-2xl px-[10px] md:px-10 md:py-2 w-full   text-neutral-900  leading-relaxed text-justify ">
              {text.split(" ").map((word, index) => (
                <motion.span
                  className="font-medium words inline-block text-[16px] md:text-[22px]"
                  style={{
                    opacity: 0,
                    filter: "blur(10px)",
                    y: 0,
                  }}
                  key={word + index}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
