"use client";
import { useState } from "react";
import Head from "next/head";
import { ArrowRight, Book, Clock, Users } from "lucide-react";
import CardHeader from "@/app/components/ui_design/cardHeader";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/80 fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CP</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  CramPal
                </span>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                Testimonials
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                About Us
              </a>
              <a
                href="#order"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 transition"
              >
                Order Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                className="text-gray-600 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                Testimonials
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                About Us
              </a>
              <a
                href="#order"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-center shadow hover:bg-indigo-700 transition"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Study <span className="text-indigo-600">Smarter</span>,<br />
              Not Harder.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Custom-made reviewers and curated study materials delivered fast
              for college and senior high students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#order"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center shadow-lg transition"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#how-it-works"
                className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 font-medium px-6 py-3 rounded-lg flex items-center justify-center transition"
              >
                How It Works
              </a>
            </div>
            <p className="text-gray-600 italic">
              "Helping Students Beat the Deadline—One Reviewer at a Time."
            </p>
          </div>
          {/**/}
          <CardHeader />
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Students Choose CramPal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the challenges students face. Our services are
              designed to help you succeed under pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your custom reviewers in as little as 24 hours. Perfect for
                those last-minute study sessions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Custom Content
              </h3>
              <p className="text-gray-600">
                Materials tailored to your specific course, professor, and
                learning style. No generic reviewers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                By Students, For Students
              </h3>
              <p className="text-gray-600">
                Created by fellow students who understand exactly what you need
                to succeed in your courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How CramPal Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting the study materials you need is simple, fast, and
              reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                {/* Connector line */}
                <div className="hidden md:block absolute top-8 left-full h-0.5 w-full -translate-x-8 bg-indigo-200"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Submit Your Request
              </h3>
              <p className="text-gray-600">
                Fill out our simple form with details about what you need -
                subject, topics, deadline, and any special requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                {/* Connector line */}
                <div className="hidden md:block absolute top-8 left-full h-0.5 w-full -translate-x-8 bg-indigo-200"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                We Create Your Materials
              </h3>
              <p className="text-gray-600">
                Our team of academic experts will create custom-tailored study
                materials that match exactly what you need.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Receive & Ace Your Exams
              </h3>
              <p className="text-gray-600">
                Get your materials delivered digitally, review efficiently, and
                improve your academic performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what fellow students have
              to say about CramPal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="font-bold text-indigo-600">MJ</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Maria Johnson</h4>
                  <p className="text-sm text-gray-600">Biology Major</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "CramPal saved me during finals week! The reviewer they made
                contained exactly what was on the exam. Definitely worth it."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="font-bold text-indigo-600">DT</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">David Torres</h4>
                  <p className="text-sm text-gray-600">Engineering Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The formula sheets and concept summaries helped me pass
                Calculus II. Fast delivery and excellent quality!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="font-bold text-indigo-600">AL</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Amara Lee</h4>
                  <p className="text-sm text-gray-600">Psychology Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I struggle with making my own notes, and CramPal's reviewers
                are so well-organized. My grades have improved significantly!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="order" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 md:flex items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to ace your next exam?
                </h2>
                <p className="text-indigo-100 text-lg mb-6 max-w-xl">
                  Get started with CramPal today and receive your customized
                  study materials in as little as 24 hours.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-indigo-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-indigo-100">
                      Custom reviewers tailored to your needs
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-indigo-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-indigo-100">
                      Fast delivery before your deadlines
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-indigo-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-indigo-100">
                      Created by students who understand your needs
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Request a Reviewer
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject/Course
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="e.g., Biology 101"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Topic/Chapter
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="e.g., Cell Division"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Deadline
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About CramPal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CramPal is a student-led academic support business that was born
                out of our own struggles with managing coursework and preparing
                for exams.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're a team of dedicated students who understand the challenges
                of balancing academics with other responsibilities. Our mission
                is to provide affordable, high-quality study materials that help
                students succeed.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To become the go-to platform for academic help within our
                  university and beyond.
                </p>
              </div>
            </div>
            <div className="md:w-5/12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-indigo-600 h-48 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      CramPal
                    </h3>
                    <p className="text-indigo-100">Study Smarter, Not Harder</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Business Type
                    </h4>
                    <p className="text-gray-600">
                      Online academic content service
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Services Offered
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Custom-made reviewers (by subject or topic)</li>
                      <li>Summarized reading materials</li>
                      <li>Curated source packs (PDFs, links, slides)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Year 1 Goals
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Launch within our university</li>
                      <li>Reach 200+ paying customers in the first semester</li>
                      <li>Partner with at least 3 campus organizations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">CP</span>
                </div>
                <span className="ml-2 text-xl font-bold">CramPal</span>
              </div>
              <p className="mt-4 max-w-xs text-gray-400">
                Helping Students Beat the Deadline—One Reviewer at a Time.
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white transition"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Custom Reviewers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Reading Summaries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Resource Packs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Study Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} CramPal. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
