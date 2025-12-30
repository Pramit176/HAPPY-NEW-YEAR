import React from 'react';
import './App.css';
import Confetti from './Confetti';
import Countdown from './Countdown';
import StarBg from './StarBg';
import SpecialNoteModal from './SpecialNoteModal';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarBg />
        <h1>🎉 Happy New Year, Rupu! 🎉</h1>
        <div className="message-card">
          <p>✨ ei kucchupuchu e dakh ki banacchi</p>
          <p>🌸 but eta theek lagchena edit korbo</p>
          <p>🦋 ki add kora jay bolto mmm?</p>
          <p>💖 bolna tui e bol</p>
        </div>
        <Confetti />
        <Countdown target={new Date(new Date().getFullYear() + 1, 0, 1)} />
        <SpecialNoteModal buttonText={"Click for a Special Note!"}>
          <div style={{fontWeight: 600, fontSize: '1.1em'}}>
            <span style={{fontSize: '2em'}}>💌</span>
            <p>Dear Rupu,</p>
            <p>
              Thank you for bringing so much light, warmth, and happiness into my year.
              Your friendship means the world to me!<br/>
              May this New Year bring you all the joy and love you deserve.
            </p>
            <div style={{margin: '1.1em 0 0 0', fontSize: '0.99em', color: '#890c9c'}}>— Always beside you ❤️</div>
          </div>
        </SpecialNoteModal>
      </header>
    </div>
  );
}

export default App;
