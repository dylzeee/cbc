import React from 'react'
import styles from '../styles/Activities.module.css'
import ActivitiesBox from './ActivitiesBox'

export default function Activities() {
  return (
    <section className={styles.activitiesSection}>
      <div className='uCenterText'>
        <h2 className={styles.headingSecondary}>
          Heaps of fun things to do!
        </h2>
      </div>
      <ActivitiesBox
        image='/hero-image.jpeg'
        alt='River'
        title='Rush River'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt deleniti ex, expedita ut unde quas perspiciatis sequi iusto excepturi soluta obcaecati placeat quo non laboriosam magnam assumenda aut inventore voluptate? Quaerat recusandae cumque ut earum soluta voluptatum consequuntur optio tempore voluptas, illo omnis rem autem fugit cum perspiciatis. Consequuntur.'
      />
      <ActivitiesBox
        image='/hero-image.jpeg'
        alt='River'
        title='Rush River'
        description='Enjoy the serenity of rush river flowing through your veins'
      />
      <ActivitiesBox
        image='/hero-image.jpeg'
        alt='River'
        title='Rush River'
        description='Enjoy the serenity of rush river flowing through your veins'
      />
    </section>
  )
}
