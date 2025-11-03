// components/ServiceCard.js

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, isMobile = false, delay = 0 }) {
  
  // Mobil görünümde daha kompakt stiller
  const classes = isMobile 
    ? "min-w-[280px] flex-shrink-0 snap-center p-8 shadow-xl"
    : "p-10 shadow-xl";

  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className={`bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl cursor-pointer text-center text-white transition-transform ${classes}`}
    >
        <div className="flex justify-center mb-6">
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="p-4 bg-white/20 rounded-full"
            >
                {service.icon}
            </motion.div>
        </div>
        <h3 className={`font-bold mb-3 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>{service.title}</h3>
        <p className={`text-gray-200 mb-6 ${isMobile ? 'text-sm' : 'text-base'}`}>{service.description}</p>
        
        
    </motion.div>
  );
}