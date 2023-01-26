import Navbar from '../components/Navbar';
import Header from '../components/Head';
import { MainContent } from '../Styles/home';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <MainContent>
        <h1>Mateus Belmonte</h1>
        <h2>A importância de eternizar um momento.</h2>
      </MainContent>
    </>
  )
}

