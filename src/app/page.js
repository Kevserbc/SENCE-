// app/page.js (GÜNCELLENMİŞ VERSİYON)

"use client";
import React from "react";
import { Laptop, Smartphone, Brain, Users, Zap, Award, Smile } from "lucide-react";

// Bileşenleri import ediyoruz
import Navbar from "../components/navbar";
import ServiceCard from "../components/servicecard";
import ChatAssistant from "../components/ChatAssistant";
import ProductCard from "../components/urunler";
import { motion } from "framer-motion";

// Statik Veriler (ürünler kısmı, açıklama kısaltmaları ile bırakıldı)
const services = [
  // ... (Hizmetler verisi aynı kaldı)
  {
    title: "Web Geliştirme",
    icon: <Laptop size={40} />,
    description: "Modern, hızlı ve SEO uyumlu web siteleri ve platformlar geliştiriyoruz.",
  },
  {
    title: "Mobil Uygulama",
    icon: <Smartphone size={40} />,
    description: "iOS ve Android için native ve hibrit kullanıcı dostu uygulamalar tasarlıyoruz.",
  },
  {
    title: "Yapay Zeka",
    icon: <Brain size={40} />,
    description: "İş süreçlerinizi otomatikleştiren, verimliliğinizi artıran AI çözümleri.",
  },
  {
    title: "Danışmanlık",
    icon: <Users size={40} />,
    description: "Uzman ekibimizle dijital dönüşüm ve stratejik teknoloji desteği sağlıyoruz.",
  },
];

const products = [
    {
        title: "Portmina",
        image: "/Portmina.png",
        description: "Okul düzenleme sistemi.",
        link: "https://apps.apple.com/lt/app/portmina/id6740074509",
    },
    {
        title: "PortAkıl",
        image: "/Portakil.png",
        description: "Okul servislerinin anlık konum takibini yaparak servis-veli arasında güvenli iletişim kurulmasını sağlayan mobil çözümdür. Öğrenci güvenliğini artırır, veli endişesini azaltır ve okul-servis koordinasyonunu dijitalleştirir.",
        features: [
            "Servisin anlık konum takibi.",
            "Ev-okul arası biniş ve düşüşlerin online takibi.",
            "Servis öğrenciye yaklaşınca otomatik veli bildirimleri.",
            "Veli uygulama üzerinden mazeret (servis kullanmama) bildirimi.",
            "Şoför veya Hostes ile mesaj/telefon iletişimi.",
        ],
        link: "https://apps.apple.com/lt/app/portak%C4%B1l/id1662108763",
    },
];


