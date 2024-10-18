import { features } from "../constants";
import { motion, transform } from "framer-motion"

const container = (delay) => ({
  hidden: {x: 50, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 1.5, delay: delay},
  }
})
const container2 = (delay) => ({
  hidden: {x: -50, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 1.5, delay: delay},
  }
})

const howItWorks = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
      
        <motion.h2
         whileInView={{opacity: 1, x:0}}
         initial={{opacity:0, x: 100}}
         transition={{duration: 0.5}} className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          How it{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Works?
          </span>
        </motion.h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <motion.div 
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x: -100}}
              transition={{duration: 0.5}}className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </motion.div>
              <div>
                <motion.h5
                 whileInView={{opacity: 1, x:0}}
                 initial={{opacity:0, x: -100}}
                 transition={{duration: 0.5}} className="mt-1 mb-6 text-xl">{feature.text}</motion.h5>
                <motion.p
                 whileInView={{opacity: 1, x:0}}
                 initial={{opacity:0, x: -100}}
                 transition={{duration: 0.5}} className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </motion.p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default howItWorks;
