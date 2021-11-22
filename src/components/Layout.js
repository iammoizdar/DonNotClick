import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import styled from 'styled-components'
import { Button } from '../styles/StyledButton'

const Container = styled.div`
    margin: 3rem auto;
    padding: 0 24px;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align:center`

const Layout = ({children}) => {
    return (
        <Container>
            <Navbar />
            <div className="content">
                {children}
                <Button>Contact us</Button>

            </div>
            <footer>
                <span>Copyright 2021 Gatsby</span>
            </footer>
       </Container>
    )
}

export default Layout
