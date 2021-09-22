import styled  from 'styled-components'
import {NavLink} from "react-router-dom";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 80vh;
position: relative;
opacity: 0.5;

&:hover {
    opacity: 1;
    transition: all 0.5s ease;
}
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const Info = styled.div`
position: absolute;
width: 100%;
top: 0;
left: 0;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
font-size: 40px;
color: white;
font-weight: 600;
margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: grey;
cursor: pointer;
`


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
               <NavLink to="/Product">
                   <Button>Shop Now</Button>
               </NavLink>
            </Info>
        </Container>

    )
}

export default CategoryItem
