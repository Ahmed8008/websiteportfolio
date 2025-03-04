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
               Rectenly Done Project 
            </h2> 
        <p className='mb-3 '>

    
        </p>

        <p className=' text-2xl'>
       <i> Recently collaborated with the Saudi Arabian company AFAQ Alarabiya, delivering a sophisticated billing invoice portal using .NET technology, SQL Server, and C#. The portal was designed to streamline the company’s invoicing processes, significantly improving efficiency, accuracy, and user experience. With its robust architecture and user-friendly interface, the system was tailored to meet AFAQ Alarabiya’s specific business requirements, ensuring smooth financial operations.

Currently, ongoing maintenance and support are being provided for the portal to ensure smooth operations, addressing any issues that arise, and implementing updates to enhance its functionality and performance. This long-term commitment reflects a dedication to delivering a comprehensive solution that not only meets but exceeds client expectations.       </i>

        </p>
    </motion.section>

}

