import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Newsletter from '../Components/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { mobile } from '../Components/responsive'
const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
text-align: center;
${mobile({
  fontSize:"20px"
})}
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`
const TopButton = styled.button`
padding: 10px;
font-size: 15px;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
${mobile({
  width:"40%",
  height: "6vh",
  fontSize:"10px"
})}
`
const Toptext = styled.div`
display: flex;
margin-top: 20px;
gap: 5px;
${mobile({
  display:"none"
})}
`
const Txt = styled.div`
text-decoration: underline;
`
const Info = styled.div`
display: flex;
align-items: center;
border-bottom: 0.5px solid gray;
${mobile({
  margin:"20px 0 0 0"
})}
`
const Summary = styled.div`
flex:1;
border: 1px solid black;
border-radius: 10px;
margin-top: 10px;
padding: 10px;
height: 100%;
${mobile({
  height:"30%",
  width: "80%"
})}
`
const Bottom = styled.div`
display: flex;
${mobile({
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
})}
`
const ImageContainer = styled.div`
flex:1;
height: 50vh;
${mobile({
  height:"20vh",
  flex:"0"
})}
`
const Image = styled.img`
height: 100%;
`
const Details = styled.div`
padding-left: 30px;
flex:1
`
const Price = styled.div`
flex:1;
align-items: center;


`
const Name = styled.div`
${mobile({
  fontSize:"12px"
})}
`
const ID = styled.div`
margin-top: 20px;
${mobile({
    margin:"5px 0 0 0",
  fontSize:"10px"
})}
`
const Colour = styled.div`
width: 30px;
margin-top: 20px;
height: 30px;
background-color: ${props => props.color};
border-radius: 50%;
margin-bottom:20px;
${mobile({
 margin:"5px 0 0 0",
width:"20px",
height:"20px"
})}

`
const Size = styled.div`
margin-top: 20px;
${mobile({
 margin:"5px 0 0 0",
  fontSize:"12px"
})}
`
const Digit = styled.div`
width: 30px;
height: 30px;
justify-content: center;
align-items: center;
display: flex;
border: 1px solid black;
border-radius: 10px;

`
const CartOption = styled.div`
display: flex;
align-items: center;
${mobile({
  display:"none"
})}
`
const Pri = styled.div`
margin-top: 20px;
font-size: 20px;
`
const Heading = styled.h1`
${mobile({
  fontSize:"20px"
})}
`
const STotal = styled.div`
margin-top: 10px;
${mobile({
  fontSize:"12px"
})}
`
const Est = styled.div`
margin-top: 10px;
${mobile({
  fontSize:"12px"
})}
`
const Dis = styled.div`
margin-top: 10px;
${mobile({
  fontSize:"12px"
})}
`
const Total = styled.div`
margin-top: 10px;
${mobile({
  fontSize:"12px"
})}
`
const ListProduct = styled.div`
flex:3
`
const But = styled.button`
margin-top: 10px;
width: 50%;
height: 15%;
background-color: transparent;
border: 1px solid teal;
cursor: pointer;
`
const DetCont = styled.div`
    display: flex;
    flex: 2;
    ${mobile({
  display:"block",
  fontSize:"15px",
  flex:"0"
})}
`
const Countquan = styled.div`
${mobile({
  margin:"5px 0 0 0",
  fontSize:"12px"
})}
`

const Cartpage = () => {
    const Shippingcost = 150
    const Discount = 50
    const cart = useSelector(state => state.cart)
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <Toptext>
                        <Txt>Shopping Bag(2)</Txt>
                        <Txt>Your Wishlist(0)</Txt>
                    </Toptext>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>

                    <ListProduct>
                        {cart.product.map((items) => (
                            <><Info>
                                <ImageContainer>
                                    <Image src={items.img}></Image>
                                </ImageContainer>
                                <DetCont>
                                <Details>
                                    <Name><b>Product:</b>{items.title}</Name>
                                    <ID><b>ID:</b>{items._id}</ID>
                                    <Colour color={items.color}></Colour>
                                    <Countquan>Quantity:<b>{items.quantity}</b></Countquan>
                                    <Size><b>Size:</b>{items.size.value}</Size>
                                </Details>
                                <Price>
                                    <CartOption>
                                        <AddIcon />
                                        <Digit>1</Digit>
                                        <RemoveIcon />
                                    </CartOption>
                                    <Pri><b>RS: </b>{items.price}</Pri>
                                </Price>
                                </DetCont>
                            </Info></>
                        ))}
                    </ListProduct>
                    <Summary>
                        <Heading>ORDER SUMMARY</Heading>
                        <STotal><b>Subtotal: </b>{cart.total}</STotal>
                        <Est><b>Estimated Shipping: </b>{Shippingcost}</Est>
                        <Dis><b>Shipping Discount: </b>-{Discount}</Dis>
                        <Total><b>Total: </b>{cart.total + (Shippingcost - Discount)}</Total>
                        <Link to='/orderdetail'>
                            <But>PROCEED TO PAY</But>
                        </Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Cartpage