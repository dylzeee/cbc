import React from 'react'
import styles from '../styles/ActivitiesBox.module.css'
import Image from 'next/image'

export default function ActivitiesBox({ image, alt, title, description, caption }) {
  return (
    <div className={styles.boxRow}>
      <div className={styles.box}>
        <figure className={styles.boxShape}>
          <img src={image} className={styles.boxImg} alt={alt} />
          <figcaption className={styles.caption}>{caption}</figcaption>
        </figure>
        <div className={styles.text}>
          <h3 className={styles.heading}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
