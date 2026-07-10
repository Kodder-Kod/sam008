'use client'

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight, Stethoscope, Activity, Eye, PillBottle, Hospital, Pill, Ambulance, Users, Target, Heart, Star, Award, Shield, Baby, Scissors, Glasses } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../components/header/page';



const Services = () => {

  const services = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "General Ophthalmology",
      description: "Comprehensive eye examinations, diagnosis, and treatment for all eye conditions.",
      image: "/pics/doc.jpg",
      image2: "/pics/genaral0011.jpg",
      image3: "/pics/general0099.jpg",
      details: [
        "Comprehensive eye examinations",
        "Diagnosis of eye diseases",
        "Vision assessment",
        "Preventive eye care"
      ]
    },

    {
      icon: <Eye className="w-12 h-12" />,
      title: "Cataract Surgery",
      description: "Advanced cataract diagnosis and surgical treatment to restore clear vision.",
      image: "/pics/surgery0011.jpg",
      image2: "/pics/surgery.jpeg",
      image3: "/pics/surgery0088.jpg",
      details: [
        "Cataract screening",
        "Lens replacement surgery",
        "Pre-operative assessment",
        "Post-operative follow-up"
      ]
    },

    {
      icon: <Eye className="w-12 h-12" />,
      title: "Retina Surgery",
      description: "Specialized diagnosis and management of retinal disorders.",
      image: "/pics/retina1.jpg",
      image2: "/pics/thearter0011.jpg",
      image3: "/pics/retina0077.jpg",
      details: [
        "Retinal examinations",
        "Diabetic retinopathy management",
        "Macular disease assessment",
        "Retina specialist consultations"
      ]
    },

    {
      icon: <Eye className="w-12 h-12" />,
      title: "Glaucoma Management",
      description: "Early detection and long-term treatment of glaucoma.",
      image: "/pics/gla1.jpg",
      image2: "/pics/glaucoma1.jpg",
      image3: "/pics/glaucoma0099.jpg",
      details: [
        "Glaucoma screening",
        "Eye pressure monitoring",
        "Medical treatment",
        "Surgical intervention when necessary"
      ]
    },

    {
      icon: <Glasses className="w-12 h-12" />,
      title: "Optical Services",
      description: "Professional optical services with quality frames and lenses.",
      image: "/pics/optical0055.jpg",
      image2: "/pics/eye2.jpg",
      image3: "/pics/optical002.png",
      details: [
        "Prescription glasses",
        "Designer frames",
        "Lens fitting",
        "Vision correction solutions"
      ]
    },

    {
      icon: <Pill className="w-12 h-12" />,
      title: "Pharmacy Services",
      description: "Well-stocked pharmacy providing prescribed medications and eye care products.",
      image: "/pics/phar1.jpg",
      image2: "/pics/pharmacy0011.jpg",
      image3: "/pics/pham1.jpg",
      details: [
        "Eye medications",
        "Prescription dispensing",
        "Patient counseling",
        "Medical supplies"
      ]
    },

    {
      icon: <Activity className="w-12 h-12" />,
      title: "Laboratory Services",
      description: "Accurate laboratory testing supporting diagnosis and treatment.",
      image: "/pics/lab002.png",
      image2: "/pics/lab2.jpg",
      image3: "/pics/lab003.jpg",
      details: [
        "Diagnostic testing",
        "Blood investigations",
        "Medical screening",
        "Timely results"
      ]
    },

    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Outreach Programs",
      description: "Extending quality eye care services to communities through outreach initiatives.",
      image: "/pics/camp001.png",
      image2: "/pics/outreach007.png",
      image3: "/pics/outreach0044.png",
      details: [
        "Free eye screening camps",
        "Community awareness programs",
        "School eye health programs",
        "Rural eye care services"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-green-50">
      {/* Header Section */}
      <div className="relative h-[60vh] flex items-center justify-center font-sans overflow-hidden">

        {/* Background */}
        <Image
          src="/pics/services001.png" 
          alt="bg"
          fill
          className="object-cover"
        />

        {/* Dark overlay */}
         

        {/* Glass Card */}
        <div className="relative z-10 text-center text-white px-6 py-10 
  bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">

          <h1 className="text-2xl md:text-4xl font-bold">Our Services</h1>

          <p className="mt-4 max-w-xl mx-auto text-white/80 sm:text-md ">
            Comprehensive eye care services delivered with precision, compassion, and modern technology to protect and improve your vision.
          </p>

        </div>

      </div>
      <div>
        <Navbar />
      </div>

      {/* Services Cards */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* IMAGE GRID */}
              <div className="p-4">
                <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[300px]">

                  <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl relative shadow-md">
                    <Image
                      width={1000}
                      height={1000}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                        {React.cloneElement(service.icon, {
                          className: "w-5 h-5 text-white",
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl shadow-md border border-white">
                    <Image
                      width={1000}
                      height={1000}
                      src={service.image2 || service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="overflow-hidden rounded-2xl shadow-md border border-white">
                    <Image
                      width={1000}
                      height={1000}
                      src={service.image3 || service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <ChevronRight className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 ml-3">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};
export default Services;

