import React from 'react'
import './style.css'
import Suggestions from './Sugesstions';
const Timeline=()=>  {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline