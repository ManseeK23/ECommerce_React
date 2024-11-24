import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';

import Product from './Product';



const SearchItems = ({cart, setcart}) => {
  const {term} = useParams();
  const [filterData, setfilterData] = useState([])
  useEffect(()=>{
    const filterData=()=>{
      const data = items.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()))
      setfilterData(data)
      
    }
    filterData()
  },[term])
  return (
    <Product cart={cart} setcart={setcart} items={filterData}></Product>
  )
}

export default SearchItems