//import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import CreateItem from './CreateItem'
import ShowItem from './ShowItem'
import UpdateItem from './UpdateItem'
import ItemsTable from '../components/ItemsTable'
import styles from './ListItems.module.css'

const ListItems = () => {
  const { pathname } = useLocation()

  return (
    <section className={styles.listItems}>
      <h1 className={styles.title}>Stock Items</h1>
      <nav className={styles.listItemsMenu}>
        <Link
          className={pathname === '/items' ? 'active' : ''}
          to='/'
        >Início</Link>
        <Link
          className={pathname === '/items/new' ? 'active' : ''}
          to='new'
        >Criar Item</Link>
        <Link to='/items'>Items</Link>
      </nav>
      <Routes>
        <Route path='new' element={<CreateItem />}/>
        <Route path=':id' element={<ShowItem />}/>
        <Route path=':id/update' element={<UpdateItem />}/>
      </Routes>
      {pathname === '/items' ? <ItemsTable /> : ''}
    </section>
  )
}

export default ListItems