import React from 'react'
import { StockContext } from '../context/StockContext'
import { Link, useParams } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import styles from './ShowItem.module.css'

const ShowItem = () => {
  const { getItem } = React.useContext(StockContext)
  const { id } = useParams()
  
  const item = getItem(id)

  return (
    <section className={styles.showItem}>
      <h2 className={styles.itemName}>{item.name}</h2>
      <Link className={styles.atualizar} to={`/items/${item.id}/update`}>Atualizar</Link>
      <DeleteButton itemName={item.name} itemId={item.id} />
      <div className={styles.info}>
        <span>Categoria: <h2>{item.category}</h2></span>
        <span>Quantidade: <h2>{item.quantity}</h2></span>
        <span>Preço: <h2>R$ {item.price}</h2></span>
      </div>
      <p className={styles.description}>{item.description}</p>
      <div className={styles.itemDate}>
        <p>Cadastrado em: <h2>{item.createdAt.toDateString()}</h2></p>
        <p>Atualizado em: <h2>{item.updatedAt.toDateString()}</h2></p>
      </div>
    </section>
  )
}

export default ShowItem