import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import HomeCategories from "../components/homeCategories"
import Header from "../components/header"
import "./index.css"

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`
const Carousel = styled.div`
  margin-top: 25px;
  display: block;
`


// markup
const IndexPage = () => {

  return (
    //topbar
    //header
    //navbar
    <body>
      <Header />
      <Container>
        <StaticImage src="https://mbs-signsupply.com/web/images/Mbs-standoff-Home-Page-Delay-Banner.jpg" alt="shipping-delay" width={1280}/>
          <Carousel>  
            <StaticImage src="http://stagingsupply.htm-mbs.com/sites/all/themes/bootstrap_supply/images/home-slides/Catalog.jpg" alt="catalog-carousel"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1 className="carousel-image-1">NEW! 2022 Catalog</h1>
                  <h1 className="carousel-image-2">Now Available!</h1>
                    <p className="carousel-caption-1">Wholesale Vinyl, Medias, Papers, Inks, Signs,<br></br> Lights, Standoffs, Tools, Hardware and more...</p>
                    <p className="carousel-caption-2"><a className="download-button" href="/mbs-signsupply-catalog" role="button">Download Now!</a></p>
                </div>
              </div>
          </Carousel>
      </Container>
       <HomeCategories /> 
    </body>
    //footer
  )
}

export default IndexPage
