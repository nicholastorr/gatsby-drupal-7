import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import HomeCategories from "../components/homeCategories"
import Header from "../components/header"
import "./index.css"
import MyCarousel from "../components/MyCarousel"


const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
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
        <StaticImage src="https://mbs-signsupply.com/web/images/Mbs-standoff-Home-Page-Delay-Banner.jpg" alt="shipping-delay" quality={100} width={1280}/>
        <MyCarousel />
        <HomeCategories />
       </Container> 
    </body>
    //footer
  )
}

export default IndexPage
