

import styles from './App.module.css';
import Nav from './layout/Nav';
import Header from './layout/Header';
import ListContainer from './layout/ListContainer';
import Footer from './layout/Footer';
import axios from 'axios';

function App() {

  async function getData() {
    const data = await axios.get('https://api.github.com/repos/facebook/react/issues',);

    console.log({ data });
  }

  getData()

  return (
    <>
      <Nav />
      <Header />
      <ListContainer />
      <Footer />
    </>
  );
}
export default App;
