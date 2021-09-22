import styled from 'styled-components'

const Container = styled.div`
justify-content: center;
align-items: center;
text-align: center;
height: 20vh;
margin-top: 10%;
`

const Heading = styled.h1`
font-size: 70px;
text-align: center;
`


const SubHeading = () => {
    return (
        <Container>
            <Heading>
                NEW ARRIVALS FOR MENS
            </Heading>
        </Container>
    )
}

export default SubHeading
