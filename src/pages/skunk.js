import { useState, useEffect } from 'react';
import skunkimage from './sk2.png'

const SkunkGame = () => {
  const [skunk, setSkunk] = useState([]);

  const setToRandom = (scale) => ({
    x: Math.random() * scale,
    y: Math.random() * scale,
  });

  const makeSkunk = () => {
    let velocity = setToRandom(10);
    let position = setToRandom(200);
    return { position, velocity, id: Date.now() };
  };

  const updatePositions = () => {
    setSkunk((prevSkunk) =>
      prevSkunk.map((sk) => {
        let newPosition = {
          x: sk.position.x + sk.velocity.x,
          y: sk.position.y + sk.velocity.y,
        };
        let newVelocity = { ...sk.velocity };
  
        const skunkWidth = 200; // Image width
        const skunkHeight = 200; // Image height
  
        const maxX = window.innerWidth - skunkWidth;
        const maxY = window.innerHeight - skunkHeight;
  
        // X-axis boundary check
        if (newPosition.x >= maxX || newPosition.x <= 0) {
          newVelocity.x = -newVelocity.x;
          newPosition.x = Math.max(0, Math.min(newPosition.x, maxX));
        }
  
        // Y-axis boundary check
        if (newPosition.y >= maxY || newPosition.y <= 0) {
          newVelocity.y = -newVelocity.y;
          newPosition.y = Math.max(0, Math.min(newPosition.y, maxY));
        }
  
        return { ...sk, position: newPosition, velocity: newVelocity };
      })
    );
  };
  
  

  useEffect(() => {
    const interval = setInterval(updatePositions, 20);
    return () => clearInterval(interval);
  }, []);

  const addSkunk = () => {
    setSkunk([...skunk, makeSkunk()]);
  };

  return (
    <div>
      <button className='button1' onClick={addSkunk}>Add Skunk</button>
      <div id="game" style={{ position: 'relative', width: '100vw', height: '100vh', overflow:'hidden' }}>
        {skunk.map((skunk) => (
          <img
            key={skunk.id}
            src={skunkimage}
            alt="skunk"
            width={200}
            style={{
              position: 'absolute',
              left: skunk.position.x,
              top: skunk.position.y,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkunkGame;