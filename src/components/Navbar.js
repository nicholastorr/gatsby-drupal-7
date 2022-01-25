import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from "styled-components"



//get query for all Digital Media Cateogories

const Category = styled.div`
  padding-left: 200px;
  padding-right: 200px;
  background-color: red;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const HeaderCat = styled.h3`
    color: white;
    font-size: 15px;
    margin: auto;
    padding: auto;
    text-align: center;
`

const HeaderBar = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 100%;
  z-index: 999;
  position: ${props => props.height > 150 ? 'fixed' : 'static'};
    top: ${props => props.height > 150 ? '35px' : 'auto'};
`

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const [height, setHeight] = useState(0)

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])
      
      const listenToScroll = () => {
        let heightToHideFrom = 200;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
        setHeight(winScroll);
    
        if (winScroll > heightToHideFrom) {  
             isVisible && setIsVisible(false);
        } else {
             setIsVisible(true);
        }  
      };


    return (
        <HeaderBar height={height}>
            <Category>
                <HeaderCat>Digital <br></br> Media</HeaderCat>
                <HeaderCat>Vinyl &#38; Application <br></br> Tapes</HeaderCat>
                <HeaderCat>Heat Transfer <br></br> Vinyl</HeaderCat>
                <HeaderCat>Vehicle <br></br> Wraps</HeaderCat>
                <HeaderCat>Wrap <br></br> Tools</HeaderCat>
                <HeaderCat>Paper <br></br> Materials</HeaderCat>
                <HeaderCat>Frames <br></br> &#38; Displays</HeaderCat>
                <HeaderCat>RLM <br></br> Sign Lights</HeaderCat>
                <HeaderCat>Standoff <br></br> Systems</HeaderCat>
                <HeaderCat>Sign <br></br> Brackets</HeaderCat>
                <HeaderCat>Substrates</HeaderCat>
                <HeaderCat>Vinyl <br></br> Racks</HeaderCat>
                <HeaderCat>Banner <br></br> Stands</HeaderCat>
                <HeaderCat>Sign <br></br> Stakes</HeaderCat>
                <HeaderCat>Electronic <br></br> Standoffs</HeaderCat>
                <HeaderCat></HeaderCat>
            </Category>
        </HeaderBar>
    )
}




export default Navbar;