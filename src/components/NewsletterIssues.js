import React, { useState, useRef, useEffect } from "react";
import processPlugins from "tailwindcss/lib/util/processPlugins";
import SwiftAnimate from "../utils/SwiftAnimate.js";

const NewsletterIssues = () => {
  const [tab, setTab] = useState(1);
  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };
  
  useEffect(() => {
    heightFix();
  }, [tabs]);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-purple-200 pointer-events-none pb-26"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Newsletter Archives</h1>
            <p className="text-xl text-gray-600">
              Archives of all of our previously published Newsletters.
            </p>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">All of our released #Issues</h3>
                <p className="text-xl text-gray-600"></p>
              </div>
              <div className="mb-8 md:mb-0">
                 {/*  */}
            
         {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #22
                    </div>
                    <div className="text-gray-100">
                      Released Date: August 3rd 2022
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-yellow-500 rounded-full shadow flex-shrink-0 ml-12">
                    <img src="https://user-images.githubusercontent.com/37651620/182317153-563e73e3-a4ff-4c31-a202-deb1413d8a2d.png" alt=""/>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

            {/*  */}
            
         {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #21
                    </div>
                    <div className="text-gray-100">
                      Released Date: July 23rd 2022 
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}
   {/* Tab */}
   <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #20
                    </div>
                    <div className="text-gray-100">
                      Released Date: July 9th 2022 
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #19
                    </div>
                    <div className="text-gray-100">
                      Released Date: July 6th 2022 
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 5
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(5);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #18
                    </div>
                    <div className="text-gray-100">
                      Released Date: June 25th 2022 
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

              {/* Tab */}
            {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 6
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(6);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #17
                    </div>
                    <div className="text-gray-100">
                      Released Date: June 18th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 7
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(7);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #16
                    </div>
                    <div className="text-gray-100">
                      Released Date: June 11th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 8
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(8);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #15
                    </div>
                    <div className="text-gray-100">
                      Released Date:  May 2nd 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 9
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(9);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #14
                    </div>
                    <div className="text-gray-100">
                      Released Date: April 26th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 10
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(10);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #13
                    </div>
                    <div className="text-gray-100">
                      Released Date: April 19th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 11
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(11);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #12
                    </div>
                    <div className="text-gray-100">
                      Released Date: April 12th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 12
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(12);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #11
                    </div>
                    <div className="text-gray-100">
                      Released Date: April 5th 2022 
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}
              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 13
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(13);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #10
                    </div>
                    <div className="text-gray-100">
                      Released Date: March 26th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 14
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(14);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #9
                    </div>
                    <div className="text-gray-100">
                      Released Date: March 14th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}
              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 15
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(15);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #8
                    </div>
                    <div className="text-gray-100">
                      Released Date: March 9th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 16
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(16);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #7
                    </div>
                    <div className="text-gray-100">
                      Released Date: March 5th 2022 
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}
              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 17
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(17);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #6
                    </div>
                    <div className="text-gray-100">
                      Released Date: February 23rd 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 18
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(18);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #5
                    </div>
                    <div className="text-gray-100">
                      Released Date: February 9th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}
              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 19
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(19);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #4
                    </div>
                    <div className="text-gray-100">
                      Released Date: January 25th 2022 
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}

              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 20
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(20);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #3
                    </div>
                    <div className="text-gray-100">
                      Released Date: January 10th 2022
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}
              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 21
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(21);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #2
                    </div>
                    <div className="text-gray-100">
                      Released Date: December 22nd 2021
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}
              {/*  */}

               {/* Tab */}
         <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 22
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(22);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #1
                    </div>
                    <div className="text-gray-100">
                      Released Date: November 22nd 2021 
                    </div>
                  </div>
                </a>
      {/* Tab */}
            {/*  */}
              </div>
               
            </div>
  {/* Tabs items */}
  <div
       className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
       data-aos="zoom-y-out"
       ref={tabs}
     >
       <div className="relative flex flex-col text-center lg:text-right">
         {/* Issues  1 */}
         <SwiftAnimate
           show={tab === 1}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/august-3rd-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182344962-071e4a67-ce38-460c-8dfa-062a35b622e0.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

           {/* Issues  2*/}
           <SwiftAnimate
           show={tab === 2}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/july-23rd-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182345417-b2f91d2c-ee5e-4336-adb2-30bc38fbd9b3.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

           {/* Issues */}
           <SwiftAnimate
           show={tab === 3}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/july-9th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182347279-29c1d369-2c98-4e86-a175-cc0a11841cf2.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 4}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/july-6th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182347590-b28dbfd9-6dc6-4dde-882a-3f97f86acc7a.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 5}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/june-25th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182347809-695eaf13-0b57-4866-b685-3644c8b72f66.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 6}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/june-18th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182348403-e3558f75-bfb9-4d34-8c8f-d19da73dfa3e.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 7}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/june-11th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182348696-bb20663f-d797-476e-9dfd-e01471eb0a23.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 8}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/may-27th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182350030-0e0aeecf-6543-4a1a-ac71-59c6217e9c55.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 9}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/april-26th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182350251-c50c9433-27f1-441c-a1cb-41a3a15f638f.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 10}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/april-19th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182350746-ce9fb41c-892c-4c66-b937-92e9e093d28d.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 11}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/april-12th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182350929-a5d39041-213c-4a2e-a80a-32bb09d6a334.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 12}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/april-5th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182351083-ff079722-4c04-4223-913d-5132df61874c.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 13}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/march-26th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182351338-e9e23026-c27d-4d93-91d8-422169f12f0d.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 14}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/march-14th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182351600-bd50b35e-b757-4895-b836-ac7610688eb2.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 15}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/march-9th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182351733-91971eb6-42e4-4987-9cfa-8f871577d2f4.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 16}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/march-5th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182351865-506e704f-cac1-47c2-b6dc-df275d7f58a4.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 17}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/february-23rd-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182352014-2414e777-a356-4a2a-9915-d87d4bf67cdd.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 18}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/february-9th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182352220-b2918f06-493c-40b3-93f9-ac92ee933670.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 19}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/january-25th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182352336-2a0aec7b-9df7-4501-99f0-3c38a02765a2.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 20}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/january-6th-newsletter/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182352555-c33a1eec-2ede-4cdc-bb3a-3824542d676b.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 21}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/december-22nd-2021/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182352679-4d409aa0-f7f9-42c1-98e6-403ab8c5a22f.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

              {/* Issues */}
              <SwiftAnimate
           show={tab === 22}
           appear={true}
           className="w-full"
           enter="transition ease-in-out duration-700 transform order-first"
           enterStart="opacity-0 translate-y-16"
           enterEnd="opacity-100 translate-y-0"
           leave="transition ease-in-out duration-300 transform absolute"
           leaveStart="opacity-100 translate-y-0"
           leaveEnd="opacity-0 -translate-y-16"
         >
           <div className="relative inline-flex flex-col">
             <a
               href="https://aviyelverse.github.io/newsletter/november-22nd-2021/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <img
                 className="md:max-w-none mx-auto rounded transform animate-float"
                 src="https://user-images.githubusercontent.com/37651620/182352862-8f5a7044-bf5a-43e8-aea5-9f7af260ad67.png"
                 height="462"
                 alt="Issues"
               />
             </a>
           </div>
         </SwiftAnimate>

       </div>
     </div>

       
 
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterIssues;
