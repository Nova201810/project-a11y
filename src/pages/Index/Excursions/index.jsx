import { headings } from '../../../constants/common';

export default function Excursions() {
  const headingId = headings.excursions.href;
  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{headings.excursions.name}</h2>
      <div className="excursions__content">
        <div>
          С 1 июля вы можете присоединиться к нашим виртуальным мероприятиям — экскурсиям и лекциям для взрослых и детей, оплатив участие на сайте. Встречи будут проходить в прямом эфире на платформе Zoom; предусмотрен формат живого общения с возможностью задавать вопросы экскурсоводу (лектору).
          <div className="excursions__content_link-wrapper">
            <a href="#" className="excursions__content_link">Подробнее</a>.
          </div>
        </div>
        <p>
          Мы будем благодарны за любое{` `}
          <a href="#" className="excursions__content_link">пожертвование</a>. Все поступившие средства будут направлены на организацию онлайн-проектов для наших посетителей.
        </p>
      </div>
    </section>
  );
}