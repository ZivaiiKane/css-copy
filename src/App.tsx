import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default App;
