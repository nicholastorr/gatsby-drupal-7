import * as React from 'react';



const ProductImage = ({ images, sku }) => {
    //filter array and return image that matches sku
    const img = []
    
    
    images.nodes.forEach(image => {
        if (image.data.url.includes(sku.substring(0, 9))) {
            img.push(image.data.url)
        }
    })
    console.log(images)
    console.log(img)
    return (
        <div>
            <img src={img[0]} width={200} alt="" />
        </div>
    )
}




export default ProductImage;