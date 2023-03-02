import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//import motion
import { motion } from 'framer-motion';
//import variant
import { fadeIn } from '../variants';
//import link
import { Link } from 'react-scroll';


const About = () => {
  const [ref,inView] = useInView({
    threshold:0.5,
  });
  return(
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 '>
          {/* image */}
        <motion.div
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}} 
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        {/* text  */}
        <div className='flex-1'>
          <motion.h2
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='text-accent h2 uppercase '>about me</motion.h2>
          <motion.h3
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='h3 mb-3'>I am a Software Developer with a Bachelor of Science in Computer Science</motion.h3>
          <motion.p
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='mb-6'>Adept at working effectively in fast-paced, deadline-driven settings that demand strong organizational and analytical skills.</motion.p>
          {/* stats */}
          <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} className='flex gap-x-6 mb-6'>
            <div>
              <div className='text-[35px] font-tertiary text-gradient mb-2'>
               {inView ?<CountUp start={0} end={3} duration={2}/>:null} 
               +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of<br/> Experience
              </div>
            </div>
            <div>
              <div className='text-[32px] font-tertiary text-gradient mb-2'>
               {inView ?<CountUp start={0} end={15} duration={1}/>:null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects<br/> Completed 
              </div>
            </div>
            <div>
              <div className='text-[35px] font-tertiary text-gradient mb-2'>
               {inView ?<CountUp start={0} end={1} duration={2}/>:null} 
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Companies<br/> Worked For
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex max-w-max gap-x-8 items-center mb-12 mx-auto lg:mx-0'>
            <Link to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            ><button className='btn btn-lg'>Contact Me</button></Link>
            <a href='https://github.com/msiyaz/Projects' className='text-gradient btn-link'>My GitHub Portfolio</a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default About;
