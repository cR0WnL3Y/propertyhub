import Login from './Login';
import Register from './Register';
import { useState } from 'react';
import Header from './Header';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const wallpapers = [
    { image: '/wallpaper1.jpg', quote: 'Properties' },
    { image: '/wallpaper2.jpg', quote: 'Dashboard'},
  ];

  const [index, setIndex] = useState(0);
  
  return (
    <>
      <Header />
      <div style={{ padding: '24px', height: '100vh' }}>
        <div style={{
          backgroundImage: `url(${currentWallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          borderRadius: '24px',
          position: 'relative'
        }}>
          <p style={{ 
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            color: 'white'
        }}>{currentQuote}</p>
        </div>
      </div>
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
