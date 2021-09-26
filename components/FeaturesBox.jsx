import React from 'react'
import styles from '../styles/FeaturesBox.module.css'

export default function FeaturesBox({ icon, title, desc }) {
  return (
    <div className={styles.featuresBox}>
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.featuresTitle}>{title}</h3>
      <p className={styles.featureDesc}>{desc}</p>
    </div>
  )
}
