import React from 'react'
import SpeakerCard from '../SpeakerCard/SpeakerCard'
import './Keynote.Styles.scss'
import spker from '../../Assets/images/speaker.jpg'

const speakers = [
  {
    id: 1,
    name: 'Dr. N Kumarappan',
    designation: 'Chair, IEEE Madras Section India',
    img: spker
  },
  {
    id: 2,
    name: 'Dr. D. Nirmal',
    designation: 'Exe Com Member, IEEE Madras Section & Professor and Head, Karunya Institute of Technology and Sciences, Coimbatore, India',
    img: spker
  },
  {
    id: 3,
    name: 'Dr. Wang Haoxiang',
    designation: 'Go Perception Laboratory, Cornell University, USA',
    img: spker
  },
  {
    id: 4,
    name: 'Dr. N Kumarappan',
    designation: 'Pulchowk Campus, Institute of Engineering, Tribhuvan University, Nepal',
    img: spker
  },
]

const Keynote = () => {
  return (
    <div className='keynote'>
      <div className='content'>
        <h1 className='heading-secondary'>Keynote Speakers</h1>
        <div className='speakers-container'>
          {
            speakers.map(speaker => <SpeakerCard key={speaker.id} speaker={speaker} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Keynote