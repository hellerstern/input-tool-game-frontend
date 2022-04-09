import React from 'react';
import ringer from '../../assets/sounds/ringing.mp3';
const Sound = (isAllowed) => {
  if (props.isAllowed) {
    const audio = new Audio(ringer);
    audio.loop = true;
    audio.play();
  }
}

export default Sound;