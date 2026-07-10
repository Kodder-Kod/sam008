'use client';

import Image from 'next/image';
import { motion } from "framer-motion";
import Navbar from '../components/header/page';
import { FileText, Repeat, CreditCard } from "lucide-react";
import React, { useState } from "react";


const customers = [
    { name: "AAR", logo: "/pics/insurance/aar.png" },
    { name: "SHA", logo: "/pics/insurance/sha.png" },
    { name: "Kenya Alliance", logo: "/pics/insurance/kenya.png" },
    { name: "CIC", logo: "/pics/insurance/cic.png" },
    { name: "KCB", logo: "/pics/insurance/kcb.jpg" },

]


const branches = {
    Bungoma: {
        name: 'Samaritan Eye Hospital',
        address:
            'Lusaka Road , Bungoma Town ',
        hours:
            'Mon - Fri: 8:00 AM - 5:00 PM | Saturday: 8:00 AM - 1:00 PM | Sundays & Public Holidays: Closed',
        email: 'info@samaritaneyecentre.co.ke',
        phone: '0794 878 020',
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4408.201934497146!2d34.56444738698556!3d0.5854319525978579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781d7004da47285%3A0xfef6d9d1b9215893!2sSamaritan%20Eye%20Hospital-Bungoma!5e1!3m2!1sen!2ske!4v1780929144886!5m2!1sen!2ske',
    },
};

const firstSteps = [
    "Registration at the Reception Office",
    "Make payment at Reception or visit the Insurance Office for authorization",
    "Eye care assessment and basic vital signs taken at Triage ",
    "Take Visual Acuity at the optometry Room",
    "See a Doctor/Optometrist for Diagnosis/Refraction",
    "Present the prescription to the Pharmacist (Outpatients)",
    "Pay for drugs at the Receiption or visit the Insurance Office for authorization ",
    "Collect drugs / Glasses "
];

