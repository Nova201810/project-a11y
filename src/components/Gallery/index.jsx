import NextImage from 'next/image';
import { useRef, useState, useEffect } from 'react';
import cn from 'clsx';

import Pause from './assets/pause.svg';
import Play from './assets/play.svg';
import ArrowLeft from './assets/arrow-left.svg';
import ArrowRight from './assets/arrow-right.svg';

export default function Gallery({ images , ...props }) {
  const innerIndex = useRef(0);
  const [ariaLive, setAriaLive] = useState('off');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const moveToNextImage = () => {
    const nextIndex = innerIndex.current + 1;
    if (images[nextIndex]) {
      innerIndex.current = nextIndex;
      setCurrentIndex(nextIndex);
    } else {
      innerIndex.current = 0;
      setCurrentIndex(0);
    }
  };

  const moveToPrevImage = () => {
    const prevIndex = innerIndex.current - 1;
    if (images[prevIndex]) {
      innerIndex.current = prevIndex;
      setCurrentIndex(prevIndex);
    } else {
      const lastIndex = images.length - 1;
      innerIndex.current = lastIndex;
      setCurrentIndex(lastIndex);
    }
  };

  const startAnimation = () => {
    const initialTimerId = setInterval(moveToNextImage, 10000);
    setTimerId(initialTimerId);
  };

  useEffect(() => {
    startAnimation();

    return () => {
      if (timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }
    };
  }, []);

  const handlePauseClick = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    } else {
      startAnimation();
    }
  };

  const handleGalleryFocus = () => {
    setAriaLive('polite');
  };

  const handleGalleryBlur = () => {
    setAriaLive('off');
  };

  return (
    <section
      {...props}
      className="gallery"
      role="article"
      aria-roledescription="gallery"
      onFocus={handleGalleryFocus}
      onBlur={handleGalleryBlur}
    >
      <div className="gallery__actions">
        <button
          aria-controls="gallery__content"
          type="button"
          className="gallery__actions_pause"
          onClick={handlePauseClick}
        >
          <span className="visually-hidden">{timerId ? 'Остановить' : 'Запустить'}</span>
          {timerId && <Pause />}
          {!timerId && <Play style={{ padding: '12px' }} />}
        </button>
        <button
          type="button"
          aria-controls="gallery__content"
          className={cn('gallery__actions_move', 'gallery__actions_move-left')}
          onClick={moveToPrevImage}
        >
          <span className="visually-hidden">Предыдущее изображение</span>
          <ArrowLeft />
        </button>
        <button
          type="button"
          aria-controls="gallery__content"
          className={cn('gallery__actions_move', 'gallery__actions_move-right')}
          onClick={moveToNextImage}
        >
          <span className="visually-hidden">Следущее изображение</span>
          <ArrowRight />
        </button>
      </div>
      <div className="gallery__content">
        {images.map(({ src, alt }, index) => (
          <div
            key={src + currentIndex}
            aria-hidden={currentIndex !== index}
            aria-live={ariaLive}
            aria-label={`${alt}. ${index + 1} из ${images.length}`}
            role="article"
            aria-roledescription="slide"
            className={cn('gallery__content_image', { 'gallery__content_image--active': currentIndex === index })}
          >
            {currentIndex === index && (
              <a href="#" className="gallery__content_image--link">
                Билеты онлайн
              </a>
            )}
            <NextImage
              quality={100}
              src={src}
              alt=""
              width={1032}
              height={600}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
