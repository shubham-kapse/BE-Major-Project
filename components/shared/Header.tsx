"use client"
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'



const Header = () => {
  return (
    <motion.nav variants={navVariants} initial='hidden' whileInView="show" className='sm:px-16 px-6 py-8 relative'>
        <header className='w-full border-b'>
            <div className='wrapper flex items-center justify-between'>
                <Link href='/' className='w-36'>
                    <Image src='/assets/images/logo.png' width={90} height={38} alt='logo' />
                </Link>
                <SignedIn>
                    <nav className='md:flex-between hidden w-full max-w-xs'>
                        <NavItems/>
                    </nav>
                </SignedIn>

                <div className='flex w-32 justify-end gap-3'>
                    <SignedIn>
                        <UserButton afterSignOutUrl='/'/>
                        <MobileNav/>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className='rounded-full' size='lg'>
                            <Link href='/sign-in'>
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                    
                </div>
            </div>
        </header>
    </motion.nav>
  )
}

export default Header
