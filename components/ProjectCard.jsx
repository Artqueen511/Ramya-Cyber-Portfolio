import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="glass rounded-2xl p-5 border border-cyan-400/20 hover:shadow-neon transition">
      <div className="text-lg font-semibold text-cyan-100">{project.title}</div>
      <p className="text-cyan-200/80 mt-2">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 border border-cyan-400/30 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-4">
        <Link href={`/projects/${project.slug}`} className="text-cyan-300 hover:underline">Read case study →</Link>
      </div>
    </div>
  );
}