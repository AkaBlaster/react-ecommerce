import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
  ),
  url("https://images.unsplash.com/photo-1538331269258-6c97a6bdeae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
  display: flex;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
`

const Wrapper = styled.div`
padding: 20px;
  width: 40%;
  justify-content: center;
  align-items: center;
  background: white;
`

const Title = styled.h1`
font-size: 25px;
  font-weight: 300;
`

const Form = styled.form`
display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  
`

const Agreement = styled.div`
font-size: 12px;
  margin: 20px 0;
`

const Button = styled.button`
width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`


const Register = () => {
    return(
        <Container>
            <Wrapper>
                <Title>
                    Create An account
                </Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="email"/>
                    <Input placeholder="name"/>

                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register