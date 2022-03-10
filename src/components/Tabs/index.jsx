import { useState, useRef, createRef } from 'react';
import cn from 'clsx';

export default function Tabs({ content }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const refs = useRef(content.map(() => createRef()));
  const lastIndex = content.length - 1;

  const handleTabChange = ({ target: { value } }) => {
    setSelectedTab(+value);
  };

  const handleKeyUp = ({ code }) => {
    if (code === 'ArrowLeft') {
      if (selectedTab === 0) {
        refs.current[lastIndex].current.focus();
        setSelectedTab(lastIndex);
      } else {
        const newSelectedTab = selectedTab - 1;
        refs.current[newSelectedTab].current.focus();
        setSelectedTab(newSelectedTab);
      }
    }

    if (code === 'ArrowRight') {
      if (selectedTab === lastIndex) {
        refs.current[0].current.focus();
        setSelectedTab(0);
      } else {
        const newSelectedTab = selectedTab + 1;
        refs.current[newSelectedTab].current.focus();
        setSelectedTab(newSelectedTab);
      }
    }
  };

  return (
    <div className="tabs">
      <div role="tablist" className="tabs__list">
        {content.map(({ name, value }, index) => (
          <button
            key={name}
            ref={refs.current[index]}
            className={cn('tabs__list_button', { 'tabs__list_button--selected': index === selectedTab })}
            role="tab"
            aria-selected={index === selectedTab}
            aria-controls={`${name}-panel`}
            tabIndex={index === selectedTab ? undefined : -1}
            id={name}
            value={index}
            onKeyUp={handleKeyUp}
            onClick={handleTabChange}
          >
            {value}
          </button>
        ))}
      </div>
      {content.map(({ name, panelContent }, index) => (
        <section
          key={name}
          className={cn('tabs__panel', { 'tabs__panel--hidden': index !== selectedTab })}
          role="tabpanel"
          aria-labelledby={name}
          id={`${name}-panel`}
        >
          {panelContent}
        </section>
      ))}
    </div>
  );
}
