import React from 'react'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.mainWrapper}>
        <div className={styles.heroWrapper}>
          <div className={styles.subtitleBefore}></div>
          <span className={styles.subtitle}>Stay & Relax</span>
          <h1 className={styles.title}>Canberra</h1>
          <h1 className={styles.titleBottom}>Caravan Park</h1>
          <p className={styles.intro}>From $29 / night</p>
          <a href='#' className={styles.mainBtn} style={{ marginTop: '20px' }}>Book Now</a>
        </div>
      </div>
    </div>
  )
}
