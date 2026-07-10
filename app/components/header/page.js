"use client";

import { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaSearch } from "react-icons/fa";
import {
    FaHome, FaInfoCircle, FaMapMarkedAlt, FaPhotoVideo, FaChalkboardTeacher,
    FaHandsHelping, FaUserInjured, FaBriefcase, FaFileContract, FaQuestionCircle, FaEnvelope, FaFirstAid
} from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [branchesOpen, setBranchesOpen] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);


    // Scroll event listener to track the scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handle dropdown visibility with a delay
    const handleMouseEnter = (setOpen) => {
        if (dropdownTimeout) clearTimeout(dropdownTimeout);
        setOpen(true);
    };

    const handleMouseLeave = (setOpen) => {
        setDropdownTimeout(setTimeout(() => setOpen(false), 100)); // Delay hiding
    };

    return (
        <nav>
            {/**  desktop view navbar */}
            <div className="flex items-center justify-center">

            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <div
                        className={`bg-white hidden lg:flex justify-between items-center px-6 xl:px-8 h-[70px] text-black border border-gray-100 transition-all duration-300 z-50
        ${isScrolled
                                ? "w-full fixed top-0 left-0 shadow-[0_15px_45px_rgba(0,0,0,0.18)]"
                                : "top-20 fixed w-[92%] rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                            }`}
                    >
                        {/* LOGO */}
                        <a href="/home" className="flex items-center gap-3">
                            <div className="bg-white p-1.5 rounded-full shadow-md border border-gray-100">
                                <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="w-[60px] h-[60px] object-contain"
                                />
                            </div>

                            <div className="hidden xl:block leading-tight">
                                <h1 className="text-sm ">Samaritan Eye & Retina Center</h1>
                                <p className="text-[11px] text-gray-500">
                                    Eye Care with Compassion
                                </p>
                            </div>
                        </a>

                        {/* LINKS */}
                        <div className="flex items-center gap-1 text-sm ">
                            <a href="/home" className="px-4 py-2 rounded-full hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                Home
                            </a>

                            <a href="/about" className="px-4 py-2 rounded-full hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                About
                            </a>


                            <a href="/services" className="px-4 py-2 rounded-full hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                Services
                            </a>

                            <a href="/media" className="px-4 py-2 rounded-full hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                Media
                            </a>

                            <a href="/patients" className="px-4 py-2 rounded-full hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                For Patients
                            </a>

                            <a href="/careers" className="px-4 py-2 rounded-full hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                Careers & Tenders
                            </a>

                            <a href="/faq" className="px-4 py-2 rounded-full hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                FAQs
                            </a>

                            <a href="/contact" className="px-4 py-2 rounded-full hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                Contact Us
                            </a>
                        </div>

                        {/* BUTTON */}
                        <a
                            href="tel:+254794878020"
                            className="bg-[#08930c] text-sm hover:bg-green-700 text-white px-3 py-2.5 rounded-full font-bold shadow-[0_10px_30px_rgba(8,147,12,0.35)] transition-all duration-300 hover:scale-105"
                        >
                            Call : +(254) 794 878 020
                        </a>
                    </div>
                </div>
            </div>

            {/** MOBILE + TABLET NAVBAR */}
            <div className="fixed top-0 z-50 w-screen block lg:hidden">

                {/* TOP BAR */}
                <div className="bg-[#08930c] text-white flex justify-between items-center px-3 py-2">
                    <a href="/patients" className="text-[13px] font-medium">
                        For Patients
                    </a>

                    <a
                        href="tel:+254794878020"
                        className="bg-white text-[#08930c] px-3 py-1 rounded-full text-[12px] font-bold shadow-sm"
                    >
                        +(254) 794 878 020
                    </a>
                </div>

                {/* MAIN NAV */}
                <div className="bg-white flex justify-between items-center px-3 py-2 shadow-xl  border-b border-gray-100">

                    {/* MENU */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black"
                    >
                        <FaBars size={18} />
                    </button>

                    {/* LOGO */}
                    <a href="/home" className="flex items-center gap-2">
                        <div className="bg-white rounded-full p-1 shadow-sm border border-gray-100">
                            <img
                                src="/logo.png"
                                alt="logo"
                                className="h-[45px] w-[45px] object-contain"
                            />
                        </div>

                        <div className="leading-tight">
                            <h1 className="text-[14px] font-bold text-black">
                                Samaritan Eye & Retina Center
                            </h1>

                            <p className="text-[9px] text-gray-500">
                                Eye Care with Compassion
                            </p>
                        </div>
                    </a>

                    {/* SPACE */}
                    <div className="w-10"></div>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="bg-white mx-2 mt-2 rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-gray-100 p-3 text-black">

                        <div className="flex flex-col gap-1 text-[14px] font-semibold">

                            <a href="/home" className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                <FaHome /> Home
                            </a>

                            <a href="/home" className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                <FaInfoCircle /> About
                            </a>

                            <a href="/services" className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                <FaFirstAid /> Services
                            </a>

                            <a href="/media" className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                <FaPhotoVideo /> Media
                            </a>

                            <a href="/patients" className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                <FaUserInjured /> For Patients
                            </a>

                            <a href="/careers" className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                <FaBriefcase /> Careers & Tenders
                            </a>

                            <a href="/faq" className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                <FaQuestionCircle /> FAQ
                            </a>


                            <a href="/contact" className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-[#08930c] hover:text-white transition-all duration-300">
                                <FaEnvelope /> Contact Us
                            </a>
                        </div>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;
