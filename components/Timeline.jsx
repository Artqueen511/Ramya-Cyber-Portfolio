export default function Timeline({ items = [] }) {
  return (
    <ol className="relative border-l border-cyan-400/30 pl-6">
      {items.map((item, idx) => (
        <li key={idx} className="mb-8">
          <div className="absolute -left-1.5 w-3 h-3 bg-cyan-400 rounded-full shadow-neon"></div>
          <h4 className="text-cyan-100 font-semibold">{item.role} — <span className="text-cyan-300">{item.org}</span></h4>
          <div className="text-xs text-cyan-200/60">{item.date}</div>
          <ul className="list-disc ml-5 mt-2 text-cyan-200/90">
            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}