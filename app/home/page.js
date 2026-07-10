"use client";

import Navbar from "../components/header/page";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";



const slides = [
  {
    image: "/pics/hero001.png",
    title: "Eye Care with Compassion",
    text: "Delivering trusted, patient-centered eye care that blends medical excellence with genuine compassion for every individual we serve.",
  },
  {
    image: "/pics/hero002.png",
    title: "Specialized Eye Care You Can Trust",
    text: "From routine vision checks to advanced procedures, we provide precise, personalized eye care for lasting clarity and confidence.",
  },
  {
    image: "/pics/optical2.jpg",
    title: "Precision Optical Solutions",
    text: "Crafting clear vision through expertly fitted lenses, modern frames, and tailored optical solutions designed for everyday comfort and clarity.",
  },
  {
    image: "/pics/pha.jpg",
    title: "Essential Eye Health Pharmacy",
    text: "Providing safe, reliable access to ophthalmic medications with professional guidance to support effective treatment and recovery.",
  },
  {
    image: "/pics/outreach0044.png",
    title: "Serving Communities, Restoring Sight",
    text: "Through outreach and preventive care programs, we extend quality eye care beyond our facility to those who need it most.",
  },
];



const partners = [
  { name: "AAR", image: "/pics/insurance/aar.png" },
  { name: "SHA", image: "/pics/insurance/sha.png" },
  { name: "Kenya Alliance", image: "/pics/insurance/kenya.png" },
  { name: "CIC", image: "/pics/insurance/cic.png" },
  { name: "KCB", image: "/pics/insurance/kcb.jpg" },
];


const services = [
  {
    title: "General Ophthalmology",
    description: "Comprehensive eye care, including diagnosis, treatment, and routine vision assessments.",
    image: "/pics/doc.jpg",
    link: "/services",
  },
  {
    title: "Cataract Surgery",
    description: "Advanced surgical procedures to restore clear vision affected by cataracts.",
    image: "/pics/doc2.png",
    link: "/services",
  },
  {
    title: "Retina Surgery",
    description: "Specialized surgical management of retinal disorders and vision-threatening conditions.",
    image: "/pics/surgery.jpeg",
    link: "/services",
  },
  {
    title: "Glaucoma Management",
    description: "Early detection, monitoring, and treatment to preserve vision and prevent damage.",
    image: "/pics/doc51.jpg",
    link: "/services",
  },
  {
    title: "Optical Services",
    description: "Prescription eyewear solutions including frames, lenses, and vision correction support.",
    image: "/pics/optical.jpg",
    link: "/services",
  },
  {
    title: "Pharmacy Services",
    description: "Provision of prescribed ophthalmic medications and patient pharmaceutical care.",
    image: "/pics/pham1.jpg",
    link: "/services",
  },
  {
    title: "Laboratory Services",
    description: "Accurate diagnostic testing to support effective clinical decision-making.",
    image: "/pics/lab2.jpg",
    link: "/services",
  },
  {
    title: "Inpatient Services",
    description: "Dedicated inpatient eye care with continuous medical supervision and support.",
    image: "/pics/inpatient1.jpg",
    link: "/services",
  },
  {
    title: "Community Outreach Programs",
    description: "Vision screening, education, and outreach initiatives for underserved communities.",
    image: "/pics/outreach0066.png",
    link: "/services",
  },
];


const Homepage = () => {


  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);


  return (

    <div className="w-screen"  >

      <div className="sm:h-screen h-[60vh] font-sans relative w-full">

        {/* Background & Content Swiper */}

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="absolute inset-0 w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Background Image */}
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="w-full h-full object-cover  md:object-fill "
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-start px-4 sm:px-10 md:px-20">
                <div className="z-10 max-w-2xl mt-32 p-6 md:p-8 rounded-3xl bg-black/45 backdrop-blur-lg border border-white/20 shadow-2xl">

                  <span className="inline-block bg-[#08930c] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                    Samaritan Eye Hospital
                  </span>

                  <h1 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                    {slide.title}
                  </h1>

                  <p className="hidden md:block mt-5 text-white text-base leading-relaxed max-w-xl">
                    {slide.text}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6 hidden md:block ">
                    <span className="bg-white/20 text-white px-2 py-1 rounded-full text-sm">
                      Compassionate Care
                    </span>

                    <span className="bg-white/20 text-white px-2 py-1 rounded-full text-sm mx-3">
                      Advanced Eye Care
                    </span>

                    <span className="bg-white/20 text-white px-2 py-1 rounded-full text-sm">
                      Community Outreach
                    </span>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a
                      href="/about"
                      className="bg-[#08930c] text-white px-3 py-2 rounded-xl font-medium hover:scale-105 transition"
                    >
                      Learn More
                    </a>

                    <a
                      href="/contact"
                      className="bg-white/20 backdrop-blur-md text-white px-3 py-2 rounded-xl font-medium hover:bg-white hover:text-black transition"
                    >
                      Contact Us
                    </a>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        {/* Navbar (Fixed) */}
        <div>
          <Navbar />
        </div>
      </div>

      {/* Quick services section*/}
      <div className="bg-gradient-to-b from-white via-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#08930c] mb-10">
              Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who are we */}

      <div
        className="bg-white h-auto p-1 sm:p-4 "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="py-12 px-4 sm:px-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#08930c] mb-10">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#08930c]">
              <Image
                src="/logo.png"
                alt="Compassion"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="font-bold text-lg mb-3">Compassionate Care</h3>
              <p className="text-gray-700">
                We place patients at the heart of everything we do, ensuring personalized and respectful care.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#08930c]">
              <Image
                src="/logo.png"
                alt="Expertise"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="font-bold text-lg mb-3">Specialized Expertise</h3>
              <p className="text-gray-700">
                Advanced eye care services delivered by skilled professionals using modern technology.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#08930c]">
              <Image
                src="/logo.png"
                alt="Community"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="font-bold text-lg mb-3">Community Focus</h3>
              <p className="text-gray-700">
                We extend quality eye care beyond our hospital through outreach and awareness programs.
              </p>
            </div>

          </div>
        </motion.div>
      </div>


      {/* Our Partners */}

      <div className="bg-white  py-12 px-6  overflow-hidden">
        <h2 className="text-2xl sm:text-3xl   text-center   font-bold text-[#08930c] text-center  mb-2 md:mb-15">Our Partners</h2>
        <div className="relative w-full flex overflow-hidden mb-0  md:my-5 ">
          {/* Mobile Grid View */}
          <div className="grid grid-cols-3 gap-2 px-2 sm:hidden">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={partner.image}
                alt={partner.name}
                width={180}
                height={120}
                className="h-20 object-contain mx-auto"
              />
            ))}
          </div>

          {/* Scrolling View for Tablet and Up */}

          <motion.div
            className="hidden sm:flex min-w-full"
            animate={{ x: ["0%", "-10%"] }} // Move only half the duplicated content
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <Image key={index} src={partner.image} alt={partner.name} width={250} // You can specify the width here
                height={150} className="h-20 md:h-30 object-contain mx-10" />
            ))}
          </motion.div>

        </div>
      </div>

    </div>
  );
}


export default Homepage