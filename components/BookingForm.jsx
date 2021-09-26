import React from 'react'
import Styles from '../styles/Form.module.css'
import { useState } from 'react';

export default function BookingForm(props) {

  const [values, setValues] = useState('');

  const handleChange = () => {
    console.log('changing');
  }
  const handleSubmit = () => {
    console.log('changing');
  }
  console.log(props)
  return (
    <div>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <div className={Styles.grid}>
          <div>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="performers">Last Name</label>
            <input
              type="text"
              id="performers"
              name="performers"
              value={values.performers}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="venue">Camp Spot</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={props.campSpot}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date">Booking Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={values.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="time">Number Of Days</label>
            <input
              type="text"
              id="time"
              name="time"
              value={values.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Booking Notes</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
          ></textarea>
          <input type='submit' value='Book' className='btn' />
        </div>
      </form>
    </div>
  )
}
