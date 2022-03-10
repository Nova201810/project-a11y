import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Header />
        <main id="content" className="container__content">
          <h1 className="visually-hidden">
            Государственный музей изобразительных искусств имени А.С.Пушкина
          </h1>
          {children}
        </main>
      </div>
      <Footer className="container" />
    </>
  );
}