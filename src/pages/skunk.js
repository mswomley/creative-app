import React from 'react'
import './App.css';
import skunk from './skunk.png'
import flowers from './flowers.png'

const Mouse = () => (
<div className="outer"> 
    <div className="inner"><img className="bg" src={skunk} /></div>
    <div className="inner"><img className="image5" src={flowers} alt="mousey8"/></div>
</div>
)

export default Mouse



      