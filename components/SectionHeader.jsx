export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold neon">{title}</h2>
      {subtitle && <p className="text-cyan-200/80 mt-2">{subtitle}</p>}
    </div>
  );
}