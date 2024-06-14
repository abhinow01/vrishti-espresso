import React, { useEffect ,useRef} from 'react';

const MusicPlayer = ({ play }) => {
    const audioRef = useRef(null);
  useEffect(() => {
    const audio = new Audio('/mixkit-light-rain-looping-1249.wav');
    audio.loop = true;
    audioRef.current = audio;
    const handleUserInteraction = ()=>{
        if(play && audioRef.current){
            audioRef.current.play();
        }
    }
    
    // Attempt to play audio immediately
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      audioRef.current.pause();
    };
  }, [play]);

  return null;
};

export default MusicPlayer;
