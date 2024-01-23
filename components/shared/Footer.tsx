"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from '@/utils/motion'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <motion.footer variants={footerVariants} initial='hidden' whileInView='show' className='border-t'>

      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image src='/assets/images/logo.svg' alt='logo' width={128} height={38}/>
        </Link>

        <p>2024 MindfulCare. All Rights Reserved</p>
      </div>

    </motion.footer>
  )
}

export default Footer
