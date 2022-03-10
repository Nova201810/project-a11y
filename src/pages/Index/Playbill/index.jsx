import { headings } from '../../../constants/common';
import Gallery from "../../../components/Gallery";

export default function PlayBill() {
  const images = [
    { src: '/gallery/1.png', alt: 'Выставка От Дюрера до Матисса. С 10 июля по 1 ноября' },
    { src: '/gallery/2.jpeg', alt: 'Выставка к трёхсотпятидесятилетию Петра первого. С 16 февраля' },
    { src: '/gallery/3.jpeg', alt: 'Интерактивная программа Капитанская дочка, для тех кто не читал. С 4 марта' },
  ];
  const anchorId = headings.playbill.href;
  const headingId = `${anchorId}--hidden`;
  return (
    <div>
      <h2 id={headingId} className="visually-hidden">{headings.playbill.name}</h2>
      <Gallery images={images} id={anchorId} aria-labelledby={headingId} />
      <div className="playbill__links">
        <a href="#" className="playbill__links_link">Купить билет</a>
        <a href="#" className="playbill__links_link">Стать другом</a>
        <a href="#" className="playbill__links_link">Онлайн-магазин</a>
      </div>
    </div>
  );
}
