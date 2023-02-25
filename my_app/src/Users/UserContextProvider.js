import React from 'react'
import { createContext } from 'react'

export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [items, setItems] = React.useState(0);
  const [cart, setCart] = React.useState([]);
  const user = 
  {
    items,
    setItems,
    cart,
    setCart,
  }
  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}


