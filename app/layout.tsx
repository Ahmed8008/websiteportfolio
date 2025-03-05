
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PortFolio',
  description: 'I am full stack Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={ '${inter.className} bg-purple-700 text-white relative h-[900px] pt-28 sm:pt-36' } >
      
      <div className='bg-[#efcffe] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] '></div>
      <div className='bg-[#a5b4fc] absolute top-[-6rem]  -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]   '></div>
        
        
      {children}
      <Toaster position='top-right'/>
      </body>
    </html>
  )
}
