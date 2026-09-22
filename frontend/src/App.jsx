import Login from './Login';
import Register from './Register';
import { useState } from 'react';
import Header from './Header';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      <Header />
      <div style={{overflow: 'hidden', position: 'relative',height: '100%'}}>
        <div style={{
          display: 'flex',
          width: '200%',
          transform: showRegister ? 'translateX(-50%)' : 'translateX(0)',
          transition: 'transform 0.4s ease'
        }}>
          <div style={{ width: '50%' }}><Login 
            showRegister={showRegister}
            setShowRegister={setShowRegister}
          /></div>
          <div style={{ width: '50%' }}><Register 
            showRegister={showRegister}
            setShowRegister={setShowRegister}
          /></div>
        </div>
      </div>

      
    </>
  )
}

export default App
