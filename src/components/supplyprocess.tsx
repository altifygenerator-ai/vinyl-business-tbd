"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Send Project Details",
    description:
      "Tell us what window styles, sizes, quantities, colors, or specs you’re looking for.",
  },
  {
    number: "02",
    title: "Get Pricing & Options",
    description:
      "We’ll follow up with available options, pricing, and current turnaround times.",
  },
  {
    number: "03",
    title: "Order & Coordinate",
    description:
      "Once everything looks right, we’ll help coordinate the order and next steps for pickup or delivery.",
  },
];

export default function SupplyProcess() {
  return (
    <section
      className="section bg-[var(--muted)] border-y border-[var(--border)]"
      id="process"
    >
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp}>Simple Supply Process</motion.h2>

          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-neutral-300">
            Built to keep things simple for contractors, builders, and remodelers
            who need clear pricing and reliable turnaround.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="card">
              <div className="text-sm font-semibold text-[var(--accent)]">
                {step.number}
              </div>

              <h3 className="mt-3">{step.title}</h3>

              <p className="mt-2 text-neutral-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}