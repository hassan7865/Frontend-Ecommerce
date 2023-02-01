import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {categories} from '../Components/Data'
import { mobile } from './responsive'
const Container = styled.div`
flex: 1;
display: flex;
${mobile({
       display:"block"
       })}
`
const Wrapper = styled.div`
position: relative;
padding: 5px;
${mobile({
       height:"25vh"
       })}
`
const Image = styled.img`
height: 100%;
width: 100%;
${mobile({
       height:"100%",
       width:"100%"
       })}
`
const Info = styled.p`
position: absolute;
top: 0;
width: 100%;
height: 100%;
justify-content: center;
display: flex;
align-items: center;
left: 0;
flex-direction: column;
`
const Button = styled.button`

`
const Categories = () => {
  return (
    <Container>
    {categories.map((items)=>
     <Link to={`/products/${items.cat}`}>
    <Wrapper key={items.id}>
     
        <Image src={items.image} ></Image>
            <Info>
            
            <Button>SHOP NOW</Button>

            </Info>
            
            
    </Wrapper>
    </Link>

        )}

    </Container>
  )
}

export default Categories