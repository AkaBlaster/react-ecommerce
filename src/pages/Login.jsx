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
  url("https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80");
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
const Button = styled.button`
width: 40%;
  border: none;
  margin-bottom: 5px;
  margin-top: 20px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Link = styled.div`
display: flex;
  margin: 20px;
  
`

const Login = () => {
    return(
        <Container>
            <Wrapper>
                <Title>
                    Sign In with your Account
                </Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="password"/>
                    <Button>Login</Button>
                    <Link>Remember password?</Link>
                    <Link>Forgot Password</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}


export default Login