import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import { Publicreq } from '../Components/url';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addproduct } from '../Components/Redux/cartRedux';
import { mobile } from '../Components/responsive';
const Container = styled.div``
const Wrapper = styled.div`
display: flex;
align-items: center;
padding: 20px;
${mobile({
  padding:"10px",
  display:"block"
})}
`
const ImageContainer = styled.div`
flex: 1;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
${mobile({
  height:"30vh"
})}
`
const Image = styled.img`
height: 100%;

`
const Info = styled.div`
flex: 1;
margin-top: 80px;
`
const Heading = styled.h1`
${mobile({
  fontSize:"20px",
  margin:"0px"
})}
`
const Desc = styled.p`
margin-top: 20px;
${mobile({
  fontSize:"12px",
  margin:"5px 0 0 0 "
})}
`
const Price = styled.h2`
margin-top: 5px;
${mobile({
  fontSize:"20px"
})}
`
const SubH = styled.p`
margin-top: 20px;
font-weight:800;
${mobile({
  fontSize:"20px"
})}
`
const Colour = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Spec = styled.div`
margin-top: 20px;
gap: 50px;
display: flex;
`
const Txt = styled.p`
font-weight: 800;
font-size: 20px;
`
const Clr = styled.div`
cursor: pointer;
border-radius: 50%;
background-color: ${props => props.colors};
width: 30px;
height: 30px;
${mobile({
  width:"20px",
  height:"20px"
})}
`
const Size = styled.div`
display: flex;
`
const Select = styled.select`
margin-left: 5px;
`
const Option = styled.option``

const Cart = styled.div`
display: flex;
align-items: center;
`
const Digit = styled.div`
border: 1px solid teal;
width: 30px;
height: 30px;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30%;
`
const Button = styled.button`
width: 30%;
border: 1px solid teal;
`
const Lower = styled.div`
display: flex;
margin-top: 20px;
gap: 180px;
${mobile({
  gap:"120px"
})}
`
const Plus = styled.div`
cursor: pointer;
`
const Minus = styled.div`
cursor: pointer;
`
const SingleProduct = () => {
    const dispatch = useDispatch()
    const [color,setcolor]=useState("")
    const [size,setsize]=useState({})
    const handleclick = (e)=>{
        const value = e.target.value
        setsize({value})
    }

    
    const [product, setproduct] = useState({})
    const location = useLocation()
    const id = location.pathname.split('/')[2]

    useEffect(() => {
        const getProd = async () => {
            try {
                const res = await Publicreq.get(`/products/find/${id}`);
                setproduct(res.data)
            } catch (err) {

            }
        }
        getProd()
    }, [id])
    const [quantity, setcount] = useState(1)
    const Count = (act) => {
        if (act === "add") {
            setcount(quantity + 1)
        } else if (act === "min") {
            if (quantity > 1) {
                setcount(quantity - 1)
            }
        }
    
    }
     const handleClick =()=>{
        dispatch(
            addproduct({...product,quantity,color,size})
        )
    }
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}></Image>
                </ImageContainer>
                <Info>
                    <Heading>{product.title}</Heading>
                    <Desc>Whether you're a Good Deadpool or a Bad one, if you crack some super funny jokes to cope with life, then this Official Marvel Deadpool Face Hoodie is for you!<br></br>
                        <SubH>Description</SubH>
                        {product.desc}
                    </Desc>
                    <SubH>Price</SubH>
                    <Price>{product.price}</Price>
                    <Spec>
                        <Colour>
                            <Txt>Color</Txt>
                            {product.color && product.color.map((item)=>(
                            <Clr onClick={()=>setcolor(item)} colors={item}></Clr>
                            ))}
                        </Colour>
                        <Size>
                            <Txt>Size</Txt>
                            <Select onChange={handleclick}>
                            {product.size?.map((item)=>(
                                <Option >{item}</Option>
                                ))}
                            </Select>
                        </Size>
                    </Spec>
                    <Lower>
                        <Cart>
                            <Plus>
                                <AddIcon onClick={() => Count("add")} />
                            </Plus>
                            <Digit>{quantity}</Digit>
                            <Minus>
                                <RemoveIcon onClick={() => Count("min")} />
                            </Minus>
                        </Cart>
                        <Button onClick={handleClick}>Add to Cart</Button>
                    </Lower>
                </Info>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>

    )
}

export default SingleProduct