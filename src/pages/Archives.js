import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArchivesCards from "../components/ArchivesCards";

function Archives() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <Header />

      <main className="flex-grow ">
        <section className="relative">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div
            className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none "
            aria-hidden="true"
          ></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pt-20 md:pb-20">
                <h2 className="h2 mb-4">All of our Newsletter Archives</h2>
                <p className="text-xl text-gray-600"></p>
              </div>

              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/* 1st issues */}
                
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/november-22nd-2021/" issueNumber="1" issueDate="Released Date: November 22nd 2021" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/december-22nd-2021/" issueNumber="2" issueDate="Released Date: December 22nd 2021" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/january-6th-newsletter/" issueNumber="3" issueDate="Released Date: January 10th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/january-25th-newsletter/" issueNumber="4" issueDate="Released Date: January 25th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/february-9th-newsletter/" issueNumber="5" issueDate="Released Date: February 9th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/february-23rd-newsletter/" issueNumber="6" issueDate="Released Date: February 23rd 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/march-5th-newsletter/" issueNumber="7" issueDate="Released Date: March 5th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/march-9th-newsletter/" issueNumber="8" issueDate="Released Date: March 9th 2022 " />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/march-14th-newsletter/" issueNumber="9" issueDate="Released Date: March 14th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/march-26th-newsletter/" issueNumber="10" issueDate="Released Date: March 26th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/april-5th-newsletter/" issueNumber="11" issueDate="Released Date: April 5th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/april-12th-newsletter/" issueNumber="12" issueDate="Released Date: April 12th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/april-19th-newsletter/" issueNumber="13" issueDate="Released Date: April 19th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/april-26th-newsletter/" issueNumber="14" issueDate="Released Date: April 26th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/may-27th-newsletter/" issueNumber="15" issueDate="Released Date:  May 27th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/june-11th-newsletter/" issueNumber="16" issueDate="Released Date: June 11th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/june-18th-newsletter/" issueNumber="17" issueDate="Released Date: June 18th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/june-25th-newsletter/" issueNumber="18" issueDate="Released Date: June 25th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/july-6th-newsletter/" issueNumber="19" issueDate="Released Date: July 6th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/july-9th-newsletter/" issueNumber="20" issueDate="Released Date: July 9th 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/july-23rd-newsletter/" issueNumber="21" issueDate="Released Date: July 23rd 2022" />
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/august-3rd-newsletter/" issueNumber="22" issueDate="Released Date: August 3rd 2022" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Archives;
