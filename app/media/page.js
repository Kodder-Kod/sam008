"use client";

import Navbar from "../components/header/page";

import Image from 'next/image';
import React, { useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const news = [
    {
        title: "Nursing Week Celebration",
        description:
            "Join us as we celebrate Nursing Week, recognizing the dedication, compassion, and vital role our nurses play in delivering exceptional eye care services to our patients every day.",
        image: "/pics/cake.jpg",
        link: "#",
    },
    {
        title: "Glaucoma Awareness Week",
        description:
            "Learn about the importance of early glaucoma detection and treatment. Our specialists provide screening, education, and management to help prevent vision loss.",
        image: "/pics/glaucoma.png",
        link: "#",
    },
    {
        title: "Community Outreach Programs",
        description:
            "Through regular outreach activities, Samaritan Eye Center brings eye screening, education, and referrals closer to communities with limited access to eye care services.",
        image: "/pics/outreach0044.png",
        link: "#",
    },
    {
        title: "Patient Success Stories",
        description:
            "Read inspiring stories from patients whose lives have been transformed through cataract surgery, glaucoma care, and other specialized treatments at Samaritan Eye Center.",
        image: "/pics/outreach0077.png",
        link: "#",
    },
    {
        title: "Cataract Awareness Month",
        description:
            "During Cataract Awareness Month, we educate the public on cataract prevention, symptoms, treatment options, and the benefits of timely surgical intervention.",
        image: "/pics/cataract.png",
        link: "#",
    },
];


const topics = [
    {
        title: "Staff",
        images: [
            "/pics/doc2.png",
            "/pics/outreach007.png",
            "/pics/services001.png",
            "/pics/staff0033.jpg",
            "/pics/staff0011.png",
            "/pics/staff0066.jpg",
            "/pics/staff0044.jpg",
            "/pics/staff077.png",
            "/pics/staff011.png",
            "/pics/staff0088.png",
        ],
    },
    {
        title: "Our Facilities",
        images: [
            "/pics/facility1.jpg",
            "/pics/general0099.jpg",
            "/pics/facility0066.jpg",
            "/pics/glaucoma1.jpg",
            "/pics/facility0033.png",
            "/pics/facility0022.jpg",
            "/pics/facility0055.jpg",
            "/pics/genaral0011.jpg",
            "/pics/facility0033.jpg",
            "/pics/lab002.png",
        ],
    },
];

const Media = () => {


    const [selectedYear, setSelectedYear] = useState(2018); // Default latest year

    return (
        <div className='bg-white'>

            <div className="relative h-[60vh] flex items-center justify-center font-sans overflow-hidden">

                {/* Background */}
                <Image
                    src="/pics/camera001.jpg"
                    alt="bg"
                    fill
                    className="object-cover "
                />

                {/* Dark overlay */}


                {/* Glass Card */}
                <div className="relative z-10 text-center text-white px-6 py-10 
  bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">

                    <h1 className="text-2xl md:text-4xl font-bold">Media</h1>

                    <p className="mt-4 max-w-xl mx-auto text-white/80">
                        Explore our latest news, events, health awareness campaigns, and moments captured from our eye care services in the community.
                    </p>
                </div>
            </div>
            <div>
                <Navbar />
            </div>


            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 15000, disableOnInteraction: false }}
                loop
                pagination={{ clickable: true }}
                className="w-full h-auto"
            >
                {topics.map((topic, index) => {

                    const layoutSets = [
                        /*           [
                                       "col-span-2 row-span-2", // big left
                                       "col-span-1 row-span-1",
                                       "col-span-1 row-span-2",
                                       "col-span-2 row-span-1",
                                       "col-span-1 row-span-1",
                                       "col-span-1 row-span-1",
                                       "col-span-2 row-span-2",
                                       "col-span-1 row-span-1",
                                   ],
                                   */

                        [
                            "col-span-1 row-span-1",
                            "col-span-2 row-span-2", // big center
                            "col-span-1 row-span-2",
                            "col-span-1 row-span-1",
                            "col-span-2 row-span-1",
                            "col-span-1 row-span-1",
                            "col-span-1 row-span-2",
                            "col-span-2 row-span-2",
                        ],

                        [
                            "col-span-1 row-span-2",
                            "col-span-1 row-span-1",
                            "col-span-2 row-span-1",
                            "col-span-1 row-span-1",
                            "col-span-2 row-span-2", // big right
                            "col-span-1 row-span-1",
                            "col-span-2 row-span-2",
                            "col-span-1 row-span-1",
                        ],
                    ];

                    const currentLayout = layoutSets[index % layoutSets.length];

                    return (
                        <SwiperSlide key={index}>
                            {/* TITLE */}
                            <div className="w-full text-center mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-[#08930c] inline-block my-10">
                                    {topic.title}
                                </h1>
                            </div>

                            {/* GALLERY */}
                            <div className="w-full bg-white p-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[180px] gap-4">

                                    {topic.images.map((src, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className={`
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    shadow-md
                                    group
                                    ${currentLayout[imgIndex % currentLayout.length]}
                                `}
                                        >
                                            <Image
                                                src={src}
                                                alt={`Gallery ${imgIndex + 1}`}
                                                fill
                                                sizes="(max-width:768px) 50vw, 25vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* The News Room */}
            <div className="relative w-full h-auto py-12 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">

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
                <div className="relative w-[90%] mx-auto">

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#08930c] mb-10">
                        Latest Events & News
                    </h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                        {news.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group bg-white/80 backdrop-blur-md border border-green-100 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >

                                {/* Image */}
                                <div className="overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Text */}
                                <div className="p-4">

                                    <h3 className="text-lg font-semibold text-[#08930c] mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <a
                                        href={service.link}
                                        className="inline-block mt-4 text-sm font-semibold text-[#08930c] hover:text-green-700 transition"
                                    >
                                        Learn more →
                                    </a>

                                </div>
                            </motion.div>
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

export default Media