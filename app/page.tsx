"use client";
import Head from "next/head";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";

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
    </div>
  );
}
