"use client"

import { motion } from "framer-motion"
import { navVariants } from "@/utils/motion"

function page() {
  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-2 md:py-10">
            <motion.div variants={navVariants} initial='hidden' whileInView='show'>
              <h1 className="md:p-regular-20 text-center">Depression Test</h1>
              <p className="text-center py-2">Over the last two weeks, how often have you been bothered by any of the following problems?</p> 
              <p className="text-center font-bold">Please note, all fields are required</p>
        </motion.div>
      </section>
    
    </>
  )
}

export default page
