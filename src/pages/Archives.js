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
                
                <ArchivesCards newsletterLink="https://aviyelverse.github.io/newsletter/november-22nd-2021/" issueNumber="1" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="2" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="3" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="4" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="5" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="6" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="7" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="8" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="9" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="10" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="11" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="12" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="13" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="14" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="15" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="16" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="17" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="18" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="19" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="20" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="21" issueDate="November" />
                <ArchivesCards newsletterLink="" issueNumber="22" issueDate="November" />
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
