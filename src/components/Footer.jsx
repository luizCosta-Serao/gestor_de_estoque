import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Gestor de Estoque - <span>@2024</span> Alguns direitos reservados.
      </p>
    </footer>
  )
}

export default Footer