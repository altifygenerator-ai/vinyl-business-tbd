"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/hero";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
      
      <div className="absolute inset-0">
        <img
          src={heroData.backgroundImage}
          alt="Vinyl window supply for contractors"
          className="w-full h-full object-cover object-center scale-[1.05]"
        />

        
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      </div>

      
      <motion.div
        className="container relative z-10 pt-20"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUp} className="max-w-2xl text-white">
          {heroData.heading}
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-4 max-w-xl text-neutral-200">
          {heroData.subheading}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            {heroData.ctaPrimary}
          </a>

          <a href="#services" className="btn-secondary">
            {heroData.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}