import React from 'react'
import UserItem from './UserItem'
import './UserList.css'
import Row from 'react-bootstrap/Row';

const UserList = props => {
  if(props.items.length===0)
  return (
    <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">No User Found</h1>
		</div>
	
		</div>
		</div>
		</div>
	</div>
    </section>
  )

  return (
    <Row xs={1} md={2} className="g-4">
        {props.items.map(user=>(
            <UserItem 
            key={user.id} 
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}/>
        ))}
    </Row>
  )
}

export default UserList