"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/nav";
import { siteData } from "@/data/site";
import { FaFacebookF } from "react-icons/fa";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1f5fb8]/95 backdrop-blur border-b border-[#2a4d3f]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[80px]">

        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl font-semibold">
          {siteData.name}
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-neutral-300 hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Facebook (only show if exists) */}
          {siteData.socials.facebook && (
            <a
              href={siteData.socials.facebook}
              target="_blank"
              className="text-neutral-300 hover:text-[#1877F2] transition"
            >
              <FaFacebookF size={16} />
            </a>
          )}

          {/* Phone (only if exists) */}
          {siteData.phone && (
            <a
              href={`tel:${siteData.phone.replace(/\D/g, "")}`}
              className="hidden md:block text-sm text-neutral-300 hover:text-white"
            >
              {siteData.phone}
            </a>
          )}

          {/* CTA */}
          <a href="#contact" className="btn-primary text-sm">
            Request Quote
          </a>

        </div>
      </div>
    </motion.header>
  );
}