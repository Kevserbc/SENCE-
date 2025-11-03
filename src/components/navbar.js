// components/Navbar.js

"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Arama işlemi
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    try {
      const res = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      setSearchResults(data.results);
    } catch (err) {
      console.error("Arama hatası:", err);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: "#hero", label: "Ana Sayfa" },
    { href: "#services", label: "Hizmetler" },
    { href: "#products", label: "Ürünler" },
    { href: "#about", label: "Hakkımızda" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Menüyü kapat
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
            ${scrolled ? 'bg-gray-900 shadow-xl' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto relative p-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 h-16 overflow-visible">
          <img
            src="/SENCE-LOGO.png"
            alt="SENCE Logo"
            className="h-30 w-auto object-contain -mt-2"
          />
        </a>

        {/* Orta: Desktop Linkler */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-10 text-white font-semibold text-2xl">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-yellow-400 transition-colors px-2 py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* 🔹 Şık WhatsApp İletişim Butonu */}
<li>
  <a
    href="https://wa.me/905327346640"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-6 px-5 py-2 rounded-xl border border-yellow-400 text-yellow-400 font-semibold 
               hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 
               shadow-md hover:shadow-yellow-400/40"
  >
    İletişim
  </a>
</li>

          </ul>
        </nav>

        {/* Hamburger Butonu - Sadece Mobil */}
        <button
          className="md:hidden text-white z-20 p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Menü - Açılır Kapanır */}
      <nav
        className={`md:hidden absolute top-0 left-0 w-full bg-gray-900 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col p-8 pt-20 space-y-4 text-white text-xl">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block py-2 hover:text-yellow-400 transition-colors border-b border-gray-700 last:border-b-0"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* 🔹 Mobilde İletişim Butonu */}
          <li className="pt-4">
            <a
              href="https://wa.me/905327346640"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
            >
              İletişim
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
