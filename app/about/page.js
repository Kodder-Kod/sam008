'use client';

import Navbar from "../components/header/page";
import Image from 'next/image';
import { motion } from "framer-motion";
import {
    FaHandshake,
    FaBalanceScale,
    FaHeart,
    FaUserMd,
    FaShieldAlt,
    FaBed,
} from "react-icons/fa";

import {
    FaHospital,
    FaGlasses,
    FaStethoscope,
    FaHeartbeat,
    FaPills,
} from "react-icons/fa";

const departments = [
    {
        title: "Reception",
        description:
            "At the Samaritan Eye & Retina Hospital reception, a calming ambiance greets visitors, with gentle lighting and comfortable seating.",
        image: "/pics/reception009.png",
        icon: FaHospital,
    },
    {
        title: "In-Patient",
        description:
            "We have a twenty two bed in-patient service.",
        image: "/pics/ward1.jpg",
        icon: FaBed,
    },
    {
        title: "Optometry",
        description:
            "We boast a highly trained optometrist who runs our full-fledged optometry unit.",
        image: "/pics/optom.png",
        icon: FaGlasses,
    },
    {
        title: "Consultation",
        description:
            "We are the only health facility in Bungoma County with a resident Ophthalmologist. He is one of the few vitreo-retinal specialists in Kenya and a trained Phaco-emulsification surgeon.",
        image: "/pics/career1.jpg",
        icon: FaUserMd,
    },
    {
        title: "Theater",
        description:
            "Our theater is ultramodern with world class equipment.",
        image: "/pics/thearter0011.jpg",
        icon: FaHeartbeat,
    },
    {
        title: "Pharmacy",
        description:
            "Our pharmacy is fully stocked with an array of eye drops to meet the various needs of our clients.",
        image: "/pics/pharmacy0011.jpg",
        icon: FaPills,
    },
];

