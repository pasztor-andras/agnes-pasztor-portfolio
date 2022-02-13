import './App.css';
import { Main } from './components/Main';
import { Aboutme } from './components/Aboutme';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Publications } from './components/Publications';
import { Lorem } from './components/Lorem'




function App() {

  const gitUrl = "https://github.com/agnesapasztor"
  const linkedinUrl = "https://www.linkedin.com/in/agnespasztor/"

  return (
    <div className="App">
      <Main gitUrl={gitUrl}/>
      <Aboutme/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Publications/>
      <Footer gitUrl={gitUrl} linkedinUrl={linkedinUrl}/>
      <Lorem/>
    </div>
  );
}

export default App;
