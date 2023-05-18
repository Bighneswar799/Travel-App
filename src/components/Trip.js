import React from 'react'
import './TripStyles.css'
import TripData from './TripData'
import Trip1 from '../assets/trip1.jpg'
import Trip2 from '../assets/trip2.jpg'
import Trip3 from '../assets/trip3.jpg'

function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps.</p>
        <div className="tripcard">
            <TripData 
                image = {Trip1}
                heading = "Trip in Goa"
                text = "It is located about 250 miles (400 km) south of Mumbai (Bombay). One of India's smallest states, it is bounded by the states of Maharashtra on the north and Karnataka on the east and south and by the Arabian Sea on the west. The capital is Panaji (Panjim), on the north-central coast of the mainland district."
            />
            <TripData 
                image = {Trip2}
                heading = "Trip in Bangalore"
                text = "Bangalore is a city in the state of Karnataka. It is located at a higher altitude on the Deccan Plateau. It is very popular for a lot of things mainly its parks and gardens spread across the entire city. Through the essay on Bangalore, we will learn more about this beautiful city."
            />
            <TripData 
                image = {Trip3}
                heading = "Trip in Odisha"
                text = "Orissa the tenth largest state in terms of area in the Indian Union is located in the northeastern Indian peninsula. This state is bounded on north by Bihar, on west by Madhya Pradesh, on northeast by West Bengal and on south by Bay of Bengal."
            />
        </div>
    </div>
  )
}

export default Trip