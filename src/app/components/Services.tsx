"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Users, BarChart2, Heart, Briefcase, Shield, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
    {
        title: "Talent Acquisition",
        description: "Find and attract top talent with our strategic recruitment services.",
        icon: Users,
        color: "text-blue-500"
    },
    {
        title: "Performance Management",
        description: "Implement effective systems to evaluate and improve employee performance.",
        icon: BarChart2,
        color: "text-green-500"
    },
    {
        title: "Employee Engagement",
        description: "Create a positive work environment that motivates and retains your best employees.",
        icon: Heart,
        color: "text-red-500"
    },
    {
        title: "HR Consulting",
        description: "Get expert advice on HR strategies, policies, and best practices.",
        icon: Briefcase,
        color: "text-purple-500"
    },
    {
        title: "Compliance Management",
        description: "Stay up-to-date with labor laws and regulations to minimize risks.",
        icon: Shield,
        color: "text-yellow-500"
    },
    {
        title: "HR Technology Solutions",
        description: "Streamline your HR processes with cutting-edge software and tools.",
        icon: Zap,
        color: "text-indigo-500"
    }
]

export const Services = () => {
    return (
        <section id="services" className="relative py-16 bg-gradient-to-b from-gray-50 to-gray-100">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to bottom, 
                            hsl(var(--background)), 
                            transparent 10%,
                            transparent 90%,
                            hsl(var(--background))
                        ),
                        linear-gradient(to right, hsl(var(--foreground) / 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, hsl(var(--foreground) / 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '100% 100%, 10px 10px, 10px 10px'
                }}
            />

            {/* Radial gradient overlay for spotlight effect */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: `radial-gradient(circle at center, 
                                 transparent 20%, 
                                 hsl(var(--background)) 100%)`
                }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Comprehensive HR Solutions</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We offer a wide range of services to meet all your HR needs, from recruitment to retirement.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                                    <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${service.color}`}>
                                        <service.icon size={24} />
                                    </div>
                                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <Card className="bg-blue-600 text-white p-8">
                        <CardContent>
                            <h3 className="text-2xl font-bold mb-4">Ready to transform your HR operations?</h3>
                            <p className="text-lg mb-6">Lets discuss how our services can be tailored to your unique needs.</p>
                            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                                Contact Us
                            </button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}