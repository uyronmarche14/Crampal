"use client";
import Head from "next/head";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>CramPal | Study Smarter, Not Harder</title>
        <meta
          name="description"
          content="Helping Students Beat the Deadline—One Reviewer at a Time."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <About />
      <Footer />
    </div>
  );
}
