"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function WindowTypes() {
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp}>Vinyl Window Options</motion.h2>

          <motion.p variants={fadeUp} className="mt-4 max-w-xl">
            We supply the window styles contractors and builders need most,
            with options for standard projects, custom colors, and modern
            black-on-black finishes.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.a
              key={i}
              href={`/windows/${service.slug}`}
              variants={fadeUp}
              className="card group cursor-pointer block"
            >
              <div className="w-full h-[160px] bg-neutral-900 mb-4 overflow-hidden rounded-md">
                <img
                  src={`/images/windows/${service.slug}.jpg`}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3>{service.title}</h3>

              <p className="mt-2 text-neutral-300">{service.description}</p>

              <div className="mt-4 text-sm text-[var(--accent)]">
                View options →
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}