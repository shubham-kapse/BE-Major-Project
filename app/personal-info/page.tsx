'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, navVariants } from '@/utils/motion'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { PERSONALQUESTIONS } from '@/components/constants'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const page = () => {
  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-2 md:py-10">
            <motion.div variants={navVariants} initial='hidden' whileInView='show'>
              <h2 className="h2-medium text-center">Personal Information</h2>
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

        <motion.div variants={navVariants} initial='hidden' whileInView='show' className='mt-5 ml-5'>

          <p>Are you taking this test for yourself or for someone else?</p>
          <div className='space-x-5 mr-5 mt-2'>
          <Button className='button'>FOR MYSELF</Button>
          <Button className='button'>FOR SOMEONE ELSE</Button>
          </div>

          <div>
            <h3 className='text-2xl font-bold mt-5'>About You</h3>
            
            <div className='ml-5'>
            <p className='mt-2'>Enter Your Age: </p>
            <input type='number' className='border-black border'/>

            <p className='mt-5'>Gender</p>

            <div className='space-x-4'>
            <Button>Male</Button>
            <Button>Female</Button>
            <Button>Other</Button>

            <p className='mt-5'>Which state do you live in?</p>
            <input className='border border-black' type='text'/>
            </div>

            <div>
              <p className='mt-5 mr-2 p-regular-16'>Which of the following populations describes you?</p>
            </div>
            
            <div className='mt-5'>
              <RadioGroup defaultValue="comfortable" className='space-y-5'>
              <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1" className='p-regular-16'>Veteran or active-duty military</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2" className='p-regular-16'>Caregiver of someone living with emotional or physical illness</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3" className='p-regular-16'>LGBTQ+</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="value1" id="r4" />
              <Label htmlFor="r4" className='p-regular-16'>Student</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="value2" id="r5" />
              <Label htmlFor="r5" className='p-regular-16'>Trauma survivor</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="value3" id="r6" />
              <Label htmlFor="r6" className='p-regular-16'>New or expecting parent</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="value4" id="r7" />
              <Label htmlFor="r7" className='p-regular-16'>Healthcare worker</Label>
            </div>
            </RadioGroup>
            </div>

            </div>
          </div>

          <motion.div initial='hidden' whileInView='show'>
            <h2 className='mt-5 text-xl'>About Your Mental Health</h2>
            
          </motion.div>

        </motion.div>

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
