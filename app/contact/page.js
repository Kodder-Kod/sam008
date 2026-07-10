"use client";


import Navbar from "../components/header/page";
import Image from 'next/image';
import React, { useState } from "react";
import { TbXboxX } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { ref, push } from "firebase/database";
import { db } from "../../config";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const Contact = () => {


  const [activeTab, setActiveTab] = useState("Enquiry");
  const [activeBranch, setActiveBranch] = useState('Base');


  const [addContactModalsuccess, setAddContactsuccess] = useState(false);
  const [addContactModalFail, setAddContactFail] = useState(false);



  const addContactsuccessFun = () => {
    setAddContactsuccess(true);
    setTimeout(() => setAddContactsuccess(false), 2000);
  };

  const addContactFailFun = () => {
    setAddContactFail(true);
    setTimeout(() => setAddContactFail(false), 2000);
  };


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    hospital: "",
    department: "",
    remark: "" // this will hold the main message / description
  });



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value || "",  // Ensures empty value is handled
    }));
  };

  const handleSubmit = async () => {
    try {

      // Reference to "contactUs" collection
      const contactRef = ref(db, "contactUs");

      await push(contactRef, {
        name: formData.name || "",
        email: formData.email || "",
        mobile: formData.mobile || "",
        hospital: formData.hospital,
        department: formData.department,
        remark: formData.remark,
        createdAt: new Date().toISOString()
      });

      // Success callback
      addContactsuccessFun();

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        hospital: "",
        department: "",
        remark: ""
      });

    } catch (error) {
      console.error("Firebase submit error:", error);
      addContactFailFun();
    }
  };



  return (
    <div>
      <div className="relative h-[60vh] flex items-center justify-center font-sans overflow-hidden">

        {/* Background */}
        <Image
          src="/pics/contact001.jpg"
          alt="bg"
          fill
          className="object-cover "
        />

        {/* Dark overlay */}


        {/* Glass Card */}
        <div className="relative z-10 text-center text-white px-6 py-10 
          bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">

          <h1 className="text-2xl md:text-4xl font-bold">Contact Us</h1>

          <p className="mt-4 max-w-xl mx-auto text-white/80">
            Get in touch with our team for appointments, inquiries, support, or any assistance. We are here to help you access quality eye care services.
          </p>

        </div>

      </div>
      <div>
        <Navbar />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-10">

          {/* LEFT: Contact Info Stack */}
          <div className="lg:col-span-5 space-y-6">

            {/* Header card */}
            <div className="bg-gradient-to-r from-[#08930c] to-[#0aa30f] text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold">Contact Samaritan</h2>
              <p className="mt-2 text-white/90">
                We’re available 24/7 for support, emergencies, and inquiries.
              </p>
            </div>

            {/* Info list */}
            {/* Info list */}
            <div className="space-y-4">
              {[
                {
                  icon: FaPhoneAlt,
                  title: "Phone",
                  value: "+254 794 878 020",
                  link: "tel:+254794878020",
                },
                {
                  icon: FaWhatsapp,
                  title: "WhatsApp",
                  value: "+254 794 878 020",
                  link: "https://wa.me/254794878020",
                },
                {
                  icon: FaEnvelope,
                  title: "Email",
                  value: "samaritaneyecenter@gmail.com",
                  link: "mailto:samaritaneyecenter@gmail.com",
                },
                {
                  icon: FaFacebookF,
                  title: "Facebook",
                  value: "Samaritan Eye Hospital-Bungoma",
                  link: "https://www.facebook.com/SamaritanEyeCenter",
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Location",
                  value: "Bungoma, Kenya",
                  link: "https://maps.google.com/?q=Samaritan+Eye+Hospital-Bungoma",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target={
                    item.link.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-2 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-[#08930c]">
                    <item.icon className="text-xl" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-semibold text-slate-800 group-hover:text-[#08930c] transition">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4408.201934497146!2d34.56444738698556!3d0.5854319525978579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781d7004da47285%3A0xfef6d9d1b9215893!2sSamaritan%20Eye%20Hospital-Bungoma!5e1!3m2!1sen!2ske!4v1780929144886!5m2!1sen!2ske'
                width="100%"
                height="260"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Form Floating Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 relative overflow-hidden">

              {/* subtle green glow */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#08930c]/10 rounded-full blur-3xl" />

              <h2 className="text-3xl font-bold text-slate-900 relative">
                Send Us a Message
              </h2>

              <p className="text-gray-600 mt-2 mb-8 relative">
                Fill the form and our team will respond as soon as possible.
              </p>

              <form className="space-y-5 relative">

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#08930c] focus:ring-2 focus:ring-green-100 outline-none transition"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#08930c] focus:ring-2 focus:ring-green-100 outline-none transition"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#08930c] focus:ring-2 focus:ring-green-100 outline-none transition"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#08930c] focus:ring-2 focus:ring-green-100 outline-none transition"
                />

                <button
                  type="submit"
                  className="w-full bg-[#08930c] hover:bg-[#067a09] text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  Send Message
                </button>
              </form>

            </div>
          </div>

        </div>
      </section>


      {/* Auto-Close Modals */}
      {addContactModalsuccess && (
        <div className="fixed inset-0 flex items-center justify-center "
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) 100%)',
          }}>
          <div className=" p-6 rounded-xl bg-white shadow-lg">
            <div className='flex justify-center'>

              <TiTick className='text-green-600 text-4xl  ' />
              <h2 className="text-lg font-bold mb-4">Success</h2>
            </div>
            <p>Your message was received by Samaritan Eye Hospital</p>
          </div>
        </div>
      )}

      {addContactModalFail && (
        <div className="fixed inset-0 flex items-center justify-center "
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) 100%)',
          }}>
          <div className=" p-6 rounded-xl  bg-white shadow-lg ">
            <div className='flex justify-center'>
              <TbXboxX className='text-red-600 text-3xl   ' />
              <h2 className="text-lg font-bold mb-4 mx-1">Failed</h2>
            </div>
            <p>An error occured .Try Again</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Contact;
