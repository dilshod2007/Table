import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import "../routes/Homes.css"
import { Link } from 'react-router-dom'

const Homes = () => {
   const [data, setData] = useState([])

   useEffect(() => {
    axios("https://reqres.in/api/users")
    .then(res => setData(res.data.data))
    // console.log(data)
   }, [])
  return (
    <div className='home'>
    <table className='table'>
      <thead>
        <tr className='table-header'>
          <th>ID</th>
          <th>Avatar</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr className='table-row' key={item.id}>
            <td>
              <Link className='avatar' to={`/single/${item.id}`}>
                {item.id}
              </Link>
            </td>
            <td>
              <img src={item.avatar} alt="Avatar" />
            </td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  


  
   
  )
}

export default Homes