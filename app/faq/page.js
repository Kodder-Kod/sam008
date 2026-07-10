"use client"


import Image from 'next/image';
import Navbar from '../components/header/page';
import React, { useState } from "react";


const faq = [
  {
    question: "What are the visiting hours at Samaritan Eye Hospital?",
    answer:
      "Our visiting hours remain the same and are observed daily from morning (6:00AM to 7:00AM ), lunch (1:00 PM to 2:00PM) and evening sessions (5:00PM to 6:00PM). We recommend arriving early for consultations as some services may take additional time."
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Appointments can be booked by calling us at 0794 878 020, via email at samaritaneyecenter@gmail.com, or by visiting us in person at Samaritan Eye Hospital, Lusaka Road, Bungoma Town, Bungoma County, Kenya."
  },
  {
    question: "What documents do I need for an eye consultation?",
    answer:
      "Please bring a valid government-issued ID and any previous eye prescriptions or medical records if available. New patients may be required to complete a short health history form."
  },
  {
    question: "Does Samaritan Eye Hospital offer eye surgeries?",
    answer:
      "Yes, we offer a range of eye surgeries including cataract surgery, glaucoma treatment, and other specialized ophthalmic procedures after consultation with our specialists."
  },
  {
    question: "What types of eye tests are available?",
    answer:
      "We provide comprehensive eye examinations including visual acuity tests, eye pressure checks for glaucoma, slit-lamp examinations, and other diagnostic eye tests."
  },
  {
    question: "Is there a pharmacy at Samaritan Eye Hospital?",
    answer:
      "Yes, we have an in-house pharmacy where patients can access prescribed medications and basic eye care products."
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept selected health insurance providers. Please contact our reception desk to confirm coverage and payment details."
  },
  {
    question: "What should I do if I have an eye emergency?",
    answer:
      "In case of an eye emergency, visit Samaritan Eye Hospital immediately or call 0794 878 020 for urgent assistance and guidance."
  },
  {
    question: "Do I need a referral to see a specialist?",
    answer:
      "No referral is required. You can directly book an appointment with our ophthalmology team for consultation."
  },
  {
    question: "Can I get glasses or contact lenses at the hospital?",
    answer:
      "Yes, we provide full optical services including eye exams, prescription glasses, and contact lens fittings."
  },
  {
    question: "Is Samaritan Eye Hospital child-friendly?",
    answer:
      "Yes, we offer pediatric eye care services and provide a comfortable environment for children of all ages."
  },
  {
    question: "How much do eye consultations cost?",
    answer:
      "The consultation fee at Samaritan Eye Hospital is KSh 1,000 for all general eye consultations."
  },
  {
    question: "What is the wait time for an appointment?",
    answer:
      "Wait times vary depending on patient flow, but we aim to serve patients efficiently on a first-come, first-served basis."
  },
  {
    question: "Do you offer any eye care packages?",
    answer:
      "Yes, we offer preventive eye care services and screening packages designed to promote early detection of eye conditions."
  }
];


const Questions = () => {

  {/* Replace your FAQ section content (inside the existing wrapper div) with: */ }

  {/* ===== 1. Add this state at the top of your component ===== */ }
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>

      <div className="relative h-[60vh] flex items-center justify-center font-sans overflow-hidden">

        {/* Background */}
        <Image
          src="/pics/faqs.png"
          alt="bg"
          fill
          className="object-cover "
        />

        {/* Dark overlay */}
         

        {/* Glass Card */}
        <div className="relative z-10 text-center text-white px-6 py-10 
   bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">

          <h1 className="text-4xl md:text-5xl font-bold">FAQ`s</h1>

          <p className="mt-4 max-w-xl mx-auto text-white/80">
            Comprehensive eye care services delivered with precision, compassion, and modern technology to protect and improve your vision.
          </p>

        </div>

      </div>
      <div>
        <Navbar />
      </div>

<div className="relative w-full py-24 overflow-hidden">

  {/* ================= BACKGROUND (ADDED ONLY) ================= */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100">

    {/* Floating dots */}
    <div className="absolute inset-0 opacity-20">
      {Array.from({ length: 35 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#08930c]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float${i % 3} 6s infinite ease-in-out`,
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg className="w-full h-full absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="#08930c"
            strokeWidth="0.6"
            opacity="0.15"
          />
        ))}
      </svg>
    </div>
  </div>

  {/* ================= YOUR EXISTING CONTENT (UNCHANGED) ================= */}
  <div className="relative max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-x-14 gap-y-4">

      {[
        faq.slice(0, Math.ceil(faq.length / 2)),
        faq.slice(Math.ceil(faq.length / 2))
      ].map((col, ci) => (
        <div key={ci} className="space-y-1">

          {col.map((item, localIdx) => {
            const i =
              ci === 0
                ? localIdx
                : Math.ceil(faq.length / 2) + localIdx;

            const isOpen = openIndex === i;

            return (
              <div key={i} className="border-b border-green-100 first:border-t">

                <button
                  onClick={() => toggle(i)}
                  className="flex items-center gap-5 w-full text-left py-6 group"
                >
                  <span className="text-lg italic text-[#08930c] opacity-70 min-w-[32px]"
                    style={{ fontFamily: 'Georgia, serif' }}>
                    {String(i + 1).padStart(2, '0')}.
                  </span>

                  <span className={`flex-1 text-base font-medium transition-colors duration-200 leading-relaxed ${
                    isOpen ? 'text-[#08930c]' : 'text-black group-hover:text-[#08930c]'
                  }`}>
                    {item.question}
                  </span>

                  <span className={`w-10 h-10 rounded-full border flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#08930c] border-[#08930c] text-white rotate-45'
                      : 'border-green-300 text-[#08930c]'
                  }`}>
                    +
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '260px' : '0' }}
                >
                  <div className="pb-6 pl-12">
                    <p className="text-sm text-black leading-relaxed border-l-2 border-green-200 pl-4">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      ))}

    </div>
  </div>

  {/* ================= ANIMATION KEYFRAMES ================= */}
  <style jsx>{`
    @keyframes float0 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes float1 {
      0%, 100% { transform: translateX(0px); }
      50% { transform: translateX(10px); }
    }

    @keyframes float2 {
      0%, 100% { transform: translate(0px, 0px); }
      50% { transform: translate(-8px, 8px); }
    }
  `}</style>

</div>

    </div>
  )
}

export default Questions