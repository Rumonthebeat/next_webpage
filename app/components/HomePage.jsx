"use client";
import React from 'react';
import { TypeAnimation } from "react-type-animation";
import Image from 'next/image';

const HomePage = () => {
  return (
    <section> 
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    Hi, I am {" "}
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        "Chuan Liu",
                        1000,
                        "Software Engineer",
                        1000,
                        "Data Analyst",
                        1000]
                    }
                    wrapper='span'
                    speed={50}
                    style={{fontSize: "1.5em", display: "inline-block"}}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                    4th Year Computer Science & Statistics Student at the University of Toronto.
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'> Contact me</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download Resume</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePage