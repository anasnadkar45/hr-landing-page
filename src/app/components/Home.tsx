"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import HeroImg from '../public/Hero.png'
import { ModernAnimatedButtonVariant1 } from "./ModernAnimatedButtonVariant1";
import { BorderBeam } from "@/components/ui/border-beam";

export const Home = () => {
    return (
        <div id="home" className='relative min-h-fit py-12 sm:pt-20 w-full overflow-hidden bg-background '>
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
                    backgroundSize: '100% 100%, 30px 30px, 30px 30px'
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
            <motion.div
                initial={{ filter: "blur(12px)", opacity: 0, y: 24 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 1.8,
                    delay: 1,
                }}
                className="text-center mb-12 z-20 space-y-4 relative"
            >
                <ModernAnimatedButtonVariant1 />
                <div className="text-3xl md:text-6xl font-bold mb-4">
                    <h1 className="text-gradient">Transform Your HR</h1>
                    <span>Empower Your People</span>
                </div>
                <p className="text-muted-foreground max-w-[600px] mx-auto">
                    Streamline your HR processes, boost employee engagement, and drive organizational success with our comprehensive HR management platform.
                </p>
            </motion.div>
            <motion.div
                className="w-full object-cover lg:w-full h-full relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image src={HeroImg} alt='HR Dashboard' className='w-full rounded-2xl mx-auto' />
                <BorderBeam size={250} duration={6} delay={5} className="rounded-2xl" />
            </motion.div>
        </div>
    )
}