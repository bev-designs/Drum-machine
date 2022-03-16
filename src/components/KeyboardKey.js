import React from 'react';
   

const KeyboardKey = ({ power, play, sound: {keyTrigger, url, id, keyCode} }) => {

    const handleKeydown = (event) => {
        if (event.keyCode === keyCode) {
            play(keyTrigger, id);
        }

    }

   React.useEffect(() => {
       document.addEventListener("keydown", handleKeydown)

   }, [])

    return ( 
        <button className="drum-pad" id={id} onClick={() => play(keyTrigger, id)}>
            <audio id={keyTrigger} src={url} className="clip" />
            {keyTrigger}
        </button>
    )

}

export default KeyboardKey;