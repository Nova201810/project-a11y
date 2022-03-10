import NextImage from 'next/image';
import cn from 'clsx';

export default function TabPanel({ id, imgSrc, imgName, heading, date, description, link, linkName }) {
  const headingId = `${id}-heading`;
  const linkId = `${id}-link`;
  return (
    <div className={cn('tab-panel', { 'tab-panel--short': !date })}>
      <NextImage
        quality={100}
        src={imgSrc}
        alt={imgName}
        width={312}
        height={148}
      />
      <h3 className="tab-panel__heading" id={headingId}>{heading}</h3>
      {date && <div className="tab-panel__date">{date}</div>}
      <div className="tab-panel__description">{description}</div>
      <a
        id={linkId}
        aria-labelledby={`${linkId} ${headingId}`}
        href={link}
        className="tab-panel__link colorless-link"
      >
        {linkName}
      </a>
    </div>
  );
}