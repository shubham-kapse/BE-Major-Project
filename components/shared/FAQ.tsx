'use client'
import React from 'react'
import { motion } from 'framer-motion' 
import { fadeIn, footerVariants, navVariants, planetVariants } from '@/utils/motion'
import { Separator } from '../ui/separator'


const FAQ = () => {
  return (
    <>
        <section className='bg-white bg-dotted-pattern bg-contain py-5 md:py-10 '>
            <motion.div variants={navVariants} initial='hidden' whileInView='show' className='wrapper'>
                <div className='p-regular-20 md:p-regular-24'>
                    <h1 className='text-center'> Frequently Asked Questions </h1> <br/>
                    <h2>How can I benefit from using a Mental Health Tracker Website?</h2> <br/>
                    <Separator/> <br/>
                    <h2>Is my data secure on a Mental Health Tracker Website? </h2> <br/>
                    <Separator/> <br/>
                    <h2>What kind of information can I track on a Mental Health Tracker Website?</h2> <br/>
                    <Separator/> <br/>
                    <h2>How can I get the most of using a Mental Health Tracker Website? </h2>
                    

                </div>
            </motion.div>
            

        </section>
      
    </>
  )
}

export default FAQ
