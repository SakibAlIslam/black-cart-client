import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display:flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`

`
const Description = styled.div`

`
const InputContainer = styled.div`

`
const Input = styled.input`

`
const Button = styled.button`

`

const NewsLetter = () => {
  return (
    <Container>
        <Title></Title>
        <Description></Description>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send />
            </Button>
        </InputContainer>

    </Container>
  )
}

export default NewsLetter