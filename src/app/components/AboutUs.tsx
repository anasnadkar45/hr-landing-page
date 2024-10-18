"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextFade } from "./TextFade";

export const AboutUs = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }, // Smoother transition
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.2, // More spacing between animations for smoothness
            },
        },
    };

    return (
        <motion.section
            id="about"
            className="py-16 bg-card rounded-2xl overflow-hidden bg-gradient-to-b from-[#c891ffd6] from-40% to-[#a448ff]"
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
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                        Our Mission & Vision
                    </p>
                </TextFade>

                <motion.div className="mt-10" variants={fadeInUp}>
                    <motion.div className="prose prose-blue text-gray-700 mx-auto" variants={fadeInUp}>
                        <p>
                            At HR Solutions, we believe that people are the heart of every successful organization. Our mission is to empower businesses to create thriving workplaces where employees can flourish and contribute their best work.
                        </p>
                        <p>
                            We envision a world where every company, regardless of size or industry, has access to top-tier HR practices and technologies. Our goal is to bridge the gap between traditional HR methods and innovative solutions, ensuring that our clients stay ahead in the ever-evolving landscape of workforce management.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Core Values Section */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 text-center"
                            variants={fadeInUp}
                        >
                            <div className="mb-4">
                                <motion.div
                                    className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <value.icon className="text-white w-8 h-8" />
                                </motion.div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                            <p className="text-gray-500 mt-2">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

// Core values data
const coreValues = [
    {
        title: "Innovation",
        description: "We constantly seek new ways to improve HR processes and outcomes.",
        icon: () => <svg /* Add your icon here */></svg>,
    },
    {
        title: "Integrity",
        description: "We uphold the highest ethical standards in all our interactions.",
        icon: () => <svg /* Add your icon here */></svg>,
    },
    {
        title: "Empathy",
        description: "We understand the human element in HR and prioritize people's well-being.",
        icon: () => <svg /* Add your icon here */></svg>,
    },
    {
        title: "Excellence",
        description: "We strive for excellence in every service we provide.",
        icon: () => <svg /* Add your icon here */></svg>,
    },
];
