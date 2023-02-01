import React, { useState } from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../Components/Redux/Apicalls'
import { Link } from 'react-router-dom'
import { mobile } from '../Components/responsive'
const Container = styled.div`
background-color: rgba(108, 171, 253, 0.185);
padding: 30px;
display: flex;
height: 100vh;
align-items: center;
${mobile({
  padding:"10px",
  height:"100vh",
  justifyContent:"center"
})}
`
const ImageContainer = styled.div`
flex: 1;
height: 80vh;
${mobile({
  display:"none"
})}
`
const Image = styled.img`
height: 80%;
`
const PageContainer = styled.div`
border: 1px solid black; 
box-shadow: 10px 10px lightblue;
border-radius: 10px;
width: 40vw;
padding: 10px;
height: 50vh;
${mobile({
  width:"80%"
})}
`
const Input = styled.input`
width: 90%;
padding-left: 5px;
height: 100%;
margin: 10px 0px 0px 0px;
${mobile({
  fontSize:"15px"
})}
`
const Button = styled.button`
margin-top: 20px;
width: 20%;
font-size: 15px;
padding: 2px;
${mobile({
  width:"30%"
})}
`
const Page = styled.div`
width: 100%;
padding: 10px;
`
const NewAcc = styled.p`
cursor: pointer;
margin-top: 10px;
color: black;
`
const Err = styled.div`
  margin-top: 20px;
 
  color: red;
`
const Heading = styled.h1``
const Login = () => {
  const {error} = useSelector((state)=>state.login)
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const dispatch = useDispatch()
  const handleClick = (e)=>{
    e.preventDefault()
    login(dispatch,{username,password})
  }
  
  return (
    <Container>
        <ImageContainer>
            <Image src="https://clipartix.com/wp-content/uploads/2017/03/Sneaker-free-clipart-2.png"></Image>
        </ImageContainer>
        <PageContainer>
            <Page>
                <Heading>SIGN IN</Heading>
                <Input placeholder='Username' onChange={(e)=>setusername(e.target.value)}></Input>
                <Input type='password' placeholder='Password' onChange={(e)=>setpassword(e.target.value)}></Input>
                <Button onClick={handleClick}>LOGIN</Button>
                {error && <Err>Something Went Wrong!! Provide Correct Credentials</Err>}
                <Link to='/register' style={{textDecoration:'none'}}>
                <NewAcc>CREATE A NEW ACCOUNT</NewAcc>
                </Link>
                
            </Page>
        </PageContainer>
    </Container>
  )
}

export default Login