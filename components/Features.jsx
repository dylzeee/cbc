import React from 'react';
import { GiForestCamp, GiCampfire, GiCampingTent } from 'react-icons/gi';
import { FaRegCompass } from 'react-icons/fa'
import styles from '../styles/Features.module.css'
import FeaturesBox from './FeaturesBox';
import { IconContext } from "react-icons";

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresRow}>
        <div className={styles.featuresCol}>
          <FeaturesBox
            icon={(<GiForestCamp />)}
            title="You'll love it here"
            desc="It's the best place on earth, all year round"
          />
          <FeaturesBox
            icon={(<GiCampfire />)}
            title="You'll love it here"
            desc="It's the best place on earth, all year round"
          />
          <FeaturesBox
            icon={(<GiCampingTent />)}
            title="You'll love it here"
            desc="It's the best place on earth, all year round"
          />
          <FeaturesBox
            icon={(<FaRegCompass />)}
            title="You'll love it here"
            desc="It's the best place on earth, all year round"
          />
        </div>
      </div>
    </section>
  )
}
