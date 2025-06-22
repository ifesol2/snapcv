'use client'

import React, { useState } from 'react'

export default function LandingPage() {
  return (
    import { useState } from 'react';

export default function LandingPage() {
  const [inputMethod, setInputMethod] = useState(null);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-indigo-600 select-none">SnapCV</h1>
          <nav aria-label="Primary Navigation" className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#how-it-works" className="hover:text-indigo-600 transition">How It Works</a>
            <a href="#perfect-for" className="hover:text-indigo-600 transition">Perfect For</a>
            <a href="#why-snapcv" className="hover:text-indigo-600 transition">Why SnapCV</a>
          </nav>
        </div>
      </header>

      <main className="bg-gray-50">
        {/* Above the Fold */}
        <section
          aria-label="Hero"
          className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-24"
        >
          {/* Left: Headline, Subheadline, Buttons, CTA */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Talk. Upload. Apply. Land the Job.
            </h2>
            <p className="mt-4 text-gray-700 text-lg sm:text-xl max-w-md">
              Your resume, written by AI — from LinkedIn, your voice, or a short form. It’s job-ready in under 2 minutes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 max-w-md">
              <button
                type="button"
                onClick={() => setInputMethod('linkedin')}
                className={\`flex-1 px-5 py-3 rounded-md border-2 font-semibold text-indigo-600 border-indigo-600 hover:bg-indigo-50 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 \${
                  inputMethod === 'linkedin' ? 'bg-indigo-100' : ''
                }\`}
                aria-pressed={inputMethod === 'linkedin'}
                aria-label="Paste LinkedIn URL"
              >
                Paste LinkedIn
              </button>
              <button
                type="button"
                onClick={() => setInputMethod('voice')}
                className={\`flex-1 px-5 py-3 rounded-md border-2 font-semibold text-indigo-600 border-indigo-600 hover:bg-indigo-50 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 \${
                  inputMethod === 'voice' ? 'bg-indigo-100' : ''
                }\`}
                aria-pressed={inputMethod === 'voice'}
                aria-label="Speak Resume"
              >
                Speak Resume
              </button>
              <button
                type="button"
                onClick={() => setInputMethod('form')}
                className={\`flex-1 px-5 py-3 rounded-md border-2 font-semibold text-indigo-600 border-indigo-600 hover:bg-indigo-50 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 \${
                  inputMethod === 'form' ? 'bg-indigo-100' : ''
                }\`}
                aria-pressed={inputMethod === 'form'}
                aria-label="Fill Form"
              >
                Fill Form
              </button>
            </div>

            <button
              type="button"
              className="mt-10 inline-block w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md px-8 py-4 shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              aria-label="Generate My Resume"
            >
              Generate My Resume
              <span className="ml-2 text-sm font-normal opacity-80">(No sign-up required for first draft)</span>
            </button>
          </div>

          {/* Right: Resume Preview */}
          <div className="flex-1 max-w-lg w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative bg-gradient-to-b from-indigo-600 to-indigo-800 p-6 text-white font-mono text-xs">
              <div className="flex justify-between items-center mb-4">
                <div className="space-x-2 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                </div>
                <span className="text-xs opacity-70">Resume Preview</span>
              </div>
              <article className="bg-indigo-900 bg-opacity-70 rounded-md p-4 max-h-[480px] overflow-y-auto leading-relaxed">
                <h3 className="text-xl font-bold mb-1">Jane Doe</h3>
                <p className="mb-2 text-indigo-300 italic">Product Manager | AI Enthusiast</p>
                <section className="mb-3">
                  <h4 className="font-semibold border-b border-indigo-700 pb-1 mb-1">Summary</h4>
                  <p>
                    Experienced product manager with a passion for AI-driven solutions. Skilled in cross-functional team
                    leadership and agile methodologies.
                  </p>
                </section>
                <section className="mb-3">
                  <h4 className="font-semibold border-b border-indigo-700 pb-1 mb-1">Experience</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong>Senior Product Manager</strong> — TechCorp (2020–Present)
                      <br />
                      Led AI product initiatives increasing user engagement by 30%.
                    </li>
                    <li>
                      <strong>Product Owner</strong> — InnovateX (2017–2020)
                      <br />
                      Oversaw roadmap and delivery of SaaS solutions for enterprise clients.
                    </li>
                  </ul>
                </section>
                <section>
                  <h4 className="font-semibold border-b border-indigo-700 pb-1 mb-1">Skills</h4>
                  <p>Agile, Roadmapping, AI Integration, User Research, Stakeholder Management</p>
                </section>
              </article>
            </div>
          </div>
        </section>

        {/* Below the Fold */}
        <section
          id="how-it-works"
          className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-t-3xl shadow-inner"
          aria-label="How It Works"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div className="flex flex-col items-center space-y-4 px-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Choose Input</h4>
              <p className="text-gray-700 max-w-xs">
                LinkedIn URL, voice memo, or type it in — pick the way that works best for you.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 px-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a6.5 6.5 0 1 1-9 9" />
                  <path d="M12 12v8" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">AI Builds Resume</h4>
              <p className="text-gray-700 max-w-xs">
                Tailored content and formatted layout crafted by AI to highlight your strengths.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 px-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 20v-6" />
                  <path d="M9 14h6" />
                  <path d="M9 10h6" />
                  <path d="M9 6h6" />
                  <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Edit & Download</h4>
              <p className="text-gray-700 max-w-xs">
                Choose templates, tweak content, and export your resume as PDF or Word.
              </p>
            </div>
          </div>
        </section>

        <section
          id="perfect-for"
          className="max-w-7xl mx-auto px-6 py-20 bg-indigo-50"
          aria-label="Perfect For"
        >
          <h3 className="text-3xl font-extrabold text-indigo-700 text-center mb-12">Perfect For</h3>
          <ul className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-indigo-900 font-semibold text-lg">
            <li className="flex flex-col items-center space-y-3">
              <span
                aria-hidden="true"
                className="text-5xl select-none"
                title="Students and graduates"
              >
                🎓
              </span>
              <span>Students and graduates</span>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span aria-hidden="true" className="text-5xl select-none" title="Career switchers">
                🧳
              </span>
              <span>Career switchers</span>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span aria-hidden="true" className="text-5xl select-none" title="Non-native speakers">
                🌍
              </span>
              <span>Non-native speakers</span>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span aria-hidden="true" className="text-5xl select-none" title="People in a hurry">
                ⏳
              </span>
              <span>People in a hurry</span>
            </li>
          </ul>
        </section>

        <section
          id="why-snapcv"
          className="max-w-7xl mx-auto px-6 py-20 bg-white"
          aria-label="Why SnapCV Stands Out"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Why SnapCV Stands Out</h3>
          <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-800 text-center font-semibold text-lg">
            <li className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 1v22" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M16 19a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <span>🎙️ Voice-to-resume option</span>
            </li>
            <li className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4" />
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </div>
              <span>🤖 AI-written bullet points based on target roles</span>
            </li>
            <li className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3 2 3h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" />
                </svg>
              </div>
              <span>🧩 Export-ready templates (PDF & Word)</span>
            </li>
            <li className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a6.5 6.5 0 1 1-9 9" />
                  <path d="M12 12v8" />
                </svg>
              </div>
              <span>🧠 Keyword optimization for ATS systems</span>
            </li>
          </ul>
        </section>

        <footer className="bg-indigo-600 text-indigo-100 py-10 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm select-none">
            &copy; {new Date().getFullYear()} SnapCV &mdash; Landing Page MVP
          </div>
        </footer>
      </main>
    </>
  );
}
  )
}