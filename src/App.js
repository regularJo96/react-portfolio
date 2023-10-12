import logo from './logo.svg';
import './App.css';
import './assets/style-remaster.css';

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

          <div className="me">
          </div>

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
          <div id="Lego">
            <p className='text-center text-border-black'>
              Lego Enthusiast
            </p>
          </div>
          <div id="Reader">
            <p className='text-center text-border-black'>
              Casual Reader
            </p>
          </div>
        </div>

    </div>

    <div className="disclaimer">This site is under construction.</div>
    </div>
  );
}

export default App;
