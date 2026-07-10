"use client";

import { useState } from "react";
import Navbar from "../components/header/page";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function CareersAndTenders() {
    const [activeTab, setActiveTab] = useState("careers");



    const jobs = [
        {
            title: "Ophthalmologist",
            company: "Samaritan Eye Hospital",
            location: "Bungoma, Kenya",
            type: "Full Time",
            skills: ["Surgery", "Diagnostics", "Patient Care", "Clinical Practice"],
            description:
                "We are seeking a qualified Ophthalmologist to provide advanced eye care services including diagnosis, treatment, and surgical procedures.",
            responsibilities: [
                "Conduct eye examinations and diagnose conditions",
                "Perform cataract and other eye surgeries",
                "Prescribe treatments and medications",
                "Maintain patient medical records",
                "Collaborate with medical team"
            ],
            qualifications: [
                "MBChB degree or equivalent",
                "Master’s in Ophthalmology",
                "Valid medical license",
                "At least 3–5 years experience",
                "Strong surgical skills"
            ]
        },


    ];


    ////tender 

    const tenders = [
        {
            date: "15 January 2026",
            title: "Expression of Interest – External Audit Services",
            deadline: "31 January 2026",
            status: "Closed",
            file: "/tender/Expression_of_Interest_SEH_2026.pdf",
        },

    ];


    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const tendersPerPage = 10;

    const filteredTenders = tenders.filter((tender) =>
        tender.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastTender = currentPage * tendersPerPage;
    const indexOfFirstTender = indexOfLastTender - tendersPerPage;
    const currentTenders = filteredTenders.slice(indexOfFirstTender, indexOfLastTender);


    const [isOpen, setIsOpen] = useState(false); // Modal state

    const [searchTerm, setSearchTerm] = useState('');

    const jobsPerPage = 6; // Number of jobs per page

    // Filter jobs based on search input
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination Logic
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const startIndex = (currentPage - 1) * jobsPerPage;
    const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);




    const [selectedJob, setSelectedJob] = useState(null);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setIsOpen(true);
    };



    return (
        <div>

            <div className="relative h-[60vh] flex items-center justify-center font-sans overflow-hidden">

                {/* Background */}
                <Image
                    src="/pics/lorry.jpg"
                    alt="bg"
                    fill
                    className="object-cover"
                />

                {/* Dark overlay */}
                 

                {/* Glass Card */}
                <div className="relative z-10 text-center text-white px-6 py-10 
    bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">

                    <h2 className="text-2xl md:text-4xl font-bold">Careers and Tenders</h2>

                    <p className="mt-4 max-w-xl mx-auto text-white/80">
                        Explore job opportunities, recruitment updates, and tender notices for suppliers and partners interested in working with our hospital.
                    </p>

                </div>

            </div>
            <div>
                <Navbar />
            </div>


            {/* TAB BUTTONS */}
            <div className="bg-white py-6">
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setActiveTab("careers")}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === "careers"
                            ? "bg-[#08930c] text-white"
                            : "bg-gray-200 text-black"
                            }`}
                    >
                        Careers
                    </button>

                    <button
                        onClick={() => setActiveTab("tenders")}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === "tenders"
                            ? "bg-[#08930c] text-white"
                            : "bg-gray-200 text-black"
                            }`}
                    >
                        Tenders
                    </button>
                </div>
            </div>

            {/* PAGE CONTENT */}
            {activeTab === "careers" ? (
                <>
                    <div className="relative bg-gradient-to-br from-green-50 via-white to-green-100 h-auto p-10 overflow-hidden">

                        {/* soft branded glow */}
                        <div className="absolute inset-0 pointer-events-none opacity-30">
                            <div className="absolute w-72 h-72 bg-[#08930c] rounded-full blur-3xl top-[-90px] left-[-90px]" />
                            <div className="absolute w-72 h-72 bg-[#08930c] rounded-full blur-3xl bottom-[-120px] right-[-120px]" />
                        </div>

                        <div className="relative w-full sm:max-w-[75%] m-auto bg-white/70 backdrop-blur-md border border-green-100 rounded-2xl p-10 shadow-xl">

                            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

                                {/* IMAGE */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-[#08930c] opacity-0 group-hover:opacity-10 rounded-2xl transition" />

                                    <Image
                                        src="/pics/conso1.jpg"
                                        alt="Samaritan Eye Hospital Careers"
                                        width={300}
                                        height={300}
                                        className="rounded-2xl shadow-lg w-full sm:w-[95%] md:max-w-lg lg:max-w-full mx-auto transform group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* TEXT */}
                                <div className="mt-4 md:mt-0 text-black leading-relaxed space-y-4">

                                    <h2 className="text-2xl font-bold text-[#08930c]">
                                        Careers & Opportunities at Samaritan Eye Hospital
                                    </h2>

                                    <p className="text-gray-700">
                                        Join our dedicated team of healthcare professionals and help us deliver quality eye care services.
                                        We are always looking for passionate, skilled, and motivated individuals to grow with us.
                                    </p>

                                    {/* trust strip */}
                                    <div className="pt-3 flex flex-wrap gap-3">

                                        {/* Professional Growth */}
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-700">
                                            <span className="text-emerald-500">📈</span> Career growth opportunities
                                        </span>

                                        {/* Fair Hiring */}
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-700">
                                            <span className="text-emerald-500">⚖️</span> Fair & transparent hiring
                                        </span>

                                        {/* Team Culture */}
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-700">
                                            <span className="text-emerald-500">🤝</span> Supportive team environment
                                        </span>

                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="relative w-full h-auto py-8 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">

                        {/* ================= BACKGROUND PATTERN (from your design) ================= */}
                        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">

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

                        {/* ================= CONTENT (UNCHANGED) ================= */}
                        <div className="max-w-6xl mx-auto sm:py-3 p-2 relative">

                            {/* Title */}
                            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-[#08930c]">
                                Job Listings
                            </h2>

                            {/* Search */}
                            <div className="flex justify-center mb-6 sm:px-0 px-6">
                                <input
                                    type="text"
                                    placeholder="Search for jobs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full max-w-xl p-3 border border-green-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[#08930c] outline-none"
                                />
                            </div>

                            {/* Jobs */}
                            <div className="space-y-3">

                                {currentJobs.length > 0 ? currentJobs.map((job, index) => (

                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.3 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 0.7, delay: index * 0.1 }}
                                        className="bg-white/80 backdrop-blur-md shadow-2xl p-6 rounded-2xl flex justify-between items-center border border-green-100"
                                    >

                                        {/* Job Details */}
                                        <div>
                                            <h3 className="text-lg font-semibold">{job.title}</h3>
                                            <p className="text-gray-500 text-sm">
                                                {job.company} - {job.location}
                                            </p>

                                            <div className="mt-1 sm:mt-2 flex flex-wrap gap-1">
                                                {job.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="sm:px-3 px-2 py-1 bg-green-100 text-[#08930c] text-sm rounded-full"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Job Type & Apply */}
                                        <div className="items-center">
                                            <p className="text-md text-black font-bold mb-2">{job.type}</p>

                                            <button
                                                onClick={() => handleApplyClick(jobs[index])}
                                                className="mt-4 px-4 py-2 bg-[#08930c] text-white rounded-xl hover:bg-green-100 hover:text-black text-md transition"
                                            >
                                                Apply
                                            </button>
                                        </div>

                                    </motion.div>

                                )) : (

                                    <div className="flex flex-col items-center justify-center py-10 text-center">
                                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>

                                        <h2 className="text-lg font-semibold text-black">No Jobs Found</h2>
                                        <p className="text-black mt-1">Check back later for new opportunities.</p>
                                    </div>

                                )}

                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center mt-6 space-x-4">

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className={`px-4 py-2 rounded-lg ${currentPage === 1
                                            ? 'bg-gray-300 cursor-not-allowed'
                                            : 'bg-[#08930c] text-white hover:bg-green-100 hover:text-black'
                                            }`}
                                    >
                                        Prev
                                    </button>

                                    <span className="px-4 py-2 bg-gray-100 rounded-lg">
                                        Page {currentPage} of {totalPages}
                                    </span>

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className={`px-4 py-2 rounded-lg ${currentPage === totalPages
                                            ? 'bg-gray-300 cursor-not-allowed'
                                            : 'bg-[#08930c] text-white hover:bg-green-100 hover:text-black'
                                            }`}
                                    >
                                        Next
                                    </button>

                                </div>
                            )}

                        </div>

                        {/* ================= KEYFRAMES ================= */}
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

                    {isOpen && selectedJob && (

                        <div
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 flex items-center justify-center z-100 backdrop-blur-sm bg-black/30 sm:overflow-hidden  ">
                            <div className="flex items-center justify-center overflow-y-auto max-h-[95vh]  sm:p-0 pt-100">
                                <div className="bg-white shadow-lg rounded-2xl  overflow-hidden max-w-4xl w-full  grid grid-cols-1 md:grid-cols-2">
                                    {/* Left Side - Job Details */}

                                    <div className="p-8 bg-[#08930c] text-white flex flex-col justify-center ">
                                        <h2 className="sm:text-2xl text-xl font-bold">{selectedJob.title}</h2>
                                        <p className="mt-2 text-gray-200 text-md">{selectedJob.description}</p>

                                        <h3 className="mt-6  text-lg sm:text-xl font-semibold">Responsibilities</h3>
                                        <ul className="mt-2 list-disc list-inside text-gray-200 space-y-1 text-md">
                                            {selectedJob.responsibilities.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>

                                        <h3 className="mt-6 text-lg sm:text-xl font-semibold">Qualifications</h3>
                                        <ul className="mt-2 list-disc list-inside text-gray-200 space-y-1 text-md">
                                            {selectedJob.qualifications.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right Side - How to Apply */}
                                    <div className="p-8 bg-white flex flex-col justify-center">
                                        <h2 className="sm:text-2xl text-xl font-bold text-gray-800">How to Apply</h2>
                                        <p className="mt-4 text-gray-600 text-md">Send your cover letter and CV to:</p>
                                        <p className="mt-2 text-green-600 font-semibold text-md">samaritaneyecenter@gmail.com</p>

                                        <p className="mt-6 text-gray-600 text-md">Make sure to include:</p>
                                        <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1 text-md">
                                            <li>Your updated CV.</li>
                                            <li>A cover letter explaining why you’re a great fit.</li>
                                            <li>Portfolio or samples of previous projects (if available).</li>
                                        </ul>


                                    </div>
                                </div>
                            </div>

                        </div>

                    )}
                </>
            ) : (
                <>

                    <div className="relative bg-gradient-to-br from-green-50 via-white to-green-100 h-auto p-10 overflow-hidden">

                        {/* soft branded glow */}
                        <div className="absolute inset-0 pointer-events-none opacity-30">
                            <div className="absolute w-72 h-72 bg-[#08930c] rounded-full blur-3xl top-[-90px] left-[-90px]" />
                            <div className="absolute w-72 h-72 bg-[#08930c] rounded-full blur-3xl bottom-[-120px] right-[-120px]" />
                        </div>

                        <div className="relative w-full sm:max-w-[75%] m-auto bg-white/70 backdrop-blur-md border border-green-100 rounded-2xl p-10 shadow-xl">

                            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

                                {/* IMAGE */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-[#08930c] opacity-0 group-hover:opacity-10 rounded-2xl transition" />

                                    <Image
                                        src="/pics/tenders.png"
                                        alt="Samaritan Eye Hospital Tender"
                                        width={300}
                                        height={300}
                                        className="rounded-2xl shadow-lg w-full sm:w-[95%] md:max-w-lg lg:max-w-full mx-auto transform group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* TEXT */}
                                <div className="mt-4 md:mt-0 text-black leading-relaxed space-y-4">

                                    <h2 className="text-2xl font-bold text-[#08930c]">
                                        Samaritan Eye Hospital Tenders & Procurement
                                    </h2>

                                    <p className="text-gray-700">
                                        Samaritan Eye Hospital invites qualified suppliers, contractors, and service providers
                                        to participate in our transparent and competitive procurement process.
                                    </p>



                                    {/* trust strip */}
                                    <div className="pt-3 flex flex-wrap gap-3">
                                        {/* Transparent Procurement */}
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-700">
                                            <span className="text-emerald-500">🔍</span> Transparent procurement
                                        </span>

                                        {/* Fair Evaluation */}
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-700">
                                            <span className="text-emerald-500">⚖️</span> Fair evaluation
                                        </span>

                                        {/* Trusted Healthcare Partnerships */}
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-700">
                                            <span className="text-emerald-500">🤝</span> Trusted healthcare partnerships
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="relative w-full h-auto py-8 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">

                        {/* ================= BACKGROUND PATTERN (REPLACED ONLY) ================= */}
                        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">

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

                        {/* ================= YOUR ORIGINAL CONTENT (UNCHANGED) ================= */}
                        <div className="max-w-5xl mx-auto p-4 relative">

                            <h1 className="text-xl sm:text-2xl font-bold m-5 text-[#08930c]">
                                Latest Tenders
                            </h1>

                            <input
                                type="text"
                                placeholder="Search tenders..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full p-2 border border-green-200 rounded-xl mb-4"
                            />

                            <div className="space-y-4">

                                {currentTenders && currentTenders.length > 0 ? (
                                    currentTenders.map((tender, index) => (
                                        <div key={index} className="border-b pb-2">

                                            <p className="text-black text-sm">Notice Date: {tender.date}</p>
                                            <p className="text-md font-semibold">{tender.title}</p>
                                            <p className="text-black text-sm">Deadline: {tender.deadline}</p>

                                            <div className="text-black text-sm flex items-center">
                                                <span>Status:</span>
                                                <span
                                                    className={`text-white text-sm px-3 py-1 rounded-md ml-2 ${tender.status === "Open" ? "bg-green-500" : "bg-red-500"
                                                        }`}
                                                >
                                                    {tender.status}
                                                </span>
                                            </div>

                                            <a href={tender.file} download className="text-[#08930c] underline">
                                                Download
                                            </a>

                                        </div>
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-10 text-center">
                                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>

                                        <h2 className="text-lg font-semibold text-black">No Tenders Found</h2>
                                        <p className="text-black mt-1">Check back later for new opportunities.</p>
                                    </div>
                                )}

                            </div>

                            {/* Pagination */}
                            <div className="flex justify-between mt-4">

                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                                >
                                    Previous
                                </button>

                                <span>Page {currentPage}</span>

                                <button
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            indexOfLastTender < filteredTenders.length ? prev + 1 : prev
                                        )
                                    }
                                    disabled={indexOfLastTender >= filteredTenders.length}
                                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                                >
                                    Next
                                </button>

                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    );
}