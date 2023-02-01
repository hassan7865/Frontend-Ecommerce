import React from 'react'
import styled from 'styled-components'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {slideritem} from "../Components/Data"
import {useState} from 'react'
import { ChevronRightOutlined } from '@mui/icons-material';
import { mobile } from './responsive';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
    ${mobile({
       height:"50vh"
       })}
    
`
const Arrow = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    margin: auto;
    top: 0;
    cursor: pointer;
    bottom: 0;
    left: ${props => props.direction === "Left" && "10px"};
    right: ${props => props.direction === "Right" && "10px"};
`
const ImageContainer = styled.div`
flex: 1;
height: 100%;
${mobile({
       flex:"0"
       })}
`
const Image = styled.img`
height: 80%;
${mobile({
       height:"30%",
      
       })}
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props=>props.Slideindex * -100}vw);
transition: all 1.5s ease;
${mobile({
       margin:"20% 0 0 0"
       })}
`
const Info = styled.div`
flex: 1;
margin: 10%;
${mobile({
       margin:"10% 0 0 0",
       flex: "0"
       })}

`
const Heading = styled.h1`
${mobile({
       fontSize:"20px"
       })}
`
const Para = styled.p`
${mobile({
       fontSize:"8px"
       })}
margin-top:5%;
`
const Button = styled.button`
margin-top: 5%;
border: 1px solid black;
width: 20%;
${mobile({
       width: "50%",
       height:"3%",
       fontSize:"8px"
       })}
cursor: pointer;
`
const Slide = styled.div`
display: flex;
width: 100vw;
height: 100vh;
${mobile({
       gap:"30px"
       })}
`
const Slider
    = () => {
        const [slideindex,setslideindex] = useState(0)
        const Handleclick = (direction)=>{
            if (direction === "left"){
                setslideindex(slideindex>0 ? slideindex-1 : 2)
            }else{
                setslideindex(slideindex<2 ? slideindex+1:0)
            }
        }
        return (
            <Container>
                <Wrapper Slideindex={slideindex}>
                {slideritem.map((items)=>(
                <Slide key={items.id}>
                    <ImageContainer>
                            <Image src={items.image} />
                        </ImageContainer><Info>
                                <Heading>{items.Heading}</Heading>
                                <Para>{items.Para}</Para>
                                <Button>SHOP NOW</Button>
                            </Info>
                    
                    </Slide>
                ))}
                </Wrapper>

                <Arrow direction="Left" onClick={()=>{Handleclick("left")}}>
                    <KeyboardArrowLeftIcon />
                </Arrow>
                <Arrow direction="Right" onClick={()=>{Handleclick("right")}}>
                    <ChevronRightOutlined />
                </Arrow>
            </Container>
        )
    }

export default Slider