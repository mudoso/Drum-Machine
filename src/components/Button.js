import React from 'react'

const Button = ({ note }) => {
    const { keyTrigger, url, id } = note
    const audio = new Audio(url)
    const handleAudio = () => audio.play()

    return (
        <div>
            <button className='drum-pad' id={keyTrigger} onClick={handleAudio}>
                {keyTrigger}
            </button>
            <p>{id}</p>
        </div>
    )
}

export default Button
