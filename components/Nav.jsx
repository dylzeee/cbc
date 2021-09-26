import React from 'react'
import styles from '../styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav({ styling }) {
  const router = useRouter()
  const style = {
    position: router.pathname === '/' ? 'absolute' : 'relative',
    background: router.pathname === '/' ? 'transparent' : '#046402',
  }
  return (
    <nav style={style} className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <a><Image src='/logo.svg' width={165} height={72} alt='Logo' /></a>
        </Link>
      </div>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <li className={`${styles.menuItem} ${styles.active}`} >
            <Link href='/book'>Book</Link>
          </li>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Contact</li>
          <li className={styles.menuItem}>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