const About = () => {


    const mission = [
        {
            title: "Vision",
            description: "To be the center of excellence in eye care in the region and beyond. ",
            image: "/pics/vision0021.jpg",
            link: "#",
        },

        {
            title: "Mission",
            description: "To become a regional leader in eye care by delivering affordable, compassionate, and world class services to all.",
            image: "/pics/mission.png",
            link: "#",
        },


    ];


    return (

        <div>
            <div className="relative h-[60vh] flex items-center justify-center font-sans overflow-hidden">

                {/* Background */}
                <Image
                    src="/pics/about31.jpg"
                    alt="bg"
                    fill
                    className="object-fill "
                />       

                {/* Glass Card */}
                <div className="relative z-10 text-center text-white px-6 py-10 
                  bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">
                    <h1 className="text-2xl md:text-4xl font-bold">About Us</h1>
                    <p className="mt-4 max-w-xl mx-auto text-white/80 text-md">
                        Compassionate eye care built on trust, precision and community service.
                    </p>
                </div>

            </div>
            <div>
                <Navbar />
            </div>

            {/* About us */}

            <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-white py-24 px-6 font-sans">
                {/* Subtle Background Decorative Element */}
                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl" />

                <div className="max-w-6xl mx-auto">
                    {/* HEADER */}
                    <div className="text-center mb-20">
                        <span className="text-xl font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                            Who We Are
                        </span>
                        <h2 className="text-xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
                            Eye care with Compassion
                        </h2>

                    </div>

                    {/* HERO SPLIT */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* LEFT SIDE: PREMIUM IMAGE CONTAINER */}
                        <div className="lg:col-span-5 relative aspect-[4/3] md:aspect-square lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />

                            <Image
                                src="/pics/staff0011.png"
                                alt="Samaritan Eye Center"
                                fill
                                className="object-full group-hover:scale-103 transition duration-700 ease-out"
                             
                                priority
                            />

                            {/* Premium Floating Trust Tag */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-white/90 p-4 rounded-xl shadow-lg border border-white/20 flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Established</p>
                                    <p className="text-lg font-bold text-slate-900">2022</p>
                                </div>
                                <div className="h-8 w-px bg-slate-200" />
                                <div className="text-right">
                                    <p className="text-sm font-medium text-emerald-800">Trusted Care</p>
                                    <p className="text-xs text-slate-500">Bungoma County</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: MODERN EDITORIAL TEXT */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">About Samaritan Eye Hospital</h3>
                                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">
                                    Samaritan Eye Center is a specialized eye hospital based in{" "}
                                    <span className="font-semibold text-emerald-700 bg-emerald-50/60 px-1.5 py-0.5 rounded">
                                        Bungoma County
                                    </span>
                                    , dedicated to delivering affordable, high-quality, and comprehensive ophthalmic services to our community.
                                </p>
                            </div>

                            {/* Features/Differentiators List */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">What Makes Us Different</h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">✓</span>
                                        <p className="text-sm text-slate-600"><strong className="text-slate-800 block">Modern Expertise</strong> Advanced diagnostics and treatment protocols.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">✓</span>
                                        <p className="text-sm text-slate-600"><strong className="text-slate-800 block">Patient-First Care</strong> Every individual is welcomed with dignity and respect.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Elegant Callout Block for Philosophy */}
                            <div className="relative border-l-4 border-emerald-600 bg-slate-50 p-6 rounded-r-xl">
                                <span className="absolute right-6 top-4 text-6xl font-serif text-emerald-200/50 select-none pointer-events-none">“</span>
                                <p className="text-xs uppercase tracking-wider text-emerald-700 font-bold mb-1">Our Philosophy</p>
                                <blockquote className="text-base font-medium text-slate-800 italic">
                                    “Eye Care with Compassion”
                                </blockquote>
                                <p className="text-xs text-slate-500 mt-2">
                                    This core principle guides every consultation, diagnosis, and treatment plan we build.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            
            <div className="relative w-full bg-[#f4faf5] py-28 px-6 overflow-hidden font-sans">

                {/* OPTICAL PRECISION GRID (Subtle architectural lens lines) */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="lens-matrix" width="60" height="60" patternUnits="userSpaceOnUse">
                                {/* Fine technical lines */}
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#08930c" strokeWidth="1" strokeDasharray="4 4" />
                                {/* Subtle micro focal points */}
                                <circle cx="0" cy="0" r="1.5" fill="#08930c" />
                                <circle cx="30" cy="30" r="1" fill="#08930c" opacity="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#lens-matrix)" />
                    </svg>
                </div>

                {/* ARTISTIC FOCAL BLUR LIGHTING */}
                <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#08930c]/10 to-emerald-300/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-6xl mx-auto">

                    {/* THE DEFINING VALUES - ASYMMETRIC STRUCTURAL LAYOUT */}
                    <div className="relative">

                        <div className="grid md:grid-cols-12 gap-4 items-stretch">

                            {/* TITLE ANCHOR CARD */}
                            <div className="md:col-span-4 bg-[#08930c] rounded-3xl p-10 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                                <div>
                                    <h3 className="text-4xl font-black tracking-tight leading-tight">
                                        What<br />Defines<br />Us.
                                    </h3>
                                    <div className="w-12 h-1 bg-white/40 mt-6 rounded-full" />
                                </div>

                                <p className="text-emerald-100/80 text-sm font-light leading-relaxed mt-12 md:mt-0">
                                    The foundations and medical ethics guiding every procedure, diagnosis, and patient milestone.
                                </p>
                            </div>

                            {/* VISION CARD - Ultra premium translucent glass card over technical pattern */}
                            <div className="md:col-span-4 bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:bg-white/90 transition-all duration-500 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition duration-500">
                                    {/* Aesthetic Reticle Crosshair Symbol representing "Vision" */}
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#08930c" strokeWidth="2">
                                        <circle cx="20" cy="20" r="16" />
                                        <path d="M20 0 V40 M0 20 H40" />
                                    </svg>
                                </div>

                                <div>
                                    <span className="text-[#08930c] text-xs font-bold tracking-widest uppercase bg-emerald-100/60 px-3 py-1 rounded-md">
                                        01 / Target
                                    </span>
                                    <h4 className="text-2xl font-bold text-gray-900 mt-6 mb-3 tracking-tight">
                                        {mission[0]?.title || "Our Vision"}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed text-sm font-light">
                                        {mission[0]?.description}
                                    </p>
                                </div>

                                <div className="mt-8 rounded-2xl overflow-hidden shadow-inner aspect-[16/10] relative bg-gray-50 border border-gray-100">
                                    <Image
                                        src={mission[0]?.image || "/website/vision.jpg"}
                                        alt="Our Vision Visual"
                                        fill
                                        className="object-cover filter  transition-all duration-700"
                                    />
                                </div>
                            </div>

                            {/* MISSION CARD - Alternating structural depth */}
                            <div className="md:col-span-4 bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:bg-white/90 transition-all duration-500 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition duration-500">
                                    {/* Aesthetic Scale/Target Symbol representing "Mission" */}
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#08930c" strokeWidth="2">
                                        <path d="M5 20 L15 30 L35 10" />
                                    </svg>
                                </div>

                                <div>
                                    <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase bg-emerald-100/60 px-3 py-1 rounded-md">
                                        02 / Execution
                                    </span>
                                    <h4 className="text-2xl font-bold text-gray-900 mt-6 mb-3 tracking-tight">
                                        {mission[1]?.title || "Our Mission"}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed text-sm font-light">
                                        {mission[1]?.description}
                                    </p>
                                </div>

                                <div className="mt-8 rounded-2xl overflow-hidden shadow-inner aspect-[16/10] relative bg-gray-50 border border-gray-100">
                                    <Image
                                        src={mission[1]?.image || "/website/mission.jpg"}
                                        alt="Our Mission Visual"
                                        fill
                                        className="object-cover filter hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12 items-start">

                        {/* Left Side */}
                        <div className="lg:col-span-1">
                            <span className="text-[#08930c] font-semibold uppercase tracking-wider">
                                Our Values
                            </span>

                            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Our Core <br /> Values
                            </h2>

                            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                                We are driven by a strong value system that ensures outstanding
                                service, ethical practice, and compassionate care for every patient.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-px h-full bg-[#08930c]/30 mx-auto"></div>

                        {/* Values Grid */}
                        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-10">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#08930c] flex items-center justify-center text-white text-2xl">
                                    <FaShieldAlt />
                                </div>
                                <h3 className="mt-4 font-bold text-xl text-gray-900">
                                    Accountability
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    We take full responsibility for our actions, commitments, and the
                                    trust our patients place in us.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#08930c] flex items-center justify-center text-white text-2xl">
                                    <FaBalanceScale />
                                </div>
                                <h3 className="mt-4 font-bold text-xl text-gray-900">
                                    Ethics
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    We uphold the highest standards of integrity, professionalism, and
                                    patient confidentiality.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#08930c] flex items-center justify-center text-white text-2xl">
                                    <FaHeart />
                                </div>
                                <h3 className="mt-4 font-bold text-xl text-gray-900">
                                    Empathy
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    We listen, understand, and support our patients with compassion and
                                    genuine care.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#08930c] flex items-center justify-center text-white text-2xl">
                                    <FaUserMd />
                                </div>
                                <h3 className="mt-4 font-bold text-xl text-gray-900">
                                    Professionalism
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    We deliver quality eye care through competence, respect, and
                                    excellence in every service.
                                </p>
                            </div>

                            <div className="sm:col-span-2 text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#08930c] flex items-center justify-center text-white text-2xl">
                                    <FaHandshake />
                                </div>
                                <h3 className="mt-4 font-bold text-xl text-gray-900">
                                    Compassion
                                </h3>
                                <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                                    We show kindness, understanding, and support to all patients,
                                    especially those in need, ensuring they feel valued and cared for.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <span className="w-10 h-[2px] bg-[#08930c]" />
                            <span className="uppercase font-semibold text-[#08930c] tracking-wider text-sm">
                                Our Departments
                            </span>
                            <span className="w-10 h-[2px] bg-[#08930c]" />
                        </div>

                        <h2 className="text-3xl md:text-3xl font-bold text-slate-900">
                            Comprehensive Eye Care Services
                        </h2>


                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {departments.map((dept, index) => {
                            const Icon = dept.icon;

                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Image */}
                                    <div className="relative h-40 overflow-hidden">
                                        <Image
                                            src={dept.image}
                                            alt={dept.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative px-5 pb-5 pt-7">

                                        {/* Floating Icon */}
                                        <div className="absolute -top-6 left-5 w-12 h-12 rounded-full bg-[#08930c] flex items-center justify-center shadow-md">
                                            <Icon className="text-white text-lg" />
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                                            {dept.title}
                                        </h3>

                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {dept.description}
                                        </p>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

        </div>
    )
}

export default About