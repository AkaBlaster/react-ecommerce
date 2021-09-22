import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;

`

const ImageContainer = styled.div`
flex: 1;

`

const Image = styled.img`
width: 100%;
height: 70vh;
  object-fit: contain;
`

const InfoContainer = styled.div`
flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1``

const Desc = styled.p`
margin: 20px 0px;
  
`

const Price = styled.span`
font-size: 40px;
  font-weight: 200;
`

const FilterContainer = styled.div`
display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`

const Filter = styled.div`
display: flex;
  align-content: center;

`

const FilterTitle = styled.span`
font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
 align-items: center;
  width: 50%;
  justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
  align-items: center;
  font-weight: 700;
  

`
const Amount = styled.span`
    width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`

const Button = styled.button`
padding: 15px;
  border:  1px solid teal;
  background-color: white;
  cursor: pointer;
`






const ProductPage = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.bewakoof.com/original/plain-smart-collar-tipping-polo-t-shirt-men-s-plain-smart-collar-tipping-polo-t-shirt-329862-1624607424.jpg?tr=q-100" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Shirt</Title>
                    <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Color
                            </FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>
                                    XS
                                </FilterSizeOption>
                                <FilterSizeOption>
                                    S
                                </FilterSizeOption>
                                <FilterSizeOption>
                                    M
                                </FilterSizeOption>
                                <FilterSizeOption>
                                    L
                                </FilterSizeOption>
                                <FilterSizeOption>
                                    XL
                                </FilterSizeOption>
                            </FilterSize>

                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon/>
                            <Amount>1</Amount>
                            <AddIcon/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductPage
