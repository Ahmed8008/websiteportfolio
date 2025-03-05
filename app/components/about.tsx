'use client'
import React from 'react';
import {delay, motion} from "framer-motion";

export default function About(){
    return <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y:0}}
    transition={{dealy: 0.175}}
    id="about"
    >
        <h2 className='text-3xl font-medium capitalize mb-8'>
               Rectenly Done Porject 
            </h2> 
        <p className='mb-3 '>

    
        </p>

        <p className=' text-2xl'>
       <i> Recently collaborated with <b>AFAQ Alarabiya, a leading Saudi Arabian company</b>, to develop a sophisticated billing invoice portal utilizing .NET technology, SQL Server, and C#. The portal was meticulously designed to streamline their invoicing processes, boosting operational efficiency, accuracy, and enhancing user experience with a custom, user-friendly interface. Continue to provide dedicated maintenance and support to ensure optimal performance, addressing issues as they arise and implementing updates. Due to the company’s privacy policy, unable to share the website link.</i>
        </p>
    </motion.section>

}