export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
        
      {/* 1. Navbar Bileşeni */}
      <Navbar /> 

      {/* 2. Hero Section - ARKA PLAN GÜNCELLENDİ */}
      <section 
        id="hero" 
        className="h-screen pt-24 flex flex-col justify-center 
                   bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                   text-white text-center relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
            {/* ... (Hero içeriği aynı kaldı) */}
            <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
            >
            Geleceği Yazılım ile Şekillendiriyoruz
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
            >
            Modern yazılım çözümleriyle işinizi dijital dünyada bir adım öne taşıyor, sürdürülebilir başarınızı destekliyoruz.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex justify-center"
            >
                <button
                    onClick={() => {
                        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="relative bg-white text-indigo-700 font-bold px-8 py-4 rounded-full shadow-2xl text-lg
                    transition-transform hover:scale-105 hover:bg-yellow-400 hover:text-gray-900"
                >
                    Hemen Keşfet
                </button>
            </motion.div>
        </div>

        {/* Cihaz Görselleri (Eski haline döndürüldü) */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-12 bottom-10 hidden md:block"
        >
          <div className="w-[420px] h-[260px] bg-gray-800 rounded-2xl -rotate-6 shadow-2xl relative">
            <div className="absolute inset-4 rounded-xl bg-white/40" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-12 top-20 hidden md:block"
        >
          <div className="w-48 h-96 bg-gray-800 rounded-3xl rotate-12 shadow-2xl relative">
            <div className="absolute inset-3 rounded-xl bg-white/20" />
          </div>
        </motion.div>

      </section>
      {/* 3. Services Section */}
      <section id="services" className="pt-24 pb-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-indigo-600">Hizmetlerimiz</h2>

        {/* Desktop: Grid görünüm */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} delay={i * 0.15} />
          ))}
        </div>

        {/* Mobile: Yatay kaydırmalı */}
        <div className="md:hidden flex overflow-x-auto gap-6 py-4 pb-8 snap-x snap-mandatory scroll-p-6">
            {services.map((service, i) => (
                <ServiceCard key={i} service={service} isMobile={true} />
            ))}
        </div>
      </section>

      {/* 4. Products Section */}
      <section id="products" className="py-25 px-6 max-w-6xl mx-auto bg-gray-100 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">Ürünlerimiz</h2>
        <div className="grid md:grid-cols-2 gap-10">
            {products.map((product, i) => (
                <ProductCard key={i} product={product} />
            ))}
        </div>
      </section>

      {/* 5. Hakkımızda Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        {/* ... (Hakkımızda içeriği) */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left">
                <h2 className="text-4xl font-bold mb-6 text-indigo-600">Hakkımızda</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Kurumumuz, eğitim ve teknoloji alanlarında yenilikçi çözümler sunmaktadır. Okul yönetim sistemleri ve servis takibi uygulamaları ile öğrenci ve veli iletişimini kolaylaştırıyor, kurumların dijital dönüşümünü destekliyoruz.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Bilişim çözümlerimiz ile yazılım geliştirme, veri analizi ve sistem entegrasyonu hizmetleri sunuyor, müşterilerimizin rekabet gücünü ve verimliliğini artırıyoruz. Müşteri odaklı yaklaşımla geleceğin teknolojilerini bugünden hayata geçiriyoruz.
                </p>
            </div>
            <motion.div 
                className="md:w-1/2 shadow-2xl rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <img 
                    src="/hakkimizda.png" 
                    alt="Sence Yazılım Ekibi" 
                    className="w-full h-auto object-cover"
                />
            </motion.div>
        </div>
      </section>

      {/* 6. Contact Section - ARKA PLAN GÜNCELLENDİ 
      <section 
        id="contact" 
        className="py-20 
                   bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                   text-white text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-4">Projenizi Konuşalım</h2>
        <p className="mb-8 text-xl">Bizimle iletişime geçin ve dijital dönüşüm yolculuğunuza hemen başlayın.</p>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Adınız Soyadınız"
            className="p-3 rounded-lg border border-white/50 bg-white/10 placeholder-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-posta Adresiniz"
            className="p-3 rounded-lg border border-white/50 bg-white/10 placeholder-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <textarea
            placeholder="Proje veya Mesajınız"
            rows="5"
            className="p-3 rounded-lg border border-white/50 bg-white/10 placeholder-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          ></textarea>
          <button className="relative bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg text-lg
            transition-transform hover:scale-105 hover:bg-white">
            Mesajı Gönder
          </button>
        </form>
      </section>
*/}
      {/* 7. Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
    
    {/* Hakkımızda */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">Hakkımızda</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Sence Yazılım, yenilikçi dijital çözümler sunan bir teknoloji şirketidir. 
        Modern web tasarımı, yazılım geliştirme ve kullanıcı odaklı ürünlerle 
        işletmelere dijital dönüşüm yolculuklarında rehberlik eder.
      </p>
    </div>

    {/* Hizmetler */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">Hizmetlerimiz</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>🔹 Web Tasarım ve Geliştirme</li>
        <li>🔹 Mobil Uygulama Çözümleri</li>
        <li>🔹 UI / UX Tasarımı</li>
        <li>🔹 Yazılım Danışmanlığı</li>
      </ul>
    </div>

    {/* İletişim */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">İletişim</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        📍 YENİBOSNA MERKEZ MAH. KAVAK SK. NO:25-27A/17  
        BAHÇELİEVLER - İSTANBUL
      </p>
      <p className="text-gray-400 text-sm mt-2">📞 +90 555 123 45 67</p>
      <p className="text-gray-400 text-sm">✉️ info@senceyazilim.com</p>
    </div>
  </div>

  {/* Alt Telif Hakkı Kısmı */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Sence Yazılım | Tüm Hakları Saklıdır
  </div>
</footer>

    
          </div>
  );
}

