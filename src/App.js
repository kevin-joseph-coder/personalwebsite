import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
