import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";



const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className="p-2 font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[78px] mt-2">
      EDUCATION
      </p>
    </motion.div>
    </> 
  )
}

export default SectionWrapper(Experience, "work")