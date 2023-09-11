import logo from './logo.svg';
import './App.css';
import './assets/style-remaster.css';

import me from './assets/images/me.png';
import image1 from './assets/images/me-at-desk-1.png';

function App() {
  return (
    <div className="App">
      <div className="disclaimer">CONSTRUCTION</div>
    <div className="center"></div>
    <div id="container-1" className="container-1">
        <div className="name text-border-black">
            <div className="greeting">
                Hi, I'm
            </div>
            Josiah Anderson
        </div>

        <div className='menu font-18'>
        <div id="Software">
          <p className='text-center text-border-black'>
            Software Engineer
          </p>
        </div>
        <div id="Cs">
          <p className='text-center text-border-black'>
            Computer Scientist
          </p>
        </div>
        <div id="Gamer">
          <p className='text-center text-border-black'>
            Pro-Gamer
          </p>
        </div>
        <div id="Reader">
          <p className='text-center text-border-black'>
            Casual Reader
          </p>
        </div>
        <div id="Coffee">
          <p className='text-center text-border-black'>
            Coffee
          </p>
        </div>
        <div id="Tortilla">
          <p className='text-center text-border-black'>
            Tortillas
          </p>
        </div>
        </div>
        <div id="picture-1" className="picture">
            <img id="background" src={me}/>
        </div>
    </div>

    <div className="disclaimer">This site is under construction.</div>
    </div>
  );
}

export default App;
