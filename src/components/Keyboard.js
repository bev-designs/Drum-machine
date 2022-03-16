import React from 'react';
import KeyboardKey from './KeyboardKey';

  
const Keyboard = ({power, play, sounds}) => {
    return (
        <div className="keyboard-wrapper">
           {power
              ? sounds.map((sound) => <KeyboardKey play={play} sound={sound} />)
              : sounds.map((sound) => <KeyboardKey power={power}  sound={{...sound, url: '#'}} />)
           }
        </div>
    )
       
}
export default Keyboard;