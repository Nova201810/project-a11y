import { headings } from '../../../constants/common';

export default function Menu() {
  return (
    <nav className="menu">
      {Object.keys(headings).map(heading => (
        <a key={heading} href={`#${headings[heading].href}`} className="menu__item">
          <span className="visually-hidden">Перейти к разделу</span>
          {headings[heading].name}
        </a>
      ))}
    </nav>
  );
}