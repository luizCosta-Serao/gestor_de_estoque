import React from "react"
import PropTypes from 'prop-types'

export const StockContext = React.createContext({})

export const StockContextProvider = ({ children }) => {
  const [items, setItems] = React.useState(() => {
    const storageItems = localStorage.getItem('stockItems');
    if(!storageItems) return []
    const items = JSON.parse(storageItems)
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt)
      item.updatedAt = new Date(item.updateddAt)
    })
    return items
  })

  const addItem = (item) => {
    setItems((currentState) => {
      const updatedItems = [item, ...currentState]
      localStorage.setItem('stockItems', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const updateItem = (itemId, newAttributes) => {
    setItems((currentState) => {
      const itemIndex = currentState.findIndex((item) => item.id === +itemId)
      const updatedItems = [...currentState]
      Object.assign(
        updatedItems[itemIndex],
        newAttributes,
        { updatedAt: new Date() }
      )
      localStorage.setItem('stockItems', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const getItem = (itemId) => {
    return items.find((item) => item.id === +itemId)
  }

  const deleteItem = (itemId) => {
    setItems((currentState) => {
      const updatedItems = currentState.filter((item) => item.id !== itemId)
      localStorage.setItem('stockItems', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const stock = {
    items,
    addItem,
    getItem,
    deleteItem,
    updateItem
  }

  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}

StockContextProvider.propTypes = {
  children: PropTypes.node
}