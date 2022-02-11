import * as React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const ProductList = ({data}) => {
    
    
    return (
        <div>
            {console.log(data)}
            <h1>product list</h1>
            {data.allCommerceProduct.nodes.map(product => {
               // const imgSrc = `http://stagingsupply.htm-mbs.com/sites/default/files/products/${product.data.sku}/${product.data.sku}_1.JPG`
                //const imgRoute = imgSrc.replace('P/', '/')
                //const imgPath = imgRoute.replace('P_', '_')
                return (
                    <div>
                    <h3>{product.data.title}</h3>
                    {/*product.data.field_product_image.length < 1  ?
                    <img src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" width={200}/> :
                    <img src={imgPath} width={200} alt="" />
                    */}
                    <h3>{product.data.sku}</h3>
                    </div>
                )
            })}
        </div>
    )

}

export const query = graphql`
    query($category: String!) {
        allCommerceProduct( filter: {data: {field_category: {eq: $category}}} ) {
            nodes {
                data {
                  sku
                  field_product_image {
                    file {
                      uuid
                    }
                  }
                  title
                }
              }
            totalCount
        }
    }
`;

export default ProductList;