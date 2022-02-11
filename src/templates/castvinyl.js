import * as React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const CastVinyl = ( data ) => {
    const  products  = data;
    
    return (
        <div>
            {console.log(products)}
            <h1>Cast vinyl</h1>
        </div>
    )

}




export default CastVinyl;