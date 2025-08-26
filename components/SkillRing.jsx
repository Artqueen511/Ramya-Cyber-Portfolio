import { motion } from "framer-motion";

export default function SkillRing({ label, value = 75 }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg width="128" height="128">
          <circle cx="64" cy="64" r={radius} stroke="#0b223b" strokeWidth="10" fill="none" />
          <motion.circle
            cx="64" cy="64" r={radius}
            stroke="#00f0ff"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            strokeDasharray={circumference}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-cyan-200">{value}%</div>
      </div>
      <span className="mt-2 text-sm text-cyan-100">{label}</span>
    </div>
  );
}