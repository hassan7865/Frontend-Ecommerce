import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { mobile } from './responsive';
const Container = styled.div`
display: flex;
flex-wrap: wrap;
${mobile({
      display:"block"
       })}
`
const Info = styled.div`
opacity: 0;
position: absolute;
top: 0;
left: 0;
gap: 5px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.2);
`
const Wrapper = styled.div`
margin: 1px;
width: 40vw;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
${mobile({
       height:"30vh",
       width:"100vw"
       })}

flex: 1;
position: relative;
&:hover ${Info}{
    opacity: 1;
}
`
const Image = styled.img`
height:100%;
`

const Icon = styled.div`
border-radius: 100%;
background-color: white;
width: 40px;
height: 40px;
display: flex;

justify-content: center;
align-items: center;
transition: all 0.5s ease;
&:hover{
    transform: scale(1.1);
}
`

const Product = ({cat,filters,sort}) => {
    const [product,setproduct] = useState([])
    const [productfilter,setproductfilter]=useState([])

    useEffect(()=>{
        const getprod = async ()=>{
            try{
                const res = await axios.get(cat ? `https://backend-ecommerce-plum.vercel.app/api/products?category=${cat}`:"https://backend-ecommerce-plum.vercel.app/api/products")
                setproduct(res.data)
            }catch(err){
            }
        }
        getprod()
    },[cat])
    useEffect (()=>{
        cat && setproductfilter (
            product.filter((item)=>Object.entries(filters).every(([key,value])=>
             item[key]?.includes(value)
            ))
        )
    },[product,filters,cat])
    useEffect(()=>{
        if (sort === "newest"){
            setproductfilter((prev)=>
            [...prev].sort((a,b)=>a.createdAt - b.createdAt)
    )}else if(sort === "Ascending"){
        setproductfilter((prev)=>
            [...prev].sort((a,b)=>a.price - b.price)
    )}else{
        setproductfilter((prev)=>
            [...prev].sort((a,b)=>b.price - a.price)
    )}
    },[sort])
  return (
    <Container>
        {cat ? productfilter.map((items)=>
        <Wrapper key={items.id}>
            <Image src={items.img}></Image>
            <Info>
                <Link to={`/product/${items._id}`}>
                <Icon><SearchIcon style={{color:"Black"}}/></Icon>
                </Link>
                <Icon> <FavoriteIcon/></Icon>
                <Icon><ShoppingCartIcon/></Icon>    
            </Info>
        </Wrapper>
        ):product.slice(0,4).map((items)=>
        <Wrapper key={items.id}>
            <Image src={items.img}></Image>
            <Info>
                <Link to='/products/man'>
                <Icon><SearchIcon/></Icon>
                </Link>
                <Icon> <FavoriteIcon/></Icon>
                <Icon><ShoppingCartIcon/></Icon>    
            </Info>
        </Wrapper>)}
    </Container>
  )
}

export default Product