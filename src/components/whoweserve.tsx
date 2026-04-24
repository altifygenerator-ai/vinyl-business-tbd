"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const served = [
  {
    title: "Contractors",
    description:
      "Reliable window supply for residential and light commercial jobs, with consistent turnaround and straightforward pricing.",
  },
  {
    title: "Builders",
    description:
      "Keep projects moving with dependable supply, flexible options, and support for standard and custom builds.",
  },
  {
    title: "Remodelers",
    description:
      "Ideal for replacement projects and upgrades, with clean options and modern finishes available.",
  },
  {
    title: "Homeowners",
    description:
      "If you’re sourcing your own windows, we can help you choose the right options and connect you with installers if needed.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="section" id="served">
      <div className="container">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp}>
            Who We Work With
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-neutral-300">
            We primarily work with contractors and builders across Northwest Arkansas,
            but we’re always open to helping homeowners find the right solution for their project.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {served.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="card"
            >
              <h3>{item.title}</h3>
              <p className="mt-2 text-neutral-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}