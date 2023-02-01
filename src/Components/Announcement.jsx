import React from 'react'
import styled from 'styled-components'
import { mobile } from './responsive'

const Container = styled.div`
 background-color: teal;
 text-align: center;
 color: white;
 font-size: 14px;
 ${mobile({
       fontSize:"10px"
       })}
`
const Announcement = () => {
  return (
    <Container>
        AVAIL UPTO 50% OFF ON SHOPPING TILL FEBUARARY 10!!!
    </Container>
  )
}

export default Announcement