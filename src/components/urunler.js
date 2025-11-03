// components/ProductCard.js (KÜÇÜLTÜLMÜŞ VERSİYON)

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        
        // Padding (iç boşluk) azaltıldı: p-8 yerine p-6
        className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600  rounded-2xl p-6 shadow-2xl hover:shadow-pink-400/50 transition-shadow cursor-pointer text-white flex flex-col h-full"
    >
        <div className="flex flex-col items-center mb-4">
            {/* Görsel alanı küçültüldü: w-24/h-24 yerine w-20/h-20 */}
            <div className="w-20 h-20 mb-3 rounded-full overflow-hidden border-4 border-white/50 flex items-center justify-center bg-white/20">
                <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-contain p-1"
                />
            </div>
            {/* Başlık boyutu küçültüldü: text-3xl yerine text-2xl */}
            <h3 className="text-2xl font-extrabold text-white text-center">{product.title}</h3> 
        </div>
        
        {/* Açıklama metni boyutu ve boşluğu azaltıldı */}
        <p className="text-gray-200 text-sm text-center mb-4 flex-grow">
            {product.description.length > 200 
                ? product.description.substring(0, 200) + '...' // Metin kısaltması eklendi
                : product.description}
        </p>

        {product.features && (
            // Özellikler listesinin padding'i azaltıldı: p-4 yerine p-3
            <ul className="text-gray-100 text-xs list-none space-y-2 mb-6 p-3 bg-white/10 rounded-lg">
                {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check size={16} className="text-yellow-400 mr-1 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        )}

        {/* Buton padding'i azaltıldı */}
        <a 
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center bg-blue-400 hover:bg-white text-gray-900 font-bold py-2 px-6 rounded-full transition-colors text-center text-sm shadow-lg"
        >
            Detaylı İncele <ArrowRight size={16} className="ml-1" />
        </a>
    </motion.div>
  );
}