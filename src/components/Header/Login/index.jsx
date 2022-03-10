import { useState } from 'react';

import Modal from '../../Modal';
import User from './assets/user.svg';
import ModalContent from './ModalContent';

export default function Login() {
  const [visible, setVisible] = useState(false);
  const handleButtonClick = () => {
    setVisible(!visible);
  };

  const handleVisibleChange = (state) => {
    setVisible(state);
  };

  return (
    <div className="login">
      <button
        aria-expanded={visible}
        aria-controls="login-modal"
        aria-haspopup="dialog"
        className="login__button"
        type="button"
        onClick={handleButtonClick}
      >
        <span className="visually-hidden">Вход в личный кабинет</span>
        <User />
      </button>
      <Modal aria-label="Вход" id="login-modal" visible={visible} onVisibleChange={handleVisibleChange}>
        <ModalContent onVisibleChange={handleVisibleChange} />
      </Modal>
    </div>
  );
}
