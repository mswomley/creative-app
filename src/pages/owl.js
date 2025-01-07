import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';


export default function App() {
    const [pupilTop, setPupilTop] = useState("50%");
    const [pupilLeft, setPupilLeft] = useState("50%");
    const [pupilTransform, setPupilTransform] = useState("translate(-50%, -50%)");
  
    function handleMouseMove(event) {
      let x = (event.clientX * 100) / window.innerWidth + "%";
      let y = (event.clientY * 100) / window.innerHeight + "%";
      setPupilLeft(x);
      setPupilTop(y);
      setPupilTransform(`translate(-${x},-${y})`);
    }
    return (
        <div className="container" onMouseMove={(event) => handleMouseMove(event)}>
          <div className="eyes">
            <div className="eye">
              <div
                className="pupil"
                style={{
                  top: pupilTop,
                  left: pupilLeft,
                  transform: pupilTransform
                }}
              ></div>
            </div>
    
            <div className="eye">
              <div
                className="pupil"
                style={{
                  top: pupilTop,
                  left: pupilLeft,
                  transform: pupilTransform
                }}
              ></div>
            </div>
          </div>
        </div>
          
      );
  }