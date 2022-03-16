import React from 'react';
import './Controls.css';

const Controls = ({ name, volume, handleVolumeChange, changeSoundGroup, power, handlePower }) => {
    return (
        <div className="controls">

            <button type="button" className="toggleSound" onClick={changeSoundGroup}>Sound Group</button>
            <h4 id="display">{power ? name : ''}</h4>

            <h4 id="volume">Vol -{Math.round(volume * 100)}%</h4>

            <input max="1" min="0" step="0.01" type="range" id="slider" value={volume} onChange={handleVolumeChange}/>

            <button className="powerButton" onClick={handlePower} >{power ? 'OFF' : 'ON' }</button>
        </div>

    )
}
export default Controls;