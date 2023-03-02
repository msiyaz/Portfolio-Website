import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//images 
import img1 from '../assets/cafe.png'
import img2 from '../assets/skkynation.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
          variants={fadeIn('left', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br/>
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
              I'm an adventurous person who enjoys using software and technology to solve problems.
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <a href='https://skkynation.com/'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                </div>
                </a>
                {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
                {/* pretittle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span>Skkynation Media</span>
                  </div>
                {/* tittle */}
                <div className='absolute
                -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Photography Portfolio</span>
                </div>
              </div>
            
            </motion.div>
                <motion.div 
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='flex-1 flex flex-col gap-y-10'>
                {/* Image */}
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                  {/* overlay */}
                  <a href='https://effervescent-dango-bed3f7.netlify.app/'>
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                  </div>
                  </a>
                  {/* img */}
                    <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
                  {/* pretittle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span>Bistro Cafe</span>
                    </div>
                  {/* tittle */}
                  <div className='absolute
                  -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Restaurants Landing Website</span>
                  </div>
                </div>
              </motion.div>
            
        </div>
      </div>
  </section>
  )
};

export default Work;
