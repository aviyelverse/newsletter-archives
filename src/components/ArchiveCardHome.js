import React from "react";
import NewsletterArchivesList from "../components/NewsletterArchivesList";

function ArchiveCardHome() {
  const newsletters = [
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/november-22nd-2021/",
      issueNumber: "1",
      issueDate: "Released Date: November 22nd 2021",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/december-22nd-2021/",
      issueNumber: "2",
      issueDate: "Released Date: December 22nd 2021",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/january-6th-newsletter/",
      issueNumber: "3",
      issueDate: "Released Date: January 10th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/january-25th-newsletter/",
      issueNumber: "4",
      issueDate: "Released Date: January 25th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/february-9th-newsletter/",
      issueNumber: "5",
      issueDate: "Released Date: February 9th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/february-23rd-newsletter/",
      issueNumber: "6",
      issueDate: "Released Date: February 23rd 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/march-5th-newsletter/",
      issueNumber: "7",
      issueDate: "Released Date: March 5th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/march-9th-newsletter/",
      issueNumber: "8",
      issueDate: "Released Date: March 9th 2022 ",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/march-14th-newsletter/",
      issueNumber: "9",
      issueDate: "Released Date: March 14th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/march-26th-newsletter/",
      issueNumber: "10",
      issueDate: "Released Date: March 26th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/april-5th-newsletter/",
      issueNumber: "11",
      issueDate: "Released Date: April 5th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/april-12th-newsletter/",
      issueNumber: "12",
      issueDate: "Released Date: April 12th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/april-19th-newsletter/",
      issueNumber: "13",
      issueDate: "Released Date: April 19th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/april-26th-newsletter/",
      issueNumber: "14",
      issueDate: "Released Date: April 26th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/may-27th-newsletter/",
      issueNumber: "15",
      issueDate: "Released Date:  May 27th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/june-11th-newsletter/",
      issueNumber: "16",
      issueDate: "Released Date: June 11th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/june-18th-newsletter/",
      issueNumber: "17",
      issueDate: "Released Date: June 18th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/june-25th-newsletter/",
      issueNumber: "18",
      issueDate: "Released Date: June 25th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/july-6th-newsletter/",
      issueNumber: "19",
      issueDate: "Released Date: July 6th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/july-9th-newsletter/",
      issueNumber: "20",
      issueDate: "Released Date: July 9th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/july-23rd-newsletter/",
      issueNumber: "21",
      issueDate: "Released Date: July 23rd 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/august-3rd-newsletter/",
      issueNumber: "22",
      issueDate: "Released Date: August 3rd 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/august-18th-newsletter/",
      issueNumber: "23",
      issueDate: "Released Date: August 18th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/august-27th-newsletter/",
      issueNumber: "24",
      issueDate: "Released Date: August 27th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/september-12th-newsletter/",
      issueNumber: "25",
      issueDate: "Released Date: September 12th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/september-23rd-newsletter/",
      issueNumber: "26",
      issueDate: "Released Date: September 23rd 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/november-2nd-newsletter/",
      issueNumber: "27",
      issueDate: "Released Date: November 2nd 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/november-17th-newsletter/",
      issueNumber: "28",
      issueDate: "Released Date: November 17th 2022",
    },
    {
      newsletterLink:
        "https://aviyelverse.github.io/newsletter/december-7th-newsletter/",
      issueNumber: "29",
      issueDate: "Released Date: December 7th 2022",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <section className="relative">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div
            className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pt-20 md:pb-20">
                <h1 className="h2 mb-4">Newsletter Archives</h1>
                <p className="text-xl text-gray-600">
                  Archives of all of our previously published Newsletters.
                </p>
              </div>
              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {newsletters.map((newsletter) => (
                  <NewsletterArchivesList {...newsletter} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ArchiveCardHome;
