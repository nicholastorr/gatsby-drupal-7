const path = require('path');

var fs = require('fs');
var dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    } 
 }


 exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const products = await graphql(`
    {
        allCommerceProduct(
            filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}}}
            limit: 200
          ) {
            totalCount
            nodes {
              data {
                sku
                title
              }
            }
          }
    }
    `);

    const landingPages = await graphql(`
    {
        allTaxonomyTerm(filter: {data: {parent: {elemMatch: {id: {eq: 805}}}}}) {
          nodes {
            data {
              name
            }
          }
        }
      }      
    `);

    
    //category logic
    //run query for categories
    //filter categories that have no children
    //send category name to product-list template --- product list template will run static query for products in category

    landingPages.data.allTaxonomyTerm.nodes.map(node => {
        const pathName = node.data.name.toLowerCase().replace(/\s/g, '_');
        createPage({
            path: `/product-list/${pathName}`,
            component: path.resolve('./src/templates/product-list.js'),
            context: {
                //need to make this dynamic
                category: pathName,
            },
        })
    })


    products.data.allCommerceProduct.nodes.map(product => {
        createPage({
            path: `/vinyl/${product.data.sku}`,
            component: path.resolve('./src/templates/product.js'),
            context: {
                sku: product.data.sku,
                title: product.data.title
            }
        })
    })

 }