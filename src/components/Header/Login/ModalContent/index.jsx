export default function ModalContent({ onVisibleChange }) {
  const handleSubmitForm = (event) => {
    event.preventDefault();
    onVisibleChange(false);
  };

  return (
    <form className="modal-form" aria-labelledby="form-name" onSubmit={handleSubmitForm}>
      <h2 className="modal-form__header" id="form-name">Вход</h2>
      <span id="login" className="visually-hidden">Логин</span>
      <input
        className="modal-form__input"
        aria-labelledby="login"
        placeholder="Логин"
        required
        type="text"
      />
      <span id="password" className="visually-hidden">Пароль</span>
      <input
        className="modal-form__input"
        aria-labelledby="password"
        placeholder="Пароль"
        required
        type="text"
      />
      <button className="modal-form__submit" type="submit">Вход</button>
    </form>
  );
}
