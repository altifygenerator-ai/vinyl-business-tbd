"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/data/why";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function WhyChooseUs() {
  return (
    <section
      className="section bg-[var(--muted)] border-y border-[var(--border)]"
      id="why"
    >
      <div className="container">
<div className="grid md:grid-cols-2 gap-12 items-center">
  
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="w-full h-[350px] overflow-hidden rounded-lg"
  >
    <img
      src="/images/windows/casement.jpg"
      alt="Vinyl window product"
      className="w-full h-full object-cover"
    />
  </motion.div>

 
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="w-full md:text-right"
  >
    <motion.h2 variants={fadeUp}>Why Contractors Choose Us</motion.h2>

    <motion.p
      variants={fadeUp}
      className="mt-4 max-w-md md:ml-auto text-neutral-300"
    >
      We focus on supplying quality vinyl windows with fast turnaround,
      consistent availability, and straightforward pricing contractors can rely
      on.
    </motion.p>

    <motion.div className="mt-6 space-y-4 max-w-md md:ml-auto">
      {whyChooseUs.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="flex items-start gap-3 md:justify-end"
        >
          <span className="text-neutral-200 text-left md:text-right">
            {item}
          </span>
          <span className="text-[var(--accent)] mt-1">•</span>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</div>
      </div>
    </section>
  );
}