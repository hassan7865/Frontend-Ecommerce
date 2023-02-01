import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from './responsive';
import { emptycart, logoutuser } from './Redux/Apicalls';
const Container = styled.div`
    height: 60px;
    ${mobile({
       height:"50px"
       })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    ${mobile({
       padding:"10px 5px",
       fontSize:"10px"
       })}
    justify-content: space-between;


`
const Left = styled.div`
   flex:1;
   display: flex;
   align-items: center;
   gap: 5px;
`
const Language = styled.div`
  cursor: pointer;
  ${mobile({
       display:"none",
       })}
`
const Center = styled.div`
 flex: 1;
 text-align: center;
`
const Right = styled.div`
 flex:1;
 display: flex;
 align-items: center;
 justify-content: end;
`
const List = styled.ul`
 gap: 10px;
 display: flex;
 align-items: center;
 ${mobile({
       gap:"5px"
       })}
`
const SubL = styled.li`
cursor: pointer;
color: black;
text-decoration: none;
list-style: none;
`
const Inp = styled.input`
cursor: pointer;
width: 90%;
border: none;
outline: none;
`
const SearchContainer = styled.div`
 border: 1px solid black;
 width: 50%;
 display: flex;
 ${mobile({
       width:"60%"
       })}
`
const Head = styled.h1`
${mobile({
       fontSize:"15px"
       })}
`


const Navbar = () => {
const dispatch = useDispatch()
const quantity = useSelector(state=>state.cart.quantity);
const user = useSelector(state=>state.login.isUser)
const lhandle = ()=>{
  logoutuser(dispatch)
  emptycart(dispatch)
}
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Inp />
            <SearchIcon />
          </SearchContainer>
        </Left>

        <Center><Head>RAGS & TAGS</Head></Center>
        <Right>
          <List>
            {!user?<><Link to='/register' style={{ textDecoration: "none" }}>
              <SubL>REGISTER</SubL>
            </Link><Link to='/login' style={{ textDecoration: "none" }}>
                <SubL>LOGIN</SubL>
              </Link></>:<Link to='/login'><SubL onClick={lhandle}>Logout</SubL></Link>}
            <Link to='/cart'>
            <Badge color="primary" badgeContent={quantity} style={{color:"black"}}>
              <ShoppingCartIcon/>
            </Badge>
            </Link>
          </List>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar