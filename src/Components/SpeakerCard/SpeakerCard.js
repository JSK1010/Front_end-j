import React from 'react'
import './Speaker.Styles.scss'

const SpeakerCard = ({speaker}) => {
  return (
    <div className='speaker-card'>
        <div className='img-container'>
            <img src={speaker.img} alt='speaker' />
        </div>
        <h1 className='speaker-name'>{speaker.name}</h1>
        <h3 className='speaker-designation'>{speaker.designation}</h3>
    </div>
  )
}

export default SpeakerCard