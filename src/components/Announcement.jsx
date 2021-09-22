import styled from 'styled-components'


const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
font-size: 14px;
align-items: center;
text-align: center;
font-weight: 500;
justify-content: center;
`


const Announcement = () => {
    return (
        <Container>
            Super Deal free shipping on Order over $60
            </Container>
    )
}

export default Announcement
