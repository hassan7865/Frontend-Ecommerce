import React, { useState } from 'react'
import styled from 'styled-components'
import WalletIcon from '@mui/icons-material/Wallet';
import { userreq } from '../Components/url';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import { emptycart } from '../Components/Redux/Apicalls';
import { mobile } from '../Components/responsive';
const Container = styled.div`
  background-color:#90EE90;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  `
const Wrapper = styled.div`
height: 65%;
background-color:whitesmoke;
width: 50%;
border-radius: 10px;
padding: 20px;
border: 1px solid green;
box-shadow: 10px 10px 10px 10px gray;
${mobile({
  width:"80%",
  height: "50%"
})}
`
const AddDetail = styled.div``
const Select = styled.select`
width: 50%;
padding: 10px;
font-size: 15px;
outline: none;
${mobile({
  width:"100%",
  marigin:"5px 0 0 0" 
})}
`
const Head = styled.h1`
  font-weight:400 ;
  color: grey;
  margin-bottom: 10px;
  ${mobile({
  fontSize:"20px"
})}
`
const Option = styled.option`

`
const Input = styled.input`
width: 50%;
margin-top: 30px;
padding : 10px 0px 20vh 10px;
border:0.4px solid gray;
outline: none;
${mobile({
  width: "100%"
})}

`
const Head2 = styled.h2`
  font-weight: 500;
  color: gray;
  margin-top: 10px;
  font-size: 20px;
`
const Total = styled.div`
display: flex;
justify-content: space-between;
`
const Wallet = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
const Button = styled.button`
margin-top: 10px;
background-color: teal;
color: wheat;
cursor: pointer;

`
const Details2 = styled.div``
const Money = styled.div``
const Order = () => {
  const dispatch = useDispatch()
  const Shippingcost = 150
  const Discount = 50
  const TotalShipping = Shippingcost-Discount
  const user = useSelector(state=>state.login.isUser)
  const cart = useSelector(state=>state.cart)
  const [division,setdivision]=useState('')
  const [address,setaddress]=useState('')
  const handleclick = (e)=>{
    e.preventDefault()
    const order = async()=>{
      try{
      const res = await userreq.post('/orders',{
        userId:user._id,
        username:user.first+user.last,
        products:cart.product.map((item)=>({
          productId:item._id,
          name:item.title,
          quantity:item.quantity
      })),
      ammount:cart.total,
      division:division,
      address:address
      })
      console.log(res)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Order has been Placed',
        showConfirmButton: true,
      }).then((result)=>{
        if (result.isConfirmed){
          window.location.replace("http://localhost:3000/")
        }
      })
      emptycart(dispatch);
  }catch(err){
    console.log(err)
        Swal.fire({
        icon: 'error',
        title: '',
        text: 'Something went wrong!.Try Refreshing the page and try again',
        button:"Ok"
        })
    }
  }
  order()

  }

  const Divisions = ["Baldia Town","Bin Qasim Town","Gadap Town","Gulberg Town","Gulshan Town",
  "Jamshed Town","Kiamari Town","Korangi Town","Landhi Town","Liaquatabad Town","Lyari Town",
  "Malir Town","New Karachi Town","North Nazimabad Town","Orangi Town","Saddar Town"
  ,"Shah Faisal Town","SITE Town"]
  return (
    <Container>
      <Wrapper>
        <AddDetail>
          <Head>Add Address Detail</Head>
          <Select onChange={(e)=>setdivision(e.target.value)}>
          <Option default selected>Select Your Division</Option>
            {Divisions.map((item=>(
            <Option value={item}>{item}</Option>
            )))}
            </Select>
          <Input onChange={(e)=>setaddress(e.target.value)} placeholder='Enter Address Detail example Street no House no'></Input>
        </AddDetail>
        <Money>
          <Head2>Bill Detail</Head2>
          <Details2>
            <Total>
              Total
              <Wallet>
              <WalletIcon/>
              RS:{cart.total+TotalShipping}
              </Wallet>
              
            </Total>

            <Button onClick={handleclick}>CONFIRM ORDER</Button>
          </Details2>
        </Money>
      </Wrapper>
    </Container>
  )
}

export default Order