import { projects } from "../../../data/projects";

export async function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return <div className="p-6">Not found</div>;
  return (
    <div className="mx-auto max-w-4xl p-6 pt-28">
      <h1 className="text-3xl font-bold neon">{project.title}</h1>
      <p className="mt-2 text-cyan-200/80">{project.summary}</p>
      <div className="mt-6 glass p-6 rounded-2xl">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-cyan-200/90 mt-1">{project.details.problem}</p>
        <h2 className="text-xl font-semibold mt-6">Methodology</h2>
        <ul className="list-disc ml-5 mt-2 text-cyan-200/90">
          {project.details.methodology.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
        <h2 className="text-xl font-semibold mt-6">Tools Used</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.details.tools.map(t => <span key={t} className="border border-cyan-400/30 text-xs px-2 py-1 rounded-full">{t}</span>)}
        </div>
        <h2 className="text-xl font-semibold mt-6">Outcome</h2>
        <ul className="list-disc ml-5 mt-2 text-cyan-200/90">
          {project.details.outcome.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
        <div className="mt-6 flex gap-4">
          {project.links.github && <a className="underline" href={project.links.github} target="_blank">GitHub</a>}
          {project.links.report && <a className="underline" href={project.links.report} target="_blank">Case Report (PDF)</a>}
        </div>
      </div>
    </div>
  );
}
