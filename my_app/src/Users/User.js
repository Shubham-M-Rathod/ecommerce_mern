import React from 'react'
import UserList from './UserList'

const User = () => {
  const USERS=[
    {id: 'u1', 
    name:'Pikachu',
    image:'https://i.guim.co.uk/img/media/dd703cd39013271a45bc199fae6aa1ddad72faaf/0_0_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=178a9434c272d5a067353f57a30f58ed', 
    places:3},
    {
      id: 'u2', 
    name:'Pikachu',
    image:'https://i.guim.co.uk/img/media/dd703cd39013271a45bc199fae6aa1ddad72faaf/0_0_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=178a9434c272d5a067353f57a30f58ed', 
    places:3
    }
]
  return (
    <UserList items={USERS}/>
  )
}

export default User