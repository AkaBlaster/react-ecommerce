import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {mobile } from '../responsive'
import {NavLink} from "react-router-dom";

const Container = styled.div`
height: 60px;
  ${mobile({height:"50px"})}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
  ${mobile({padding:"10px 0"})}
`

const Left = styled.div`
flex: 1;
display: flex;
align-items:  center;
`

const Language = styled.span`
font-size: 14px;
cursor: pointer;
  ${mobile({display: "none"})}
`

const Center = styled.div`
flex: 1;
text-align:center;
`

const Logo = styled.h1`
font-weight: 900;

`

const Right = styled.div`
flex: 1;
display: flex;
align-items:  center;
justify-content: flex-end;
`

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 10px;
`

const Input = styled.input`
border: none;

`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <Left><Language>EN</Language>
            <SearchContainer>
                <Input/>
                <SearchIcon style={{color:"grey", fontSize: 16}}>

                </SearchIcon>
            </SearchContainer>
            
            </Left>
            <Center>
                <NavLink to="/" style={{textDecoration: 'none'}}>
                    <Logo>
                        LEGOSHOP
                    </Logo>
                </NavLink>

            </Center>
            <Right>
            <MenuItem>
                <NavLink to="/Register" style={{textDecoration: 'none'}}>
                Register
            </NavLink> </MenuItem>
            <MenuItem>
                <NavLink to="/Login" style={{textDecoration: 'none'}}>
                    SignIn
                </NavLink>
            </MenuItem>
                <NavLink to="/Cart" style={{textDecoration: 'none', color: 'black'}}>
                    <Badge color="primary">
                        <ShoppingCartIcon/>
                    </Badge>
                </NavLink>
            </Right>
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
