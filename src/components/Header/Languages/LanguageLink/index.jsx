export default function LanguageLink({ active, language, label, href }) {
  if (active) {
    return (
      <span className="languages__link">
        <span aria-hidden>{language}</span>
        <span className="visually-hidden">{label}</span>
      </span>
    );
  }

  return (
    <a className="languages__link" href={href} aria-label={`Выбрать ${label}`}>{language}</a>
  );
}
