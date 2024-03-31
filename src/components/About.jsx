import React from 'react'
import {Tilt} from 'react-tilt'
import { SectionWrapper } from "../hoc";
import {motion} from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className="p-2 font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[78px] mt-2">
      LET ME <span className='text-[#915EFF]'> INTRODUCE</span> MYSELF
      </p>
    </motion.div>

    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='p-2 mt-4 text-secondary text-[22px] max-w-5xl leading-[50px]'
      >
        I am a 3rd year undergraduate at Delhi Technological University, 
        I love <span className='text-[#915EFF]'>problem solving</span> and doing competitive programming. 
         My field of Interest's are building new <span className='text-[#915EFF]'>
        Web Technologies and Products </span>. I am a <span className='text-[#915EFF]'>
        tech geek</span> and always learn and explore things related
        to <span className='text-[#915EFF]'>Technology and Softwares</span>. 
        Currently I'm learning different <span className='text-[#915EFF]'>Web Development Technologies </span>. My 
        hobbies are watching movies,
        <span className='text-[#915EFF]'> playing cricket </span>and reading books.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 cursor-pointer'>
        {services.map((service, index) => (
          <a href={`${service.link}`}><ServiceCard key={service.title} index={index} {...service} /> </a>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");