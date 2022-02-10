import * as React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const ProductList = ({data}) => {
    
    
    return (
        <div>
            {console.log(data)}
            <h1>product list</h1>
            {data.allCommerceProduct.nodes.map(product => (
                <div>
                    <h3>{product.data.title}</h3>
                    <img src={`http://stagingsupply.htm-mbs.com/sites/default/files/products/${product.data.sku.replace('p', '')}/${product.data.sku.replace('p', '')}_1.JPG`} width={200} alt="" />
                    <h3>{product.data.sku}</h3>
                </div>
            ))}
        </div>
    )

}

export const query = graphql`
    query($category: String!) {
        allCommerceProduct( filter: {data: {field_category: {eq: $category}}} ) {
            nodes {
                data {
                  sku
                  title
                }
              }
            totalCount
        }
    }
`;

export default ProductList;