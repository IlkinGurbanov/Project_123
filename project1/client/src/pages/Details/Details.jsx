import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import './Details.css'

function Details() {
    const [data,setdata] = useState([])
    const {id} = useParams()
    axios.get("http://localhost:4000/box")
    .then(res=>{
        setdata(res.data.filter((x)=>x._id === id))
    })
    function deleteitem(id){
        axios.delete(`http://localhost:4000/box/${id}`)
    }


  return (
    <div className="details">
       { data.map((item)=>(
        <div className="cart">
            <img src={item.img} alt="" className="cartimage" />
            <p>{item.title}</p>
            <p>{item.text}</p>
            <button onClick={()=>deleteitem(item._id)} className="delete">Delete</button>
        </div>
        ))
        }
        
    </div>
  )
}

export default Details