import PropTypes from 'prop-types'
import React from 'react'
import { StockContext } from '../context/StockContext'
import { useNavigate } from 'react-router-dom'
import styles from './DeleteButton.module.css'

const DeleteButton = ({ itemName, itemId }) => {
  const { deleteItem } = React.useContext(StockContext)
  const navigate = useNavigate()

  function handleDelete() {
    if(confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      deleteItem(itemId)
      navigate('/items')
    }
  }

  return (
    <button
      className={styles.btnDelete}
      onClick={handleDelete}
    >
      Excluir
    </button>
  )
}

export default DeleteButton

DeleteButton.propTypes = {
  itemName: PropTypes.string,
  itemId: PropTypes.number
}