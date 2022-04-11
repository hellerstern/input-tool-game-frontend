import React from 'react';
import ringer from '../../assets/sounds/ringing.mp3';
const Sound = (isAllowed) => {
  if (isAllowed) {
    const audio = new Audio(ringer);
    audio.loop = false;
    audio.play();
  }
}

export default Sound;