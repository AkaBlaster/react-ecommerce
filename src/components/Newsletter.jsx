import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components'


const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 70px;


`

 const Desc = styled.div`
 font-size: 24px;
 font-weight: 300;
 `

 const InputContainer = styled.div`
 width: 50%;
 height: 40px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background-color: white;
 border: 1px solid lightgray;
 `

 const Input = styled.input`
 flex: 8;
 border: none;
 padding-left: 20px;

 &:focus{
     border: none;
 }
 `

 const Button = styled.button`
 border: none;
 cursor: pointer;
 flex: 1;
 background-color: teal;
 color: white;
 margin: 5px;

 `



const Newsletter = () => {
    return (
       <Container>
           <Title>Newsletter</Title>
           <Desc>Get Timely updates about the new arrivals</Desc>
           <InputContainer>
            <Input placeholder="Your Email" />
            <Button>
                <SendIcon/>
            </Button>
           </InputContainer>
        </Container>
    )
}

export default Newsletter
