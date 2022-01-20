import './App.css';
import { Main } from './components/Main';
import { Aboutme } from './components/Aboutme';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';



function App() {


  return (
    <div className="App">
      <Main />
      <Aboutme/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
