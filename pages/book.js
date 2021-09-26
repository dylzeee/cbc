import React, { Component } from 'react'
import Layout from '../components/Layout';
import styles from '../styles/BookingPage.module.css'
import BookingForm from '../components/BookingForm'
import AccomodationOptionsSection from '../components/AccomodationOptions'

export default class BookingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      checkIn: '',
      checkOut: '',
      status: '',
      paid: false,
      campSite: '',
      email: '',
      phone: '',
      showForm: false
    }
  }

  handleClick = () => {
    const currentState = this.state.showForm
    this.setState({ showForm: !currentState })
  }


  render() {
    return (
      <Layout title="Bookings">
        <AccomodationOptionsSection data={bookingData} />
        <button onClick={this.handleClick}>Book now</button>
        <div className={styles.formWrapper} style={{ display: this.state.showForm ? 'block' : 'none' }} >
          <BookingForm />
        </div>
      </Layout>
    )
  }
}

const bookingData = [

  {
    id: 1,
    title: 'Powered Site',
    image: '/hero-image.jpeg',
    button: 'Book Powered'
  },
  {
    id: 2,
    title: 'Camping',
    image: '/hero-image.jpeg',
    button: 'View Campsite'
  },
  {
    id: 3,
    title: 'Huts',
    image: '/hero-image.jpeg',
    button: 'View Huts'
  },

];
