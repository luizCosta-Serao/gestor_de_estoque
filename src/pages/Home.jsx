import React from 'react'
import { Link } from 'react-router-dom'
import { StockContext } from '../context/StockContext'
import styles from './Home.module.css'

const Home = () => {
  const { items } = React.useContext(StockContext)

  const diversity = items.length
  const inventoryTotal = items.reduce((accum, item) => {
    return Number(accum) + Number(item.quantity)
  }, 0)
  
  const today = new Date()
  const limitDate = new Date()
  limitDate.setDate(limitDate.getDate() - 10)
  const recentItems = items.filter((item) => {
    return item.createdAt >= limitDate && item.createdAt <= today
  })
  const recentTotal = recentItems.length

  const lowQuantityItems = items.filter((item) => {
    return item.quantity < 10
  })
  const lowQuantityTotal = lowQuantityItems.length

  return (
    <>
      <section className={styles.home}>
        <h1 className={styles.title}>Dashboard</h1>
        
        <div className={styles.info}>
          <div className={styles.infoItem}>
            Diversidade de itens
            <span>{diversity}</span>
          </div>
          <div className={styles.infoItem}>
            Inventário total
            <span>{inventoryTotal}</span>
          </div>
          <div className={styles.infoItem}>
            Itens recentes
            <span>{recentTotal}</span>
          </div>
          <div className={styles.infoItem}>
            Itens acabando
            <span>{lowQuantityTotal}</span>
          </div>
        </div>
        
        <div className={styles.infoDetails}>
          
          <div className={styles.detailsRecents}>
            <table>
              <thead>
                <tr>
                  <th>Itens Recentes</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {recentItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td><Link to={`/items/${item.id}`} className="button is-small">Ver</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className={styles.detailsFinishing}>
            <table>
              <thead>
                <tr>
                  <th>Itens Acabando</th>
                  <th>Qtd.</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {lowQuantityItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td><Link to={`/items/${item.id}`} className="button is-small">Ver</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        
        </div>
      </section>
    </>
  )
}

export default Home