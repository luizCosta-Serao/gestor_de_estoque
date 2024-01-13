import React from 'react'
import ItemForm from '../components/ItemForm'
import { StockContext } from '../context/StockContext'
import { useParams } from 'react-router-dom'

const UpdateItem = () => {
  const { getItem } = React.useContext(StockContext)
  const { id } = useParams()
  const item = getItem(id)

  return (
    <section>
      <h1 style={{fontSize: '1.5rem', fontWeight: '600', textAlign: 'center'}}>Atualizar Item</h1>
      <ItemForm itemToUpdate={item}/>
    </section>
  )
}

export default UpdateItem