
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'


const Container = styled.div``

const Title = styled.div`
margin: 20px;
`

const FilterContainer = styled.div`
justify-content: space-between;
display: flex;
margin: 50px;

`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`

const Select = styled.select`
padding: 10px;
margin: 20px;

`

const Option = styled.option`
padding: 5px;
`



const Filter  = styled.div``


const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option disabled selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                    
                    
                </Select>

                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
        </Container>
    )
}

export default ProductList
