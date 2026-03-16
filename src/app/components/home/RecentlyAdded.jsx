"use client"

import React, { useEffect, useState } from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox';

export default function RecentlyAdded() {
  const [products, setproduct] = useState([]);

  const getProduct = async () =>{
    const response = await fetch('https://dummyjson.com/products/search?q=phone');
    const data = await response.json();
    setproduct(data.products)
  }

  useEffect( () =>{
    getProduct();
  },[]
)


  return (
    <div>
      <div className=''>
        <Container>
          <h1 className='text-center text-3xl font-bold'>
            Recently Added Products
          </h1>
          <div className='grid grid-cols-5 gap-3'>
            {
              products.map((prod)=>{
                return <ProductBox key={prod.id} product={prod}/>
              })
            }
    
          </div>
        </Container>
      </div>

    </div>
  )
}
