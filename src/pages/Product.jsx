
import React from 'react'

import { useParams } from 'react-router-dom'

const Product = () => {

  const {id} = useParams()

console.log(id)
  return (
    <div className='container'>
        <h1>{id}</h1>

        salam
    </div>
  )
}


export {Product}