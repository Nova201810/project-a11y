import NextImage from 'next/image';

import Languages from './Languages';
import Login from './Login';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="header" role="banner">
      <a href="#content" className="header__skip-link">Перейти к содержимому</a>
      <div className="header-content">
        <NextImage
          className="header-content__logo"
          quality={100}
          src="/header/logo.png"
          alt=""
          width={200}
          height={42}
        />
        <form role="search" className="header-content__search" onSubmit={() => {}}>
          <input className="header-content__search_input" type="search" aria-label="Поиск по сайту" required />
          <button className="header-content__search_button" type="submit" aria-label="Найти">
            <NextImage
              quality={100}
              src="/header/search.png"
              alt=""
              width={24}
              height={24}
            />
          </button>
        </form>
        <div className="header-content__languages">
          <Languages />
        </div>
        <div className="header-content__login">
          <Login />
        </div>
      </div>
      <div className="header-menu">
        <Menu />
      </div>
    </header>
  );
}
