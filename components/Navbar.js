import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Navbar = () => {
  return (<nav className={styles.mainnav}>
    <ul>
      <li className={styles.navli}><Link href="/">Home</Link> </li>
      <li className={styles.navli}><Link href="/about">About</Link></li>
      <li className={styles.navli}><Link href="/blog">Blog</Link></li>
      <li className={styles.navli}><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>  )
}

export default Navbar