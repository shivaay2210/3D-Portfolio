import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className="p-2 font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[78px] mt-2">
        Skills.
        </p>                
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28 key={tech.name}">
            <BallCanvas icon = {tech.icon} />
          </div>
        ))}
      </div>
    </>
  ) 
}

export default SectionWrapper(Tech, "");