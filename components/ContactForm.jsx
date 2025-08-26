"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" required placeholder="Your Name" className="bg-transparent border border-cyan-400/30 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-300" />
        <input name="email" required type="email" placeholder="Email" className="bg-transparent border border-cyan-400/30 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-300" />
      </div>
      <input name="subject" placeholder="Subject" className="w-full bg-transparent border border-cyan-400/30 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-300" />
      <textarea name="message" required rows="6" placeholder="Your message" className="w-full bg-transparent border border-cyan-400/30 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-300"></textarea>
      <button className="px-5 py-3 rounded-lg border border-cyan-400/40 hover:shadow-neon">Send Secure Message</button>
      {status && <div className="text-cyan-200/80">{status}</div>}
      <p className="text-xs text-cyan-200/60">Alternatively, email directly: <a className="underline" href="mailto:a.ramya0507@gmail.com">a.ramya0507@gmail.com</a></p>
    </form>
  );
}