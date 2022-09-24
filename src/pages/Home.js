import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ArchiveCardHome from "../components/ArchiveCardHome";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* <NewsletterIssues /> */}
        {/* <Archives/> */}
        <ArchiveCardHome/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
