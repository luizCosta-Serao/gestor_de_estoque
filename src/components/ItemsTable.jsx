import React from 'react'
import { Link } from 'react-router-dom'
import { StockContext } from '../context/StockContext'
import DeleteButton from './DeleteButton'
import styles from './ItemsTable.module.css'

const ItemsTable = () => {
  const { items } = React.useContext(StockContext)

  return (
    <table className={styles.itemsTable}>
      <thead className={styles.tableHead}>
        <th>ID</th>
        <th>Nome</th>
        <th>Em Estoque</th>
        <th>Categoria</th>
        <th>Ações</th>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.category}</td>
            <td className={styles.acoes}>
              <Link className={styles.ver} to={`/items/${item.id}`}>
                Ver
              </Link>
              <Link className={styles.atualizar} to={`/items/${item.id}/update`}>
                Atualizar
              </Link>
              <DeleteButton
                itemName={item.name}
                itemId={item.id}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ItemsTable