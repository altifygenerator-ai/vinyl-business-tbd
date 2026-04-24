"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { siteData } from "@/data/site";

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp}>Request a quote</motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
              Send over what you’re looking for and we’ll follow up with pricing,
              options, and current turnaround times.
            </motion.p>

            <motion.div className="mt-6 space-y-4">
              {siteData.phone && (
                <motion.div variants={fadeUp}>
                  <span className="text-neutral-400">Phone:</span>
                  <div>{siteData.phone}</div>
                </motion.div>
              )}

              <motion.div variants={fadeUp}>
                <span className="text-neutral-400">Email:</span>
                <div>{siteData.email}</div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <span className="text-neutral-400">Location:</span>
                <div>{siteData.location}</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.form
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.input
              variants={fadeUp}
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-white"
            />

            <motion.input
              variants={fadeUp}
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-white"
            />

            <motion.input
              variants={fadeUp}
              type="text"
              placeholder="Company / contractor name"
              className="w-full p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-white"
            />

            <motion.textarea
              variants={fadeUp}
              placeholder="Window types, quantity, sizes, color options, or project details"
              rows={4}
              className="w-full p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-white"
            />

            <motion.button
              variants={fadeUp}
              type="submit"
              className="btn-primary w-full"
            >
              Request Quote
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}