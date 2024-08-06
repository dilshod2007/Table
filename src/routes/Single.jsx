import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import "../routes/Single.css"

const Single = () => {
  const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
       axios(`https://reqres.in/api/users/${id}`)
       .then(res => setData(res.data.data))
    
    }, [])
   
  return (
    <div className='profile-container'>
      <img src={data.avatar} alt="" />
        <h3>{data.first_name}</h3>
        <h3>{data.last_name}</h3>
        <h3>{data.email}</h3>
    </div>
  )
}

export default Single