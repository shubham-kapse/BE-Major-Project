"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from "next/link"
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'


const resources = () => {
  return (
    <>

      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-2 md:py-10">
        <motion.div variants={navVariants} initial='hidden' whileInView='show'>
          <h1 className="p-regular-24 md:p-regular-20 text-center">More Information about Mental Health Issues</h1> <br/>
          {/* <p className="text-center">Online Screening is one of the quickest and easiest ways to determine whether yu are experiencing symptoms of a mental health condition <br/> Mental Health conditions such as Depression, Anxiety, are real,common and treatable. And recovery is possible</p> */}
        </motion.div>
      </section>

    <section className='flex-center'>
        <motion.div variants={navVariants} initial='hidden' whileInView='show' className="flex gap-5 py-5">
      <Button size='lg' className="button w-full sm:w-fit bg-green-600 hover:bg-green-800">
        <Link href='/adhd-info'>ADHD</Link>
      </Button>

      <Button size='lg' className="button w-full sm:w-fit bg-green-600 hover:bg-green-800">
        <Link href='/anxiety-info'>Anxiety</Link>
      </Button>

      <Button size='lg' className="button w-full sm:w-fit bg-green-600 hover:bg-green-800">
        <Link href='/depression-info'>Depression</Link>
      </Button>
      </motion.div>
    </section>

    <section className='flex-center'>
        <motion.div  variants={navVariants} initial='hidden' whileInView='show' className="flex gap-5 py-5">
        <Button  size='lg' className="button w-full sm:w-fit bg-green-600 hover:bg-green-800">
            <Link href='/ed-info'>Eating Disorder</Link>
        </Button>

        <Button  size='lg' className="button w-full sm:w-fit bg-green-600 hover:bg-green-800">
            <Link href='/addiction-info'>Addiction</Link>
        </Button>

        </motion.div>
    </section>

    <section className='flex-center'>
        <motion.div variants={navVariants} initial='hidden' whileInView='show' className='flex gap-5 py-5'>
            <Button size='lg' className="button w-full sm:w-fit bg-green-600 hover:bg-green-800">
                <Link href='/ptsd-info'>PTSD</Link>
            </Button>

            <Button size='lg' className="button w-full sm:w-fit bg-green-600 hover:bg-green-800">
                <Link href='/bipolar-info'>Bipolar</Link>
            </Button>
        </motion.div>
    </section>
    </>
  )
}

export default resources
