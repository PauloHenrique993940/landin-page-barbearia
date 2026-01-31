
import './App.css'
import Header from './components/shared/Header';
import Hero from './components/shared/Hero';
import Services from './components/shared/Services';
import Sobre from './components/shared/Sobre';
import Team from './components/shared/Team';
import Units from './components/shared/Units';

function App() {


  return (
    <>
      <div>
        <Header />
        <Hero />
        <Sobre />
        <Services />
        <Team />
        <Units />
      </div>
    </>
  )
}

export default App;
