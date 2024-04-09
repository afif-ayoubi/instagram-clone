import React from 'react'
import SideNav from '../../Components/HomePage/SideNav'
import Timeline from '../../Components/HomePage/Timeline'
import './style.css'
const  Home=()=> {
    return (
        <div className="homepage">
          <div className="homepage__navWraper">
            <SideNav />
          </div>
          <div className="homepage__timeline">
            <Timeline />
          </div>
        </div>
      );
}

export default Home