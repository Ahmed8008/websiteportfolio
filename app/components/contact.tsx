"use client"
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import {motion} from "framer-motion";
import {sendEmail} from "@/actions/sendEmail";
import toast from 'react-hot-toast';


export default function Contact(){

  
    

    return <motion.section id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-[10rem]'
                            initial={{
                                    opacity: 0,                                   
                            }}

                            whileInView={{
                                opacity: 1
                            }}

                            transition={{
                                duration: 1
                            }}

                            viewport={{
                                once: true
                            }}
    
    >
         <h2 className='text-3xl font-medium capitalize mb-8'>
                Contact me
            </h2>
        <p className='text-white -mt-6'>
            please contact me directly <a className='underline' href='mailto:example@gmail.com'>

                ahmedusmani643@gmail.com
            </a> {""}

                or through this form 

        </p>

        <form className='mt-10 flex flex-col text-black' action={async (formData) => {
            await sendEmail(formData);
            toast.success("Email Sent successfully")
        } }>
            <input   name="senderEmail" type='email' placeholder='Your Email' className='h-14 rounded-lg border-black/10 px-4'
            required
            maxLength={500} 
             
             />
            <textarea name="message" placeholder='Your Message' className='h-52 my-3 rounded-lg border-black/10 p-4' required maxLength={5000} />
            <button type='submit'  className=' group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none 
            trasnsition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'
            
            >Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 
            group-hover:-translate-y-1 " /> {""} </button>
            
        </form>

    </motion.section>;
}

