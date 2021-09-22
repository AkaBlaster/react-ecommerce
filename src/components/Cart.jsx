import styled from 'styled-components'
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Footer from "./Footer"
import ShoeImage from '../Images/ian-bevis-IJjfPInzmdk-unsplash.jpg'
import AddIcon from '@mui/icons-material/Add';
import ShoppingBag from '../Images/luis-quintero-8TSqJoI-NVs-unsplash.jpg';
import RemoveIcon from '@mui/icons-material/Remove';

import HakuraTshirt from '../Images/ryan-hoffman-6Nub980bI3I-unsplash.jpg';

const Container = styled.div`

`

const Wrapper = styled.div`
padding: 20px;
`

const Title= styled.h1`
font-weight: 300;
  text-align: center;
`

const Top = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
`

const TopButton = styled.button`
padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black": "transparent"};
  color: ${props => props.type === "filled" && "white"};
  
  
`

const Bottom = styled.div`
display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 30px;

`

const TopTexts = styled.div``

const TopText = styled.span`
text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Info = styled.div`
flex: 3;
`

const Summary = styled.div`
flex: 1;
  border: 0.5px  solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
  
`

const ProductDetail = styled.div`
flex: 2;
display: flex;  

`

const PriceDetail = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Detail = styled.div`
padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`

const ProductName = styled.div``

const ProductId = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  
`

const ProductSize = styled.span`
`
const ProductAmount = styled.div`
font-size: 24px;
  margin: 5px;
    
`

const ProductAmountContainer = styled.div`
display: flex;
  align-items: center;
  

`

const ProductPrice = styled.div`
font-size: 30px;
  font-weight: 200;
  margin-bottom: 20px;

`

const Hr = styled.hr`
background-color: #eee;
  border: none;
  height: 1px;
`

const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
margin: 30px 0;
  display: flex;
  justify-content: space-between;

  
`

const SummaryItemText = styled.span`
  font-weight: ${props=> props.type === "total" && "500"};
  font-size: ${props=> props.type === "total" && "24px"};
  
  
`

const SummaryItemPrice = styled.p``

const Button = styled.button`
width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  
`

const Cart = () => {
    return(
       <Container>
           <Navbar/>
           <Announcement/>
           <Wrapper>
               <Title>YOUR BAG</Title>
               <Top>
                   <TopButton>Continue Shopping</TopButton>
                   <TopTexts>
                       <TopText>Shopping Bag (2)</TopText>
                       <TopText>Your Wishlist (0) </TopText>
                   </TopTexts>
                   <TopButton type="filled">Checkout Now</TopButton>
               </Top>
               <Bottom>
                   <Info>
                       <Product>
                           <ProductDetail>
                              <img src={ShoeImage} alt="someima" width="400"/>
                               <Detail>
                                   <ProductName>
                                       <b>Product:</b>JESSIE SHOES
                                   </ProductName>
                                   <ProductId><b>ID:</b>932B12344</ProductId>
                                   <ProductColor color="black"/>
                                   <ProductSize><b>Size:</b>32.5</ProductSize>
                               </Detail>
                           </ProductDetail>
                           <PriceDetail>
                               <ProductAmountContainer>
                                    <AddIcon/>
                                   <ProductAmount>
                                    2
                                   </ProductAmount>
                                   <RemoveIcon/>
                               </ProductAmountContainer>
                               <ProductPrice>$30</ProductPrice>
                           </PriceDetail>
                       </Product>
                       <Hr/>
                       <Product>
                           <ProductDetail>
                               <img src={HakuraTshirt} alt="someima" width="400"/>
                               <Detail>
                                   <ProductName>
                                       <b>Product:</b>Hakura Tshirt
                                   </ProductName>
                                   <ProductId><b>ID:</b>932B12224</ProductId>
                                   <ProductColor color="Gray"/>
                                   <ProductSize><b>Size:</b>XL</ProductSize>
                               </Detail>
                           </ProductDetail>
                           <PriceDetail>
                               <ProductAmountContainer>
                                   <AddIcon/>
                                   <ProductAmount>
                                       2
                                   </ProductAmount>
                                   <RemoveIcon/>
                               </ProductAmountContainer>
                               <ProductPrice>$30</ProductPrice>
                           </PriceDetail>
                       </Product>
                       <Hr/>
                       <Product>
                           <ProductDetail>
                               <img src={ShoppingBag} alt="someima" width="400"/>
                               <Detail>
                                   <ProductName>
                                       <b>Product:</b>JESSIE SHOES
                                   </ProductName>
                                   <ProductId><b>ID:</b>933B12344</ProductId>
                                   <ProductColor color="lightBlue"/>
                                   <ProductSize><b>Size:</b>32.5</ProductSize>
                               </Detail>
                           </ProductDetail>
                           <PriceDetail>
                               <ProductAmountContainer>
                                   <AddIcon/>
                                   <ProductAmount>
                                       2
                                   </ProductAmount>
                                   <RemoveIcon/>
                               </ProductAmountContainer>
                               <ProductPrice>$30</ProductPrice>
                           </PriceDetail>
                       </Product>
                   </Info>
                   <Summary>
                       <SummaryTitle>
                           Order Summary
                       </SummaryTitle>
                       <SummaryItem>
                           <SummaryItemText>SubTotal</SummaryItemText>
                           <SummaryItemPrice>$ 80</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Estimated Shipping Address</SummaryItemText>
                           <SummaryItemPrice>$ 590</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Shipping Discount</SummaryItemText>
                           <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText type="total">Total</SummaryItemText>
                           <SummaryItemPrice>$ 80</SummaryItemPrice>
                       </SummaryItem>
                       <Button>CheckOut Now</Button>
                   </Summary>
               </Bottom>
           </Wrapper>
           <Footer/>
       </Container>
    )
}

export default Cart