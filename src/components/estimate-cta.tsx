"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ctaData } from "@/data/cta";

export default function QuoteCTA() {
  return (
    <section className="section bg-[var(--muted)] border-t border-[var(--border)]">
      <div className="container">
        <motion.div
          className="text-left max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp}>
            {ctaData.heading}
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
            {ctaData.text}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Request Quote
            </a>

            <a href="#services" className="btn-secondary">
              View Window Types
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}