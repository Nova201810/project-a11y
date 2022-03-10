import { useRef, useEffect } from 'react';
import NextImage from 'next/image';
import cn from 'clsx';
import FocusTrap from 'focus-trap-react';

export default function Modal({ visible, onVisibleChange, className, children, ...props }) {
  const contentRef = useRef(null);

  useEffect(
    function updateBodyOverflow() {
      document.body.style.setProperty('overflow', visible ? 'hidden' : 'auto');
    },
    [visible],
  );

  useEffect(
    function setupEventListeners() {
      function handleClickOutside({ target }) {
        if (contentRef.current && !contentRef.current.contains(target)) {
          onVisibleChange(false);
        }
      }
      function handleKeyUp({ code }) {
        if (code === 'Escape') {
          onVisibleChange(false);
        }
      }

      document.addEventListener('keyup', handleKeyUp);
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('keyup', handleKeyUp);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [contentRef],
  );

  const handleCloseModal = () => {
    onVisibleChange(false);
  };

  return (
    <div
      {...props}
      role="dialog"
      aria-modal
      className={cn('modal', { 'modal--hidden': !visible }, className)}
      hidden={!visible}
    >
      <div ref={contentRef} className="modal__content">
        <FocusTrap active={visible}>
          <div>
            {children}
            <button className="modal__close" type="button" aria-label="Закрыть" onClick={handleCloseModal}>
              <NextImage
                quality={100}
                src="/modal/close.png"
                alt="Закрыть"
                width={48}
                height={48}
              />
            </button>
          </div>
        </FocusTrap>
      </div>
    </div>
  );
}
