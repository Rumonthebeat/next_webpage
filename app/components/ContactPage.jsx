/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';

const ContactMe = () => {
  return (
    <div>
      <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Let's get in touch!</h1>
      <br />
      <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
        If you wanna get in touch, talk to me about a project collaboration or just say hi, you are more than welcome to send an email to me! Also feel free to contact me by any social media below.
      </p>
      <br />
      <div className="flex flex-col items-center space-y-6 mt-6 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center">
        <a
          href="https://linkedin.com/in/chuan-liu-312950244"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-blue-500 to-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-110 w-48 h-16 flex items-center justify-center"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/rumonthetrack/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-blue-500 to-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-110 w-48 h-16 flex items-center justify-center"
        >
          Instagram
        </a>
        <a
          href="mailto:liuchuan0508@gmail.com"
          className="bg-gradient-to-tr from-blue-500 to-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-110 w-48 h-16 flex items-center justify-center"
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
