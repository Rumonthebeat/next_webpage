"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const DynamicRouter = dynamic(() => import('./components/ClientRouter'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 flex-grow">
        <DynamicRouter />
      </div>
      <Footer />
    </div>
  );
}