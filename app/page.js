"use client";
import { motion } from "framer-motion";
import MatrixBackground from "../components/MatrixBackground";
import GlitchText from "../components/GlitchText";
import SectionHeader from "../components/SectionHeader";
import SkillRing from "../components/SkillRing";
import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";
import ContactForm from "../components/ContactForm";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { posts } from "../data/blog";
import { ctfs } from "../data/ctf";

const specialties = ["Penetration Testing", "Threat Analysis", "SIEM", "SOC Monitoring", "Cloud Security", "Incident Response"];

export default function Home() {
  return (
    <main className="relative">
      <MatrixBackground />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <GlitchText text={profile.name} />
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-cyan-200">{profile.title}</p>
            <p className="mt-2 text-cyan-200/80">{profile.tagline}</p>
            <p className="mt-6 text-sm text-cyan-300/80">
              <span className="opacity-80">Specialties: </span>
              <span className="inline-block animate-pulse">{specialties.join(" • ")}</span>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#projects" className="px-6 py-3 rounded-xl border border-cyan-400/40 hover:shadow-neon">View My Projects</a>
              <a href="#contact" className="px-6 py-3 rounded-xl border border-emerald-400/40 hover:shadow-neon">Get in Touch</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 px-4 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.06),transparent_60%)]">
        <div className="mx-auto max-w-5xl">
          <SectionHeader title="About Me" subtitle="Mission-driven. Ethical. Impact-focused." />
          <div className="grid md:grid-cols-[240px,1fr] gap-6 items-start">
            <div className="glass rounded-2xl p-2 border border-cyan-400/20">
              <div className="aspect-[3/4] rounded-xl bg-[url('/avatar.jpg')] bg-cover bg-center border border-cyan-400/30" style={{boxShadow: "0 0 30px rgba(0,240,255,0.15)"}} aria-label="Profile photo placeholder"></div>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-cyan-100/90">
                I protect data, solve vulnerabilities, and practice ethical hacking to improve system resilience.
                Experienced across SOC operations, incident response, and secure cloud architectures (AWS/Azure).
                Comfortable in both red and blue team roles, with strong programming fundamentals.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {profile.quickStats.map((s, i) => (
                  <div key={i} className="text-center border border-cyan-400/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-200">{s.value}</div>
                    <div className="text-xs text-cyan-200/70">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-cyan-200/80">
                <a href="/resume.pdf" className="underline hover:text-cyan-300">Download Résumé (PDF)</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Certifications & Credentials" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.certifications.map((c, i) => (
              <div key={i} className="glass rounded-2xl p-5 hover:shadow-neon transition border border-cyan-400/20">
                <div className="text-xl font-semibold">{c.code}</div>
                <div className="text-cyan-200/90">{c.name}</div>
                <div className="text-xs text-cyan-200/60 mt-1">{c.date} • {c.status}</div>
                <p className="mt-3 text-sm text-cyan-200/80">Hover for details on coverage areas (e.g., blue team, incident handling, IAM, fundamentals).</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-4 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,159,0.06),transparent_55%)]">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Skills & Tools" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-cyan-100 mb-3">Offensive Security</h3>
              <div className="flex flex-wrap gap-2">{profile.skills.offensive.map(s => <span key={s} className="px-2 py-1 border border-cyan-400/30 rounded-full text-sm">{s}</span>)}</div>
              <h3 className="font-semibold text-cyan-100 mt-6 mb-3">Defensive Security</h3>
              <div className="flex flex-wrap gap-2">{profile.skills.defensive.map(s => <span key={s} className="px-2 py-1 border border-cyan-400/30 rounded-full text-sm">{s}</span>)}</div>
              <h3 className="font-semibold text-cyan-100 mt-6 mb-3">Cloud Security</h3>
              <div className="flex flex-wrap gap-2">{profile.skills.cloud.map(s => <span key={s} className="px-2 py-1 border border-cyan-400/30 rounded-full text-sm">{s}</span>)}</div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-cyan-100 mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">{profile.skills.tools.map(s => <span key={s} className="px-2 py-1 border border-cyan-400/30 rounded-full text-sm">{s}</span>)}</div>
              <h3 className="font-semibold text-cyan-100 mt-6 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">{profile.skills.languages.map(s => <span key={s} className="px-2 py-1 border border-cyan-400/30 rounded-full text-sm">{s}</span>)}</div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <SkillRing label="Offense" value={85} />
                <SkillRing label="Defense" value={90} />
                <SkillRing label="Cloud" value={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Cybersecurity Projects / Case Studies" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-20 px-4 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.06),transparent_65%)]">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Blog / Knowledge Base" />
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map(post => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="glass rounded-2xl p-5 block hover:shadow-neon transition">
                <div className="text-xl font-semibold">{post.title}</div>
                <div className="text-xs text-cyan-200/60">{post.date}</div>
                <p className="mt-3 text-cyan-200/90">{post.excerpt}</p>
              </a>
            ))}
          </div>
          <div className="text-sm text-cyan-200/70 mt-4">More on Medium/Dev.to soon.</div>
        </div>
      </section>

      {/* CTF */}
      <section id="ctf" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Capture the Flag (CTF) & Challenges" />
          <div className="grid md:grid-cols-3 gap-6">
            {ctfs.map((c, i) => (
              <div key={i} className="glass rounded-2xl p-5 border border-cyan-400/20">
                <div className="text-lg font-semibold">{c.platform}</div>
                <div className="text-xs text-cyan-200/60">Progress: {c.progress}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.badges.map(b => <span key={b} className="border border-cyan-400/30 text-xs px-2 py-1 rounded-full">{b}</span>)}
                </div>
                <ul className="mt-3 list-disc ml-5 text-cyan-200/90">
                  {c.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS Placeholder */}
      <section className="py-16 px-4 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,159,0.06),transparent_60%)]">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader title="Testimonials" subtitle="Endorsements from mentors & colleagues" />
          <p className="text-cyan-200/80">Add quotes here when available. Placeholder to maintain layout.</p>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section id="timeline" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Experience & Education Timeline" />
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
              <Timeline items={profile.experience} />
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Education & Training</h3>
              <ul className="space-y-6">
                {profile.education.map((e, i) => (
                  <li key={i} className="border border-cyan-400/20 p-4 rounded-xl">
                    <div className="font-semibold text-cyan-100">{e.degree}</div>
                    <div className="text-sm text-cyan-200/80">{e.school} — {e.date}</div>
                    {e.notes?.length ? <ul className="mt-2 list-disc ml-5 text-cyan-200/90">{e.notes.map((n, j) => <li key={j}>{n}</li>)}</ul> : null}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold">Extra Training & Fellowships</h4>
                <ul className="list-disc ml-5 mt-2 text-cyan-200/90">
                  {profile.training.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold">Competitions</h4>
                <ul className="list-disc ml-5 mt-2 text-cyan-200/90">
                  {profile.competitions.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold">Volunteering & Community</h4>
                <ul className="list-disc ml-5 mt-2 text-cyan-200/90">
                  {profile.volunteering.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.06),transparent_65%)]">
        <div className="mx-auto max-w-4xl">
          <SectionHeader title="Contact" subtitle="Let's secure something together." />
          <ContactForm />
          <div className="mt-6 text-center text-cyan-200/80">
            {profile.pgp ? <a className="underline" href={profile.pgp}>PGP Public Key</a> : <span className="opacity-70">PGP key link can be added in data/profile.js</span>}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-cyan-200/70 border-t border-cyan-400/10">
        <div className="mx-auto max-w-6xl">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}