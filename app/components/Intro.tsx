"use client";
import React from 'react';
import {delay, motion} from "framer-motion";
import {links} from  "@/app/lib/data";
import Link from 'next/link';
import Image from 'next/image'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro()
{
    return(
        <section id='home' className= 'mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center' > 
            <div className='relative'>
                <motion.div

                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{type:"tween", duration:0.2, }}

                >
                   

                 </motion.div>
                    <motion.span  className='absolute bottom-0 right-0 text-4xl' 
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1,scale:1}}
                        transition={{type:'spring', stiffness: 125, delay: 0.1, duration: 0.7,  }}
                    
                    >
                        👋

                     </motion.span>

            </div>
         </div>
         <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
           initial={{opacity: 0, scale: 0}}
           animate={{opacity: 1, scale: 1}}
           transition={{type:"tween", duration:0.2, }}
         >
            <span className='font-bold'> Hello,
            </span> I'm a {""}

            <span className='font-bold'>full-stack
                Web developer
            </span>
            

         </motion.p>
        
    
        

       
        </section>


    )
}
