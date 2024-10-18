import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, transform } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  }
})
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <motion.h1
       whileInView={{opacity: 1, x:0}}
       initial={{opacity:0, x: -100}}
       transition={{duration: 0.6}} className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
       Welcome to 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Mock<span className="text-black">X</span>pert
        </span>
      </motion.h1>
      <motion.p 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity:0, x: 100}}
      transition={{duration: 0.9}} className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Prepare for your next job interview with our AI-powered mock interview platform. Practice answering common interview questions and receive feedback to improve your performance.
      </motion.p>

      <motion.div
      whileInView={{opacity: 1, x:0}}
      initial={{opacity:0, x: -100}}
      transition={{duration: 1.0}} className="flex justify-center gap-7 my-10">
      <Link href="/dashboard">
         <Button className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 rounded-md">
         Create an account
          </Button>
        </Link>

        <Link href="/dashboard">
  <Button className="bg-white text-black border-2 border-transparent hover:bg-white border-neutral-300 py-3 px-4 rounded-md">
    Go to dashboard
  </Button>

</Link>
<Link href="/employerdashboard">
  <Button className="bg-white text-black border-2 border-transparent hover:bg-white border-neutral-300 py-3 px-4 rounded-md">
    Go to employerdashboard
  </Button>
  
</Link>

        
        
        
      </motion.div>
      
    </div>
  );
};

export default HeroSection;
