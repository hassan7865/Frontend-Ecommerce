import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { mobile } from './responsive';
const Container = styled.div`
height: 50vh;
display: flex;
justify-content: space-between;
padding: 30px 0px 10px 10px ;
${mobile({
      display:"none"
       })}
`
const Left = styled.div`
flex: 1;
`
const Center = styled.div`
flex: 1;
padding: 10px 20px 20px 50px
`
const Right = styled.div`
flex: 1;
`
const Heading = styled.h1`
    
`
const Txt = styled.p`
margin-top: 10px;
font-size: 15px;
`
const Icon = styled.div`
width: 30px;
background-color: #${props=>props.color};
color: whitesmoke;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
height: 30px;
cursor: pointer;
`
const Logo = styled.div`
display: flex;
gap: 10px;
margin-top: 20px;
`
const Heading1 = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItems = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Location =styled.div`
margin: 30px 0px 20px 0px;
display: flex;
`
const Phone = styled.div`
display: flex;
margin-bottom: 20px;
`
const Mail=styled.div`
display: flex;
`
const Info = styled.p`
cursor: pointer;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Heading>RAGS & TAGS</Heading>
                <Txt>ChatGPT, oh ChatGPT
                    With AI so smart
                    But alas, it’s at capacity
                    Leaving us to wait
                    For a chance to chat
                    With its wisdom and wit
                    We long to be part
                    Of its conversation
                    But for now, we sit
                    On the sidelines
                    Patiently waiting
                    For the day
                    When ChatGPT
                    Is ready to play
                    Again.</Txt>
                <Logo>
                <Icon color='3B5999'><FacebookIcon/></Icon>
                <Icon color='E4405F'><InstagramIcon/></Icon>
                <Icon color='55ACEE'><TwitterIcon/></Icon>
                </Logo>
            </Left>
            <Center>
                <Heading1>Use Full Links</Heading1>
                <List>
                <ListItems>Home</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>WishList</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Women Fashion</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Terms</ListItems>
                <ListItems>Foot Wears</ListItems>
                </List>
            </Center>
            <Right>
            <Heading1>Contact</Heading1>
            <Location>
            <LocationOnIcon/>
            <Info>Gulistan-e-Johar B-19 Karachi</Info>
            </Location>
            <Phone>
            <LocalPhoneIcon/>
            <Info>+923218783619</Info>
            </Phone>
            <Mail>
            <EmailIcon/>
            <Info>m.hassansiddiqui9245@gmail.com</Info>
            </Mail>
            <card></card>
            </Right>
        </Container>
    )
}

export default Footer