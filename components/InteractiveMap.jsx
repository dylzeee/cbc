import React from 'react'
import { FaCaravan } from 'react-icons/fa'
import Image from 'next/image'
import styles from '../styles/InteractiveMap.module.css'
import { useState } from 'react'
import BookingModal from './BookingModal'
import BookingForm from './BookingForm'

export default function InteractiveMap() {

  const [showModal, setShowModal] = useState(false)
  const [campSpot, setCampSpot] = useState('');

  const handleShowModal = (e) => {
    e.preventDefault();
    setCampSpot(e.target.id)
    setShowModal(true);
  }
  return (
    <>
      <div id='modalRoots'></div>
      <div className={styles.hotspotSection}>
        <div className={styles.hotspotImage}>
          <a href="#" onClick={handleShowModal} >
            <FaCaravan id="camp1" className={`${styles.icon} ${styles.icon1}`} />
          </a>
          <a href="#" onClick={handleShowModal}>
            <FaCaravan id="camp2" className={`${styles.icon} ${styles.icon2}`} />
          </a>
          <a href="#" onClick={handleShowModal}>
            <FaCaravan id="camp3" className={`${styles.icon} ${styles.icon3}`} />
          </a>
        </div>
        <BookingModal show={showModal} onClose={() => setShowModal(false)}>
          <h3>Book your spot</h3>
          <p>Please provide your contact details and 20% deposit for booking confirmation.</p>
          <BookingForm campSpot={campSpot} />
        </BookingModal>
      </div>
    </>
  )
}
