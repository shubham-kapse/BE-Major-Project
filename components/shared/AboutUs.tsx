"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
    <section className='bg-white bg-dotted-pattern bg-contain py-5 md:py-10'>
      <motion.div variants= {staggerContainer} initial='hidden' whileInView='show' viewport={{ once: 'false', amount: 0.25 }} className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>

      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className='flex-1 flex justify-center items-center' >
          <Image src='/assets/images/image-about-us.png' alt='hero' width={1000} height={1000} className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'/>
        </motion.div>


        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className='flex flex-col justify-center gap-8'>
          <h1 className='h1-bold'>About Us</h1>
          <p className='p-regular-16 md:p-regular-16'>Welcome to MindFulCare, where we believe that taking care of your mental well-being is a journey worth tracking. We understand that mental health is a vital component of overall wellness, and we're here to support you every step of the way. <br/> 
          Our mission is to empower individuals to prioritize their mental health, reduce stigma, and promote self-awareness. We provide a safe and compassionate space for you to monitor and improve your mental health, becaise we believe that evryone deserves access to the resources and tools they need to thrive.<br/> 
          We invite you to explore our website, use our tracking tools, access valuable resources, and become a part of of our supportive community. Together, we can break the silence surrounding mental health, foster self-care, and empower one another to lead happier, healthier lives. Thank you for choosing MindFulCare as your partner on this journey. Your well-being matters, and we're here to help you prioritize it.</p>

        </motion.div>

        

      </motion.div>

    </section>
    </>
  )
}

export default Hero
