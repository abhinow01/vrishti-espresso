import React, { useEffect } from 'react';

const MusicPlayer = ({ play }) => {
  useEffect(() => {
    const audio = new Audio('/mixkit-light-rain-looping-1249.wav');
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch((error) => {
        console.log('Error playing audio:', error);
      });
    };

    // Attempt to play audio immediately
    if (play) {
      playAudio();
    }

    return () => {
      audio.pause();
    };
  }, [play]);

  return null;
};

export default MusicPlayer;
