import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, Mail, Phone, Room } from '@material-ui/icons';
import { Twitter } from '@mui/icons-material';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 50px;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
margin-left: 30px;
justify-content: center;
align-items: left;

`

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
`

const Center = styled.div`
flex: 1;
padding: 20px;
`

const Desc = styled.div`
margin: 20px 0;
font-weight: 600;
`


const SocialContainer = styled.div`
display: flex;

`

const Logo = styled.div`
font-size: 40px;
`

const SocialIcon = styled.div`
width: 40px;
height: 30px;
border-radius: 50%;
color: black;
background-color: ${props=> props.color};
align-items: center;
justify-content: center;
margin-right: 20px;
margin-top: 30px;
`

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin:0 ;
padding: 0;
list-style: none;
display: flex;
flex-wrap : wrap;
`


const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const ContactItem = styled.div`
padding-bottom: 10px;
display: flex;
align-items: center;

`

const Footer = () => {
    return (

        <Container>
            <Left>  
            <Logo>LEGO</Logo>
            <Desc>ONE STORE FOR EVERYTHING YOU NEED WITH NEW ARRIVALS</Desc>

            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>

                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Linsks</Title>
                <List>
                <ListItem>
                     Home
                </ListItem>
                <ListItem>
                     Cart
                </ListItem>
                <ListItem>
                     Men Fashion
                </ListItem>
                <ListItem>
                     Women Fashion
                </ListItem>
                <ListItem>
                     Accessories
                </ListItem>
                <ListItem>
                     My Account
                </ListItem>
                <ListItem>
                     Order Tracking
                </ListItem>
                <ListItem>
                     Wishlist
                </ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/>
                    234, South Asia 23443
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>
                    +12 2343 2342 32
                    </ContactItem>
                    <ContactItem>
                    <Mail style={{marginRight: "10px"}}/>
                    ContactLego@com
                    </ContactItem>
            </Right>

        </Container>
    )
}

export default Footer
