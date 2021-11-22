import React from 'react'
import { Link as GatsbyLink} from 'gatsby'
import styled from 'styled-components'

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

`
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #fff;


`
const StyledLink = styled(GatsbyLink)`
    color: #fff;
    border-bottom: 2px solid transparent;
    padding-bottom: 5px;
    transition: 0.3s ease;
    &:hover{
        border-bottom: 2px solid #9B16DC;
    }

`


const Navbar = () => {
    return (
        <NavBar>
            <h1 className="logo">GatsBy</h1>
            <NavLinks>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/info">Info</StyledLink>
            </NavLinks>
        </NavBar>
    )
}

export default Navbar
