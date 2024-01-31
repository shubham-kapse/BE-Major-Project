"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from '@/utils/motion'
import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, socials } from '@/constants'

const Footer = () => {
  return (
    <>
      <section className='mt-16'>
        <motion.footer className='flex-center mb-24' variants={footerVariants} initial='hidden' whileInView='show'>

          <div className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex w-full flex-col gap-14'>

            <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
              <Link href='/' className='mb-10'>
                <Image src='/assets/images/logo.png' alt='logo' width={128} height={38}/>
              </Link>

              <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                {FOOTER_LINKS.map((columns) => (
                  <FooterColumn title={columns.title}>
                    <ul className='regular-14 flex flex-col gap-4'>
                        {columns.links.map((link) => (
                          <Link href='/' key={link}>{link}</Link>
                        ))}
                    </ul>
                  </FooterColumn>
                ))}

                <div className='flex flex-col gap-5'>
                      <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                          {FOOTER_CONTACT_INFO.links.map((link) => (
                            <Link href='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                              <p className='whitespace-nowrap'>{link.label} :</p>
                              <p className='medium-14 whitespace-nowrap text-blue-950'>{link.value}</p>
                            </Link>
                          ))}
                      </FooterColumn>
                </div>

                <div className='flex flex-col gap-5'>
                      <FooterColumn title={socials.title}>
                        <ul className='regular-14 flex gap-4'>
                            {socials.links.map((link) => (
                              <Link href='/' key={link}>
                                <Image src={link} alt='logo' width={24} height={24}/>
                              </Link>
                            ))}
                        </ul>

                      </FooterColumn>
                </div>
              </div>
            </div>
                 <div>
                    <p className='regular-14 w-full text-center'>2024 MindFul Care | All rights reserved</p>
                 </div>
          </div>
        </motion.footer>
      </section>
    </>
  )
}

type FooterColumnProps = {
  title? : string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='font-bold whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}


export default Footer
