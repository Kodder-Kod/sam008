"use client";

import React from "react";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Media", id: "media" },
    { name: "For Patients", id: "patients" },
    { name: "Career", id: "career" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className=" h-30 w-30  flex items-center justify-center mr-4">
                <Image
                  width={1000}
                  height={1000}
                  src="/logo.png"
                  alt="Samaritan Logo"
                  className="object-cover shadow-2xl rounded-full"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Samaritan Eye and Retina Center</h3>
                <p className="text-xs text-green-300">
                  Eye Care with Compassion
                </p>
              </div>
            </div>

            <p className="text-green-200 leading-relaxed">
              Providing quality, accessible and affordable healthcare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.id === "home" ? "/" : `/${item.id}`}
                    className="text-green-200 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>


          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>

            <ul className="space-y-3">
              <li className="text-green-200 flex items-start">
                <span className="mr-2">•</span> General Ophthalmology
              </li>

              <li className="text-green-200 flex items-start">
                <span className="mr-2">•</span> Cataract Surgery
              </li>
              <li className="text-green-200 flex items-start">
                <span className="mr-2">•</span> Retina Surgery
              </li>
              <li className="text-green-200 flex items-start">
                <span className="mr-2">•</span> Glaucoma Management
              </li>
              <li className="text-green-200 flex items-start">
                <span className="mr-2">•</span> Optical Services
              </li>
              <li className="text-green-200 flex items-start">
                <span className="mr-2">•</span> Pharmacy Services
              </li>
              <li className="text-green-200 flex items-start">
                <span className="mr-2">•</span> Laboratory Services
              </li>

              <li className="text-green-200 flex items-start">
                <span className="mr-2">•</span> Community Outreach Programs
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>

            <ul className="space-y-4">
              <li className="flex items-center text-green-200">
                <FaWhatsapp className="w-5 h-5 mr-3 flex-shrink-0 text-green-300" />
                <a
                  href="https://wa.me/254794878020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  0794 878 020
                </a>
              </li>

              <li className="flex items-center text-green-200">
                <TfiEmail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="mailto:samaritaneyecenter@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  samaritaneyecenter@gmail.com
                </a>
              </li>

              <li className="flex items-center text-green-200">
                <FaFacebook className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="https://web.facebook.com/SamaritanEyeCenter/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Samaritan Eye Hospital
                </a>
              </li>


              <li className="flex items-start text-green-200">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                <span>Bungoma County</span>
              </li>

              <li className="flex items-center text-green-200">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="font-semibold">Monday to Saturday</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Samaritan Eye & Retina Center. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-green-300">
            <span>Eye Care with Compassion </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;