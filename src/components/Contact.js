import React, {useState,useRef} from 'react';
//import motion
import { motion } from 'framer-motion';
//import variants
import { fadeIn } from '../variants';
//import emailjs
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0g8oczd', 'template_u816ef7', form.current, 'KACmQ19f0JxBwClG-')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  <section className='section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together</h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form
        ref={form} onSubmit={sendEmail}
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='flex-1 '>
          <input name="user_name" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='name'/>
          <input name="user_email" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='email'/>
          <textarea name="message" className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' type='text' placeholder='message'/>
          <input type='submit' className='btn btn-lg' value= 'Send It'/>
              <span>{done && "Thank you "}</span>
        </motion.form>
      </div>
    </div>
  </section>
  )
};

export default Contact;
