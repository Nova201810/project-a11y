import cn from 'clsx';

import Facebook from './assets/facebook.svg';
import Telegram from './assets/telegram.svg';
import Mail from './assets/mail.svg';

export default function Footer({ className }) {
  return (
    <footer role="contentinfo" className="footer">
      <div className={cn(className, 'footer__content')}>
        <div className="footer__content_useful-links">
          <div className="internal-links">
            <a href="#" className="internal-links__link">
              Посетителям с ограниченными возможностями
            </a>
            <a href="#" className="internal-links__link">
              Билеты и льготы
            </a>
            <a href="#" className="internal-links__link">
              Противодействие коррупции
            </a>
          </div>
          <div className="external-links">
            <div className="external-links__heading">
              Соц. сети
            </div>
            <div className="external-links__icons">
              <a href="#">
                <span className="visually-hidden">Почта</span>
                <Mail
                  aria-hidden
                  focusable={false}
                  role="img"
                />
              </a>
              <a href="#">
                <span className="visually-hidden">Телеграм</span>
                <Telegram
                  aria-hidden
                  focusable={false}
                  role="img"
                />
              </a>
              <a href="#">
                <span className="visually-hidden">Фейсбук</span>
                <Facebook
                  aria-hidden
                  focusable={false}
                  role="img"
                />
              </a>
            </div>
          </div>
        </div>
        <form className="footer__content_subscription subscription-form" aria-labelledby="subscription-heading" onSubmit={() => {}}>
          <div id="subscription-heading" className="subscription-form__heading">Подписка на новости</div>
          <div className="subscription-form__actions">
            <input
              aria-label="Электронная почта"
              required
              type="email"
              placeholder="E-mail"
              className="subscription-form__actions_email"
            />
            <button type="submit" className="subscription-form__actions_submit">
              Подписаться
            </button>
          </div>
          <label className="subscription-form__actions_agreement">
            <input className="subscription-form__actions_agreement--checkbox" type="checkbox" required />
            <div className="subscription-form__actions_agreement--text">Согласен на обработку персональных данных</div>
          </label>
        </form>
      </div>
    </footer>
  );
}
