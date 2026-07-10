"use client";

import Navbar from "../../components/header/page";
import Image from 'next/image';

import { motion, useAnimation, useInView } from "framer-motion";


const people = [
    {
        name: "Dr. Situma",
        position: "Chief Excutive Officer",
        image: "/website/ceo2.jpg",
    },

];



const Management = () => {

    return (
        <div>
            <div className=" h-[60vh] font-sans">
                <div className="relative h-[60vh] flex items-center justify-center font-sans overflow-hidden">

                    {/* Background */}
                    <Image
                        src="/logo.png"
                        alt="bg"
                        fill
                        className="object-cover scale-110 blur-sm"
                    />

                    {/* Dark overlay */}
                     

                    {/* Glass Card */}
                    <div className="relative z-10 text-center text-white px-6 py-10 
                     bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Hospital Management</h1>

                        <p className="mt-4 max-w-xl mx-auto text-white/80 text-md">
                            Manage hospital operations, patient flow, and service delivery in an efficient and organized system.
                        </p>
                    </div>
                </div>
                <div>
                    <Navbar />
                </div>



            </div>

            {/* Hospital Management */}


            <div className="py-5 px-6 w-[75%] mx-auto h-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {people.map((person, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            key={index}
                            className="relative h-48 md:h-64 rounded-2xl shadow-md overflow-hidden"
                        >
                            <Image
                                src={person.image}
                                alt={person.name}
                                width={400}
                                height={400}
                                className="object-fill"
                            />

                            <div className="absolute bottom-0 left-0 w-full text-white p-4 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-lg md:text-xl font-bold">{person.name}</h3>
                                <p className="text-md font-medium">{person.position}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Management