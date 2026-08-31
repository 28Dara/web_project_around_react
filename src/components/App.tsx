import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';

export default function App(): React.JSX.Element {
  return (
    <div className='page__content'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
