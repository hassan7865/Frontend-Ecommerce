import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import { useLocation } from 'react-router-dom';
import Product from '../Components/Product'
import { mobile } from '../Components/responsive'

const Container =styled.div``
const Title = styled.h1`
padding: 10px;
`
const FilterContainer = styled.div`
display: flex;
padding: 10px;
justify-content: space-between;
`
const Filtertext = styled.p`
${mobile({
  display:"none"
})}
`
const Select = styled.select`
margin-left: 10px;
${mobile({
  height:"20px"
})}
`
const Option = styled.option``
const  Filter = styled.div`
display: flex;

`
const ProductList = () => {

    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const [sort,setsort]=useState()
    const [filters,setfilters]=useState({})

    const handlefilter = (e)=>{
        const value = e.target.value
        setfilters({
            ...filters,
            [e.target.name]:value,
        })
        
    }
  return (
    <Container>
   <Announcement/>
   <Navbar/>
   <Title>{cat}</Title>
   <FilterContainer>
    <Filter>
        <Filtertext>Product List:</Filtertext>
        <Select name="color" onChange={handlefilter}>
            <Option default selected>Color</Option>
            <Option>white</Option>
            <Option>blue</Option>
            <Option>black</Option>
            <Option>brown</Option>
            <Option>yellow</Option>
        </Select>
        <Select name="size" onChange={handlefilter}>
            <Option default selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
        </Select>
    </Filter>
    <Filter>
        <Filtertext>Sort Product:</Filtertext>
        <Select onChange={e=> setsort(e.target.value)}>
            <Option default selected>Sort</Option>
            <Option value="newest">Newest</Option>
            <Option value="Ascending">Price (low)</Option>
            <Option value="Descending">Price (high)</Option>
        </Select>
    </Filter>
   </FilterContainer>
   <Product cat={cat} filters={filters} sort={sort}/>
   <Newsletter/>
   <Footer/>
   </Container>

  )
}

export default ProductList