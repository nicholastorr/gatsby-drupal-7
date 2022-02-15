import * as React from 'react';
import styled from 'styled-components';



const SidebarContainer = styled.div`
    width: 290px;
    overflow: auto;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
`

const Filter = styled.li`
    border-bottom: 1px solid black;
`

export const Sidebar = ({ products, setProducts }) => {
    

    const [click, setClick] = React.useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const handleFilter = (filter) => {
        const filteredProducts = products.filter(product => product.data.field_product_roll_size === filter);
        console.log(filteredProducts);
        setProducts(filteredProducts);
    }


    const rollSize = [...new Set(products.map(fields => fields.data.field_product_roll_size))]
    console.log(products)
    console.log(rollSize)


    return (
        <SidebarContainer>
            <h3>Mbs Sign Supply</h3>
                <ul>Sub Categories</ul>
                    <li>Calendered Vinyl</li>
                    <li>Cast Vinyl</li>
            <h3>Filters</h3>
            <li onClick={() => handleClick()}>Roll Size</li>
                {/*map through roll size array*/}
                {/*each size has an onclick function that filters the products array*/}
                {click ? rollSize.sort().map(size => {
                    return (
                        <span style={{display: "flex", flexDirection: "row", alignItems: "center", height: "30px"}}>
                        <input type="checkbox" onClick={() => handleFilter(size)} />
                        <p >{size}</p>
                        </span>
                    )
                }) : null}
            <li>Width</li>
            <li>Length</li>
            <li>Series</li>
            <li>Color</li>
            <li>Finish</li>
            <li>Color Number</li>
            <li>Color Range</li>
            <li>Adhesive</li>
            <li>Application</li>
            <li>Punched</li>
            <li>Surface</li>
            <li>Vinyl Type</li>
            <li>Durability</li>
            <li>Vinyl Class</li>
        </SidebarContainer>
    )
}