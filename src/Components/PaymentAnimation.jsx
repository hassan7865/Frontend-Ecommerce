import React from 'react'
import animationData from '../../src/Components/Accessories/success.json'
import HomeIcon from '@mui/icons-material/Home';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
right: 0;
color: black;
top: 0;
margin: 20px;
gap: 5px;
font-size: 20px;
`
const Wrapper = styled.div`
position: relative;

`
const Place = styled.div`
    position: absolute;
    top: 100%;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    border:1px solid black;
    left: 35%;
    height: 10%;
    width: 30%;
    justify-content: center;
`
const PaymentAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        }
    }
  return (
    
    
    <Wrapper>
          <Lottie
              options={defaultOptions}
              height={500}
              width={500}
              margintop={20} />
              <Link to='/'>
            <Container>
                <HomeIcon/>
                Home
          </Container>
          </Link>
          <Place>Your Order Has been placed</Place>
      </Wrapper>
  )
}

export default PaymentAnimation