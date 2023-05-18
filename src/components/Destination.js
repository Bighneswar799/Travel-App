import React from 'react'
import Mountain1 from '../assets/goa1'
import Mountain2 from '../assets/goa2.jpg'
import Mountain3 from '../assets/manali1.jpg'
import Mountain4 from '../assets/manali2.webp'
import Mountain5 from '../assets/uttarakhand1.jpg'
import Mountain6 from '../assets/uttarakhand2.jpg'
import Mountain7 from '../assets/ladakh1.jpg'
import Mountain8 from '../assets/ladakh2.jpg'
import Mountain9 from '../assets/kashmir1.webp'
import Mountain10 from '../assets/kashmir2.webp'
import './DestinationStyles.css'
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the oppertunity to see a lot, within a time frame</p>
        <DestinationData
            className="first-des"
            heading="Goa"
            text="It is located about 250 miles (400 km) south of 
                Mumbai (Bombay). One of India's smallest states, 
                it is bounded by the states of Maharashtra on the north 
                and Karnataka on the east and south and by the Arabian
                Sea on the west. The capital is Panaji (Panjim),
                on the north-central coast of the mainland district."
            img1={Mountain1}
            img2={Mountain2}
        /> 
        <DestinationData
        className="first-des-reverse"
            heading="Manali"
            text="A gift of the Himalayas to the world,
                Manali is a beautiful township nestled in
                the picturesque Beas River valley. 
                It is a rustic enclave known for 
                its cool climate and snow-capped
                 mountains, offering respite to 
                tourists escaping scorching heat of the plains."
            img1={Mountain3}
            img2={Mountain4}
        /> 
        <DestinationData
        className="first-des"
            heading="Uttarakhand"
            text="Uttarakhand was formed on the 
                9th November 2000 as the 27th State 
                of India, when it was carved out of 
                northern Uttar Pradesh. Located at 
                the foothills of the Himalayan mountain 
                ranges, it is largely a hilly State, 
                having international boundaries with China (Tibet)
                in the north and Nepal in the east."
            img1={Mountain5}
            img2={Mountain6}
        /> 
        <DestinationData
        className="first-des-reverse"
            heading="Leh Ladakh"
            text="Leh Ladakh might be filled with 
                rugged mountains, sheets of snow, and 
                is called the white desert of India; 
                it still is home to a lot of birds.
                You can spot approximately 220+ bird 
                species in Ladakh which includes several migratory
                birds and some rare species as well."
            img1={Mountain7}
            img2={Mountain8}
        /> 
        <DestinationData
        className="first-des"
            heading="Kashmir"
            text="Kashmir is the northernmost geographical 
                region of the Indian subcontinent. Until the 
                mid-19th century, the term Kashmir denoted only
                the Kashmir Valley between
                the Great Himalayas and the Pir Panjal Range."
            img1={Mountain9}
            img2={Mountain10}
        /> 
    </div>
  )
}

export default Destination