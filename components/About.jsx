import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.about}>
        <div className='uCenterText'>
          <h2 className={styles.headingSecondary}>About Us</h2>
        </div>
        <div className={styles.aboutCols}>
          <div className={styles.aboutColsLeft}>
            <h3>Beautiful Outdoors</h3>
            <p>Caloola farms stunningly beautiful natural beauty is one of the Jewels in the Crown of the Canberra region. Caloola farm has a rich history of helping and supporting members of our community. We strive to help people whilst at the same time supporting the Art, film and music communities. We have a history of supporting students and want this to continue.</p>
            <br />
            <p>
              We also want to help those in need, achieve success with the assistance of the NDIS program.We work hand in hand with our government to bring fruition to spectacular events and festivals at Caloola.Being part of the national horse trail, we also welcome all riders to our land.We recognise the connection that all indigenous community has to all lands in Australia and support them.We are committed to supporting our community and doing our best for Australia..</p>
            <a href="" className="secondary-btn">View Gallery</a>
          </div>
          <div className={styles.aboutColsRight}>
            <div className={styles.imageWrapper}>
              <img src='https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='Image1' className={`${styles.image} ${styles.image1}`} />
              <img src='https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='Image2' className={`${styles.image} ${styles.image2}`} />
              <img src='https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='Image3' className={`${styles.image} ${styles.image3}`} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