const Patients = () => {

    const [activeBranch, setActiveBranch] = useState('Bungoma');
    const branch = branches[activeBranch];

    return (
        <div>
            <div className=" h-[60vh] font-sans">
                <div className="relative h-[60vh] flex items-center justify-center font-sans overflow-hidden">

                    {/* Background */}
                    <Image
                        src="/pics/outreach0077.png"
                        alt="bg"
                        fill
                        className="object-cover"
                    />

                    {/* Dark overlay */}
                     

                    {/* Glass Card */}
                    <div className="relative z-10 text-center text-white px-6 py-10 
              bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            For Patients</h1>
                        <p className="mt-4 max-w-xl mx-auto text-white/80  ">
                            Find insurance details, service access steps, and clinic working hours for your visit.
                        </p>
                    </div>
                </div>
                <div>
                    <Navbar />
                </div>

            </div>

            {/* Hero section for patients */}

            <div className="bg-[#f5f7f6] h-auto sm:p-6">
                <div className="w-full sm:max-w-[90%] mx-auto bg-white rounded-2xl shadow-lg sm:p-10 border border-[#08930c]/10">

                    <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#08930c] mb-8 mt-5">
                        Patient Guidelines
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">

                        {/* Image */}
                        <div className="flex justify-center p-2">
                            <Image
                                src="/pics/reception.JPG"
                                alt="Patient Instruction"
                                width={600}
                                height={600}
                                className="rounded-2xl shadow-md hover:scale-[1.03] transition duration-300 w-full sm:w-[95%] md:max-w-lg"
                            />
                        </div>

                        {/* Text */}
                        <div className="text-gray-700 text-[15px] leading-relaxed space-y-6 px-6">

                            {/* 1 */}
                            <div className="flex gap-3  leading-relaxed ">
                                <FileText className="text-[#08930c] mt-1 w-5 h-5 flex-shrink-0  " />
                                <p>
                                    <span className="font-semibold text-gray-900">
                                        Appointments & Referrals:
                                    </span>{" "}
                                    Patients visiting Samaritan Eye Hospital through referral should present their referral letter and previous eye examination reports for proper assessment.
                                </p>
                            </div>

                            {/* 2 */}
                            <div className="flex gap-3  leading-relaxed ">
                                <Repeat className="text-[#08930c] mt-1 w-5 h-5 flex-shrink-0" />
                                <p>
                                    <span className="font-semibold text-gray-900">
                                        Follow-Up Visits:
                                    </span>{" "}
                                    Returning patients should carry their patient card, prescribed medications and spectacles to help monitor treatment progress effectively.
                                </p>
                            </div>

                            {/* 3 */}
                            <div className="flex gap-3  leading-relaxed ">
                                <CreditCard className="text-[#08930c] mt-1 w-5 h-5 flex-shrink-0" />
                                <p>
                                    <span className="font-semibold text-gray-900">
                                        Billing & Payments:
                                    </span>{" "}
                                    Payments are accepted through authorized hospital channels. Always keep the official receipt as proof of payment.
                                </p>
                            </div>

                            <div className="pt-4">
                                <div className="h-1 w-24 bg-[#08930c] rounded-full"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-auto py-12 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">

                {/* ================= BACKGROUND PATTERN (GREEN THEME) ================= */}
                <div className="absolute inset-0 overflow-hidden opacity-20">

                    {/* Floating dots */}
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

                {/* ================= MAIN CARD ================= */}
                <div className="relative text-white max-w-4xl mx-auto rounded-3xl shadow-xl overflow-hidden">

                    {/* Background image */}
                    <div className="absolute inset-0 h-full w-full z-0">
                        <Image
                            src="/logo.png"
                            alt="Background"
                            fill
                            quality={75}
                            className="object-cover object-center"
                        />
                        {/* GREEN overlay */}
                        <div className="absolute inset-0 bg-[#08930c]/10 backdrop-brightness-75" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 py-10 px-6">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto"
                        >

                            <h2 className="text-3xl font-bold text-center mb-8 tracking-tight text-white">
                                Process of Accessing Services
                            </h2>

                            {/* Timeline line */}
                            <div className="relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-[#08930c]/20">

                                {firstSteps.map((step, index) => {
                                    const isLeft = index % 2 === 0;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className={`flex flex-col sm:flex-row items-center ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                                                } ${index !== firstSteps.length - 1 ? "mb-7" : ""}`}
                                        >

                                            {/* Step circle */}
                                            <div className="relative z-10 w-10 h-10 rounded-full bg-white text-[#08930c] font-bold flex items-center justify-center shadow-lg border-2 border-[#08930c]/30 ring-4 ring-[#08930c]/20">
                                                {index + 1}
                                            </div>

                                            {/* Connector */}
                                            <div className="hidden sm:block w-1 h-1 bg-[#08930c]/20 mx-2" />

                                            {/* Card */}
                                            <div className={`w-full sm:w-[60%] mt-2 sm:mt-0  ${isLeft ? "sm:text-left" : "sm:text-right"
                                                }`}>

                                                <div className="relative bg-[#08930c]/90 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 shadow-xl transition duration-300 hover:scale-[1.03] hover:shadow-2xl group">

                                                    <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-2">
                                                        Step {index + 1}
                                                    </h4>

                                                    <p className="text-white text-base text-base ">
                                                        {step}
                                                    </p>

                                                    {/* Glow line */}
                                                    <div
                                                        className={`absolute -z-1 w-full h-1 bg-gradient-to-r from-green-300 via-white to-green-300 blur-sm opacity-30 ${isLeft ? "left-0 bottom-0" : "right-0 bottom-0"
                                                            }`}
                                                    />
                                                </div>

                                            </div>
                                        </motion.div>
                                    );
                                })}

                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ================= ANIMATIONS ================= */}
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

            {/* health Inssuarance*/}

            <div className="flex flex-col items-center py-10 px-6 rounded-xl bg-white">

                <h2 className="sm:text-3xl text-2xl font-bold text-[#08930c] pt-6 pb-10">
                    Health Insurance
                </h2>

                {/* Single clean grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full max-w-5xl place-items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {customers.slice(0, 5).map((customer, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="bg-white shadow-md rounded-xl p-2 w-30 h-30 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 border border-green-100">

                                <Image
                                    src={customer.logo}
                                    alt={customer.name}
                                    width={200}
                                    height={150}
                                    className="w-auto h-30 object-contain"
                                />
                            </div>

                            <p className="mt-3 text-sm font-medium text-gray-700">
                                {customer.name}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="relative w-full h-auto  bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">

                {/* ================= BACKGROUND PATTERN ================= */}
                <div className="absolute inset-0 overflow-hidden opacity-20">

                    {/* Floating dots */}
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

                {/* ================= CONTENT ================= */}
                <div className="relative flex flex-col md:flex-row rounded-xl overflow-hidden max-w-7xl mx-auto my-8">

                    {/* Left: Details */}
                    <div className="md:w-1/2 p-6 space-y-4">
                        <div className="flex space-x-2 mb-4">
                            {Object.keys(branches).map((key) => (
                                <button
                                    key={key}
                                    className={`px-4 py-1 rounded-full text-sm ${activeBranch === key
                                        ? 'bg-[#08930c] text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-green-100'
                                        }`}
                                    onClick={() => setActiveBranch(key)}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>

                        <h2 className="text-lg font-bold text-[#08930c]">
                            {branch.name}
                        </h2>
                        <p><strong>Address:</strong> {branch.address}</p>
                        <p><strong>Working Hours:</strong> {branch.hours}</p>
                        <p><strong>Email:</strong> {branch.email}</p>
                        <p><strong>Phone:</strong> {branch.phone}</p>
                    </div>

                    {/* Right: Map */}
                    <div className="md:w-1/2 h-[300px] md:h-[350px] rounded-xl">
                        <iframe
                            className="rounded-xl"
                            src={branch.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        />
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

export default Patients