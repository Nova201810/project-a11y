import { headings } from '../../../constants/common';

export default function Streams() {
  const headingId = headings.streams.href;
  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{headings.streams.name}</h2>
      <div className="streams__video">
        <iframe
          width="1030"
          height="610"
          src="https://www.youtube.com/embed/5qRR-5H1XgU"
          title="Ай Вейвей: движение к общечеловеческому"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        >
          <p>Ваш браузер устарел и не поддерживает воспроизведение iframe</p>
        </iframe>
      </div>
    </section>
  );
}