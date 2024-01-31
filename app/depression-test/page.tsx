"use client"

import { motion } from "framer-motion"
import { fadeIn, footerVariants, navVariants } from "@/utils/motion"
import { DEPRESSIONQUESTIONS } from "@/components/constants"
import { Button } from "@/components/ui/button"
import Link from "next/link"


function page() {
  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-2 md:py-10">
            <motion.div variants={navVariants} initial='hidden' whileInView='show'>
              <h2 className=" h2-medium text-center">Depression Test</h2>
           </motion.div>  
      </section>

      <section>
        <motion.div variants={navVariants} initial='hidden' whileInView='show'>
              <p className="text-center p-regular-18 py-2">Over the last two weeks, how often have you been bothered by any of the following problems?</p> 
              <p className="text-center font-bold">Please note, all fields are required</p>
        </motion.div>
      </section>

      <section className="mt-10">
      <motion.div variants={fadeIn("up", "spring", 0.5, 1)} initial='hidden' whileInView='show'>
         {DEPRESSIONQUESTIONS.map((DEPRESSIONQUESTIONS) => (
            <Depression title={DEPRESSIONQUESTIONS.title}/>
         ))}
         
        </motion.div>
      </section>

      <section className="mt-10 mb-5">
      <motion.div variants={footerVariants} initial='hidden' whileInView='show' className="flex-between">
            <Button className="ml-10">
              <Link href='/test'>Previous</Link>
            </Button>

            <Button className="mr-20">
              <Link href='/personal-info'>Next</Link>
            </Button>
      </motion.div>
      </section>
    
    </>
  )
}

type Depression = {
  title: string;
}

const Depression = ({ title }: Depression ) => {
  return(
    <div className="space-y-5 mt-5">
      <h2 className="font-medium ml-28">{title}</h2>
      <div className="ml-28 space-x-5">
        <Button>Not Difficult At All</Button>
        <Button>SomeWhat Difficult</Button>
        <Button>Very Difficult</Button>
        <Button>Extremely Difficult</Button>
      </div>
    </div>


    
  )
}

export default page
