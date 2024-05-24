"use client";
import React from 'react';
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <section className="text-white">
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hi, I am {" "}
            <br />
            <span style={{ display: "inline-block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              <TypeAnimation
                sequence={[
                  "Chuan Liu",
                  1000,
                  "Software Engineer",
                  1000,
                  "Data Analyst",
                  1000
                ]}
                wrapper='span'
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            4th Year Computer Science & Statistics Student at the University of Toronto.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
