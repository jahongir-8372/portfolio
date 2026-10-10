export default function SectionHeading({ id, title, subtitle }) {
  return (
    <header className="section-heading">
      {subtitle && <p className="section-eyebrow">{subtitle}</p>}
      <h2 id={id}>{title}</h2>
    </header>
  );
}
