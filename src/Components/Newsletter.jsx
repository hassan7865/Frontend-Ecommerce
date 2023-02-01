import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from './responsive';
const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
${mobile({
       height:"30vh"
       })}
`
const Heading = styled.h1`
font-size: 70px;
${mobile({
      fontSize:"30px"
       })}
`
const Info = styled.p`
margin-top: 20px;
font-size: 20px;
${mobile({
       fontSize:"15px"
       })}
`
const Inp = styled.div`
margin-top:20px;
display: flex;
justify-content: flex-end;
width: 50%;
height: 10%;
border: 1px solid black;
${mobile({
      width:"60%"
       })}
`
const Icon = styled.div`
    height: 100%;
    background-color: teal;
    display: flex;
    width: 7%;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: whitesmoke;
    cursor: pointer;
    ${mobile({
      width: "8%",
      padding:"0 5px 0 5px",
       })}
`
const Input = styled.input`
border: none;
width: 100%;
`
const Newsletter = () => {
  return (
    <Container>
        <Heading>Newsletter</Heading>
        <Info>Get timely from your favourite products.</Info>
        <Inp>
            <Input></Input>
            <Icon>
            <SendIcon/>
            </Icon>
        </Inp>
    </Container>
  )
}

export default Newsletter