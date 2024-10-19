"use client"

import React, { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Users, Lightbulb, Shield, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(200, 200, 255, 0.5)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
}

const coreValues = [
  {
    title: "Innovation",
    description: "We constantly seek new ways to improve HR processes and outcomes.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our interactions.",
    icon: Shield,
  },
  {
    title: "Empathy",
    description: "We understand the human element in HR and prioritize people's well-being.",
    icon: Users,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every service we provide.",
    icon: Award,
  },
]

export function AboutUs() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <section id="about" className="relative min-h-screen py-16 overflow-hidden ">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Mission & Vision
          </p>
        </motion.div>

        <motion.div
          className="prose prose-lg text-gray-500 mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>
            At HR Solutions, we believe that people are the heart of every successful organization. Our mission is to
            empower businesses to create thriving workplaces where employees can flourish and contribute their best
            work.
          </p>
          <p>
            We envision a world where every company, regardless of size or industry, has access to top-tier HR practices
            and technologies. Our goal is to bridge the gap between traditional HR methods and innovative solutions,
            ensuring that our clients stay ahead in the ever-evolving landscape of workforce management.
          </p>
        </motion.div>

        <motion.div style={{ opacity }} className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col items-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="rounded-full bg-primary p-3 mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}