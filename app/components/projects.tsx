import React from 'react';
import { projectsData } from '../lib/data';
import Project from "./project"

export default function Myprojects() {
    return     <section id='projects' className='scroll-mt-[10rem] mb-28'>
        <div>
            {
                projectsData.map((project,index) => (

                        <React.Fragment key={index} >
                    <Project {...project} />
                    </React.Fragment>
                ))
            }

            </div>
 </section>
  
}

