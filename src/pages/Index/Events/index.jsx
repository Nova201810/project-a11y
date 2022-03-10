import { headings } from '../../../constants/common';
import Tabs from '../../../components/Tabs';
import TabPanel from '../../../components/TabPanel';

export default function Events() {
  const events = [
    <TabPanel
      key={1}
      id="events-1"
      imgSrc="/events/1.png"
      imgName="Святогор Рихтер в кругу друзей"
      heading="Святослав Рихтер в кругу друзей. Москва — Коктебель"
      date="Выставка до 20 ноября"
      description="Текст о музее"
      link="#"
      linkName="Купить билет"
    />,
    <TabPanel
      key={2}
      id="events-2"
      imgSrc="/events/2.png"
      imgName="Тату"
      heading="Тату"
      date="Выставка до 27 сентября"
      description="Текст о музее"
      link="#"
      linkName="Купить билет"
    />,
    <TabPanel
      key={3}
      id="events-3"
      imgSrc="/events/3.png"
      imgName="От Дюрера до Матисса"
      heading="От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С. Пушкина"
      date="Выставка до 1 ноября"
      description="Текст о музее"
      link="#"
      linkName="Купить билет"
    />,
  ];
  const tabsContent = [
    {
      name: 'all',
      value: 'Все',
      panelContent: events,
    },
    {
      name: 'today',
      value: 'Сегодня',
      panelContent: events.slice(0, -1),
    },
    {
      name: 'tomorrow',
      value: 'Завтра',
      panelContent: events.slice(0, -2),
    },
  ];
  const headingId = headings.events.href;

  return (
    <section aria-labelledby={headingId} className="events">
      <h2 id={headingId}>{headings.events.name}</h2>
      <div className="events__tabs">
        <Tabs content={tabsContent} />
      </div>
    </section>
  );
}
