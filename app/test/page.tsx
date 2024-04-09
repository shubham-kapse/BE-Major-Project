"use client"

import { motion } from "framer-motion" 
import { navVariants, footerVariants, planetVariants } from "@/utils/motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"


function page() {
  return (
    <>
    {/* Top banner */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-2 md:py-10">
        <motion.div variants={navVariants} initial='hidden' whileInView='show'>
          <h1 className="p-regular-24 md:p-regular-20 text-center">Take a Mental Health Test</h1> <br/>
          <p className="text-center">Online Screening is one of the quickest and easiest ways to determine whether yu are experiencing symptoms of a mental health condition <br/> Mental Health conditions such as Depression, Anxiety, are real,common and treatable. And recovery is possible</p>
        </motion.div>
      </section>

    {/* Top Buttons */}

      <section className="flex-center">
        <motion.div variants={navVariants} initial='hidden' whileInView='show' className="flex gap-5 py-5">

         <Button size='lg' className="button w-full sm:w-fit bg-green-600 hover:bg-green-800"><Link href='/depression-test'>Depression Test</Link></Button>

         {/* <Button size='lg' className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800"><Link href='/postpartum-test'>PostPartum Depression(New and Expecting Parents)</Link></Button> */}

         <Button size='lg' className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800">
            <Link href='/youth-mental-health'>Youth Mental Health Test</Link>
          </Button>

         <Button size='lg' className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800"><Link href='/anxiety-test'>Anxiety Test</Link></Button>
        </motion.div>
      </section>

      {/* Middle Buttons */}

      <section className="flex-center">
        <motion.div variants={navVariants} initial='hidden' whileInView='show' className="flex gap-5">
          <Button size='lg' className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800">
            <Link href='/adhd-test'>ADHD Test</Link>
          </Button>
          <Button size='lg' className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800">
            <Link href='/bipolar-test'>Bipolar Test</Link>
          </Button>
          <Button size='lg' className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800">
            <Link href='/psychosis-test'>Psychosis Test</Link>
          </Button>
        </motion.div>
      </section>

      {/*Bottom Buttons */}
      
      <section className="flex-center ">
       <motion.div variants={footerVariants} initial='hidden' whileInView='show' className="flex gap-5 py-5">
          <Button className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800" size='lg' >
            <Link href='/ptsd-test'>PTSD Test</Link>
          </Button>
          <Button className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800" size='lg'>
            <Link href='/eating-disorder-test'>Eating Disorder Test</Link>
            </Button>
          <Button className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800" size='lg'>
            <Link href='/addiction-test'>Addiction Test</Link>
          </Button>
       </motion.div>     
      </section>

      <section className="flex-center">
        <motion.div variants={footerVariants} initial='hidden' whileInView='show' className="flex gap-5">
          {/* <Button size='lg' className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800">Parent Test - Your Childs Mental Health</Button> */}
          {/* <Button size='lg' className="button w-full sm:w-fit  bg-green-600 hover:bg-green-800">
            <Link href='/youth-mental-health'>Youth Mental Health Test</Link>
          </Button> */}
        </motion.div>

      </section>


    </>
  )
}

export default page
