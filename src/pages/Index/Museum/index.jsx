import { headings } from '../../../constants/common';
import TabPanel from '../../../components/TabPanel';
import Tabs from '../../../components/Tabs';

export default function Museum() {
  const buildings = [
    <TabPanel
      key={1}
      id="museum-1"
      imgSrc="/museum/1.png"
      imgName="МЕМОРИАЛЬНАЯ КВАРТИРА С.Т. РИХТЕРА"
      heading="МЕМОРИАЛЬНАЯ КВАРТИРА С.Т. РИХТЕРА"
      description="ул. Большая Бронная, 2/6, 16 этаж, кв. 58"
      link="#"
      linkName="Подробнее"
    />,
    <TabPanel
      key={2}
      id="museum-2"
      imgSrc="/museum/2.png"
      imgName="ЦЭВ «МУСЕЙОН»"
      heading="ЦЭВ «МУСЕЙОН»"
      description="Колымажный пер., 6/2, 3 (вход с Малого Знаменского переулка)"
      link="#"
      linkName="Подробнее"
    />,
    <TabPanel
      key={3}
      id="museum-3"
      imgSrc="/museum/3.png"
      imgName="УСАДЬБА ЛОПУХИНЫХ"
      heading="УСАДЬБА ЛОПУХИНЫХ"
      description="Малый Знаменский пер., 3/5с4"
      link="#"
      linkName="Подробнее"
    />,
    <TabPanel
      key={4}
      id="museum-4"
      imgSrc="/museum/4.png"
      imgName="УЧЕБНЫЙ МУЗЕЙ"
      heading="УЧЕБНЫЙ МУЗЕЙ"
      description="ул. Чаянова, 15"
      link="#"
      linkName="Подробнее"
    />,
    <TabPanel
      key={5}
      id="museum-5"
      imgSrc="/museum/5.png"
      imgName="ОТДЕЛ ЛИЧНЫХ КОЛЛЕКЦИЙ"
      heading="ОТДЕЛ ЛИЧНЫХ КОЛЛЕКЦИЙ"
      description="ул. Волхонка, 10"
      link="#"
      linkName="Подробнее"
    />,
    <TabPanel
      key={6}
      id="museum-6"
      imgSrc="/museum/6.png"
      imgName="ГАЛЕРЕЯ"
      heading="ГАЛЕРЕЯ"
      description="ул. Волхонка, 14"
      link="#"
      linkName="Подробнее"
    />,
  ];
  const history = (
    <div>
      <div>
        Государственный музей изобразительных искусств имени А.С. Пушкина – одно из крупнейших в России художественных собраний зарубежного искусства с древнейших времен до наших дней.
      </div>
      <p>
        В современной экспозиции представлены обширная учебная коллекция тонированных гипсовых слепков с произведений Античности, Средних веков и эпохи Возрождения, а также собрание подлинных произведений живописи, скульптуры, графики и декоративно-прикладного искусства.
      </p>
      <p>
        В залах первого этажа Главного здания представлены: произведения искусства Древнего Египта, Античности, собрание европейской живописи VIII–XVIII веков; два зала – Итальянский и Греческий дворики – занимают слепки. На втором этаже Главного здания в залах размещены слепки произведений искусства Древней Греции, Рима, Средних веков и Возрождения.
      </p>
      <div>
        В начале 2017 года музей определил новое направление своей деятельности – Пушкинский XXI, – ориентированное на современное российское и западное искусство во всех аспектах – выставочном, образовательном и исследовательском. Таким образом, ГМИИ им. А.С. Пушкина представляет собой открытую, интерактивную сцену, демонстрирующую развитие мировой культуры с древности до наших дней, живое, знакомое с детства пространство для получения знаний и общения.
      </div>
      <a href="#" className="museum__tabs_history-link colorless-link">Читать далее</a>
    </div>
  );
  const tabsContent = [
    {
      name: 'buildings',
      value: 'Здания',
      panelContent: buildings,
    },
    {
      name: 'history',
      value: 'История',
      panelContent: history,
    },
  ];
  const headingId = headings.museum.href;
  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{headings.museum.name}</h2>
      <div className="museum__tabs">
        <Tabs content={tabsContent} />
      </div>
    </section>
  );
}
