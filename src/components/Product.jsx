import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {NavLink} from "react-router-dom";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`

const Container = styled.div`
display: flex;
margin-left: 50px;
margin-right: 50px;
min-width: 30px;
height: 500px;

align-items: center;
justify-content: space-around;
position: relative;
margin-bottom: 10%;

&:hover ${Info}{
    opacity: 1;
}
`


const Image = styled.img`
height: 100%;
z-index: 2;
`


const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
z-index: 3;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <NavLink to="/Product">
                        <ShoppingCartIcon/>
                    </NavLink>

                </Icon>
                <Icon>
                    <Search/>
                </Icon>
                <Icon>
                    <FavoriteBorderIcon/>
                </Icon>
                </Info>
        </Container>
    )
}

export default Product
