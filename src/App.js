
import './scss/App.scss';
import Header from './containers/Header.js';
import Products from './containers/Products.js';
import About from './components/About.js';
import Contacts from './containers/Contacts.js';
import Footer from './containers/Footer.js';
// import ShowModal from './components/ShowModal.js';

function App() {
  return (
    <>
      <Header />
      <Products />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
