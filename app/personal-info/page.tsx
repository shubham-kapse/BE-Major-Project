'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, navVariants } from '@/utils/motion'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { PERSONALQUESTIONS } from '@/components/constants'

const page = () => {
  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-2 md:py-10">
            <motion.div variants={navVariants} initial='hidden' whileInView='show'>
              <h2 className="h2-medium text-center">Depression Test</h2>
            </motion.div>  
        </section>

        {/* <div>
            <motion.div>
                <Image src='/assets/images/trial1.png' alt='trial' width={1000} height={500}/>
            </motion.div>
        </div> */}

        <section>
            <motion.div variants={navVariants} initial='hidden' whileInView='show' className='mt-5'>
             <p className='ml-10 p-regular-18'>Please take a moment to answer the following optional questions. Your answers are totally anonymous— <br/>we won't be able to identify you based on this information. Your answers help us provide better information and support for people like you.</p> <br/>
             <p className='ml-10 p-regular-18'>You can answer as many or as few questions as you would like. When you are done, scroll to the bottom of the survey and click "submit" to receive your screening results.</p>

             <Separator className='mt-4 border border-gray-100'/>
            </motion.div>
         </section>

         {/* <section>
            <motion.div variants={fadeIn("up", "spring", 0.5, 1)} initial='hidden' whileInView='show'>
            {PERSONALQUESTIONS.map((PERSONALQUESTIONS) => (
            <PersonalQuestion title={PERSONALQUESTIONS.title}/>
         ))}

            </motion.div>
         </section> */}

         <section>
            
         </section>
    </>
  )
}

// type PersonalQuestion = {
//     title: string;
// }

// const PersonalQuestion = ({ title }: PersonalQuestion) => {
//     return(
//         <div className='mt-5 ml-14'>
//             <h2>{title}</h2>
//         </div>
//     )
    
// }

export default page
