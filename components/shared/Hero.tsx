"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'



const Hero = () => {
  return (
    <>
    <section className='bg-white bg-dotted-pattern bg-contain py-5 md:py-10'>
      <motion.div variants= {staggerContainer} initial='hidden' whileInView='show' viewport={{ once: 'false', amount: 0.25 }} className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>


        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className='flex flex-col justify-center gap-8'>
          <h1 className='h1-bold'>Healthy Minds, Happy Lives!</h1>
          <p className='p-regular-16 md:p-regular-16'>Mental Health is just as important as physical health, but it can be difficult to track and manage. We offer a variety of resources and support to help you improve your mental health. </p>

          <Button size='lg' asChild className='button w-full sm:w-fit'>
            <Link href="/test">Lets Get Started </Link>
          </Button>

        </motion.div>

        <motion.div variants={planetVariants('right')} className='flex-1 flex justify-center items-center' >
          <Image src='/assets/images/homeimg1.png' alt='hero' width={1000} height={1000} className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'/>
        </motion.div>

      </motion.div>

    </section>
    
    </>
    
  )
}

export default Hero
