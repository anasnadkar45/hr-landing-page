"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// HR-specific FAQ data
const faqData = [
  {
    question: "What HR services do you offer?",
    answer:
      "We offer a comprehensive range of HR services, including talent acquisition, onboarding, employee benefits management, performance evaluation, and HR compliance consulting.",
  },
  {
    question: "How can your HR solutions improve our employee experience?",
    answer:
      "Our HR solutions are designed to create a seamless experience for your employees by streamlining onboarding, enhancing employee engagement, and managing benefits effectively to boost morale and retention.",
  },
  {
    question: "Do you offer remote HR support?",
    answer:
      "Yes, we provide remote HR services, including virtual onboarding, employee management, and HR support through digital tools, ensuring your team stays connected and supported from anywhere.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We cater to a wide range of industries, including technology, healthcare, finance, retail, and more. Our team has experience with diverse HR challenges and tailors solutions to fit your industry’s unique needs.",
  },
  {
    question: "How can you help with employee retention?",
    answer:
      "We implement employee engagement strategies, career development programs, and competitive benefits packages to foster a positive work environment, which helps improve employee satisfaction and retention.",
  },
  {
    question: "Do you offer recruitment services?",
    answer:
      "Yes, we offer end-to-end recruitment services, from sourcing and screening candidates to conducting interviews and managing the hiring process, ensuring you find the right talent for your team.",
  },
  {
    question: "How do you ensure compliance with labor laws?",
    answer:
      "Our HR experts stay up-to-date with the latest labor laws and regulations. We ensure that your company remains compliant by implementing proper policies, managing employee records, and providing regular audits.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container mx-auto">
        <motion.div
          initial={{ filter: "blur(12px)", opacity: 0, y: 24 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 1.8,
            delay: 1,
          }}
          className="text-center mb-12 z-20 relative"
        >
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curious about our HR services? Here are answers to some of the most
            common questions we get.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <motion.div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center p-4 cursor-pointer bg-card transition duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="font-semibold">{item.question}</h3>
                <Button size={"icon"} className="size-8 bg-primary border">
                  {openIndex === index ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </Button>
              </motion.div>
              <motion.div
                className="p-4 bg-secondary"
                initial={false}
                animate={{
                  maxHeight: openIndex === index ? "200px" : "0",
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
