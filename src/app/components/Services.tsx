"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Heart, Users } from 'lucide-react';
import { TextFade } from './TextFade';

export const Services = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }, // Smoother transition
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    return (
        <motion.section
            id="services"
            className="py-16 rounded-2xl bg-gradient-to-b from-[#ffc491d6] from-40% to-[#ffa353]"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TextFade
                    direction="down"
                    className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
                >
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
                    <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                        Comprehensive HR Solutions
                    </h1>
                    <p className="mt-4 text-center max-w-2xl text-xl text-gray-700 mx-auto">
                        We offer a wide range of services to meet all your HR needs, from recruitment to retirement.
                    </p>
                </TextFade>
                <div className="mt-10">
                    <motion.div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3" variants={staggerChildren}>
                        {[
                            {
                                title: "Talent Acquisition",
                                description: "Find and attract top talent with our strategic recruitment services.",
                                icon: <Users className="h-12 w-12 text-blue-600" />
                            },
                            {
                                title: "Performance Management",
                                description: "Implement effective systems to evaluate and improve employee performance.",
                                icon: <Briefcase className="h-12 w-12 text-blue-600" />
                            },
                            {
                                title: "Employee Engagement",
                                description: "Create a positive work environment that motivates and retains your best employees.",
                                icon: <Heart className="h-12 w-12 text-blue-600" />
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-lg rounded-lg px-5 py-6 sm:px-6"
                                variants={fadeInUp}
                            >
                                <div className="text-center">
                                    {service.icon}
                                    <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                                    <p className="mt-2 text-base text-gray-500">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
