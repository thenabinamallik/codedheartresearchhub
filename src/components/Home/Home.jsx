import React from 'react'
import { ReactComponent as Logo1 } from '../../res/comp1.svg';
import { ReactComponent as Logo2 } from '../../res/comp2.svg';
import { ReactComponent as Logo3 } from '../../res/comp3.svg';
import { ReactComponent as Logo4 } from '../../res/item.svg';
import Header from '../Header/Header'
import './Home.css'
function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
      <div className='left'>
        <h2>Code That Counts, Futures That Flourish</h2>
        <p>Binezers’re passionate about creating innovative software solutions that help businesses thrive in a rapidly evolving digital landscape.</p>
        <button className='getstarted'>Get Started</button>
        <ul>
          <li>
            <div className='imgcontainer'><Logo1 /></div>
            Speed & Security
          </li>
          <li>
            <div className='imgcontainer'><Logo2 /></div>
            Flexibility & Scalability
          </li>
          <li>
            <div className='imgcontainer'><Logo3/></div>
            Better Collaboration
          </li>
        </ul>
      </div>
      <div className='right'>
        <Logo4 width='600' height='600'/>
      </div>
    </div>
    </>
  )
}

export default Home
