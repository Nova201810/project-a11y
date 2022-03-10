import { useRouter } from 'next/router';

import LanguageLink from "./LanguageLink";

const list = [
  {
    language: 'RU',
    label: 'Русский',
    lang: 'ru',
  },
  {
    language: 'EN',
    label: 'English',
    lang: 'en',
  },
];

export default function Languages() {
  const { query } = useRouter();
  const activeLanguage = query.lang && query.lang[0] || list[0].lang;

  return (
    <nav className="languages" aria-label="Выбрать язык">
      {list.map(({ language, label, lang }) => (
        <LanguageLink
          key={language}
          active={lang === activeLanguage}
          language={language}
          label={label}
          href={`/${lang}`}
        />
      ))}
    </nav>
  );
}