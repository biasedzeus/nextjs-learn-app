import React from 'react'
import User from '../components/user';

const Users = ({users}) => {
    return (
        <div>
        <h1>List of users</h1>
        {
            users.map(user => {
                 return(<User key ={user.id} user = {user}/>)
            })
        }    
        </div>
    )
}

export default Users;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
  return {
      props:{
          users:data,
      },
  }
}