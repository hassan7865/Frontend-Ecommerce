import React, { useState } from 'react'
import styled from 'styled-components'
import Coat from '../Components/Accessories/Coat.png'
import {Link} from 'react-router-dom'
import { Publicreq } from '../Components/url'
import Swal from 'sweetalert2'
import { mobile } from '../Components/responsive'

const Container = styled.div`
display: flex;
background-color: #ebdbe790;
align-items: center;
height: 100vh;
justify-content: center;
padding: 30px;
${mobile({
  padding:"10px",
})}
`
const ImageContainer = styled.div`
flex: 1;
${mobile({
  display:"none"
})}
`
const Image = styled.img`
`
const PageContainer = styled.div`
width: 100%;
height: 100%;
flex: 1;
`
const Page = styled.div`
border: 1px solid black;
border-radius:10px;
box-shadow: 10px 10px lightpink;
height: 70vh;
padding: 20px;
${mobile({
  height:"90vh",
  width:"80vw"
})}
`
const Heading = styled.h1`
${mobile({
  fontSize:"25px"
})}
`
const Input = styled.input`
margin: 10px;
width: 45%;
padding:2px;
${mobile({
  width:"90%"
})}
`
const Policy = styled.p`
margin: 20px 0px 0px 10px;
`
const Button = styled.button`
margin: 20px 0px 0px 10px;
width: 30%;
height:10%;
font-size: 15px;
cursor: pointer;
${mobile({
  height:"5%"
})}
`
const Comp = styled.div`
margin: 20px 0px 0px 10px;
`
const Lin = styled.span`
margin-left: 5px;
color:blue;
`

const Register = () => {
  const [submit,setsubmit]=useState('')
  const [first,setname]=useState('')
  const [last,setlastname]=useState('')
  const [username,setusername] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword]=useState('')
  const [cpassword,setcpassword]=useState('')
  const handleClick = (e)=>{
    e.preventDefault()
    if(cpassword === password){
    const register = async()=>{
      try{
        const res = await Publicreq.post('/auth/register',{
        first:first,
        last:last,
        username:username,
        email:email,
        password:password
        },
        )
        setsubmit(true)
        console.log(res.data)
      }catch(err){
        Swal.fire({
        icon: 'error',
        title: '',
        text: 'Something went wrong!.Try using different username',
        buuton:"Ok"
      })
      }
    }
    register()
  }else{
    Swal.fire({
      icon: 'error',
      title: '',
      text: 'Both Passwords are different',
      buuton:"Ok"
    })
  }
  }
  
  return (
    <Container>
        <ImageContainer>
            <Image src = {Coat}></Image>
        </ImageContainer>
        <PageContainer>
            <Page>
                <Heading>CREATE AN ACCOUNT</Heading>
                <Input placeholder='Name' onChange={(e)=> setname(e.target.value)}></Input>
                <Input placeholder='Lastname'  onChange={(e)=> setlastname(e.target.value)}></Input>
                <Input placeholder='Username'  onChange={(e)=> setusername(e.target.value)}></Input>
                <Input placeholder='Email'  onChange={(e)=> setemail(e.target.value)}></Input>
                <Input placeholder='Password' type="password" onChange={(e)=> setpassword(e.target.value)}></Input>
                <Input placeholder='Confirm Password' type="password" onChange={(e)=> setcpassword(e.target.value)}></Input>
                <Policy>By Creating an Account. I consent to the processing of my personal data in accordance with <b>Privacy Policy</b></Policy>
                <Button onClick={handleClick}>CREATE</Button>
               {submit && <Comp>Account Created Successfully!!<Link to='/login'><Lin>Click Here to Login</Lin></Link></Comp>}
            </Page>
        </PageContainer>
    </Container>
  )
}

export default Register