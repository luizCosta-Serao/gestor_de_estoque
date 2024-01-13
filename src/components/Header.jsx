import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>
        <Link to='/'>REACT STOCK</Link>
      </p>
      <nav>
        <ul className={styles.menuPrincipal}>
          <li><Link to='/'>Início</Link></li>
          <li><Link to='items'>Items</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header