import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import MusicPlayer from './MusicPlayer';
function App() {
  const [playMusic, setPlayMusic] = useState(true);
  return (
    <>
    <Router>
      <div className='relative'>
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="/2960875-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 min-h-screen bg-black bg-opacity-50">
          <MusicPlayer play={playMusic} />
          <Header />
          </div>
        </div>
        </Router>
    </>
  )
}

export default App
