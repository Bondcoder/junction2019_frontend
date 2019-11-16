import React from 'react';
import './App.css';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Options from './components/Options';
import Bubu from './img/Bubu.png';
import Logout from './img/logout.png';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={Bubu} className="bubuLogo" />
        <p className="companyName">
          <img src={Logout} className="logoutIcon" />
        </p>
      </header>
      <Options />
    </div >
  );
}

export default App;
