"use client";
import React, { useState } from 'react';
import TabBotton from './TabBotton';

const navLinks = [
    {
        title: "Education",
        id: "education",
        content: (
          <ul className='list-disc pl-5'>
            <li>University of Toronto - B.Sc. Major in Computer Science and Statistics</li>
            <li>Relevant coursework: Software Design, Computer Organization, Data Structures, Algorithms, Database Systems, Machine Learning, Probability</li>
          </ul>
        )
      },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-5'>
        <li>Java</li>
        <li>Python</li>
        <li>Spring Boot</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>React</li>
        <li>Unity</li>
      </ul>
    )
  },
  {
    title: "Projects",
    id: "projects",
    content: (
      <ul className='list-disc pl-5'>
        <li>Air Ticket Booking System</li>
        <li>Website Development</li>
        <li>Product Design</li>
        <li>Machine Learning</li>
        <li>Computer Graphics</li>
        <li>Computer Vision</li>
        <li>Databse Management System</li>
        <li>Statistical Analysis</li>
        <li>More Details in Project Section...</li>
      </ul>
    )
  }
];

const AboutMe = () => {
  const [tab, setTab] = useState("education");

  const handleTabChange = (id) => {
    setTab(id);
  };

  const currentContent = navLinks.find(link => link.id === tab)?.content;

  return (
    <section className='text-white py-16 px-8'>
      <div className='md:grid md:grid-cols-2 gap-8 items-start'>
        <div>
          <h2 className='text-4xl font-bold mb-6'>
            About Me
          </h2>
          <p className='text-base lg:text-lg mb-8'>
            As a Computer Science student at the University of Toronto and an enthusiastic software developer, I have a strong passion for designing and developing interactive applications. I have experience with Back-End Development, Database Management System, Data Analytics, UX Design, Game Design etc.
            I am a quick learner, constantly seeking to expand my knowledge and skills. I thrive in collaborative environments and am always excited to work with others to build innovative and engaging applications.
          </p>
          <div className='flex flex-wrap'>
            {navLinks.map((link, index) => (
              <TabBotton
                key={index}
                selectTab={() => handleTabChange(link.id)}
                active={tab === link.id}
              >
                {link.title}
              </TabBotton>
            ))}
          </div>
          <div className='mt-8'>
            {currentContent}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
