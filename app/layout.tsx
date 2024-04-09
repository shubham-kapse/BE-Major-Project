import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { motion } from 'framer-motion' 
import { fadeIn } from '@/utils/motion'





const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'MindfulCare',
  description: 'A Mental Health Well-Being App.',
  icons: {
    icon: '/assets/images/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} initial='hidden' whileInView='show'> */}
        
        <body className={poppins.variable}>
          
          
          {children}
          
          <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/f3ec3f79-e020-4ac7-8a0b-a7178e25078d/webchat/config.js" defer></script>

        </body>

        {/* </motion.div> */}
        
      </html>
    </ClerkProvider>
  )
}