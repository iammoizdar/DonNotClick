import * as React from "react"
import Layout from "../components/Layout"
import { StyledPage } from "../styles/StyledPageCss"
import { useState } from "react"
import { Button } from '../styles/StyledButton'

const Home = () => {
  const[Heading ,setHeading]= useState("Home Page");
  const[Greetings ,setGreetings]= useState("Welcome To Home Page");

  function handleClick(){
    setHeading('Hey!👋');
    setGreetings('How Are You!');
    console.log('Laravel')
  }
  return(
<Layout>
<StyledPage>
  <h1>{Heading}</h1>
  <p>{Greetings}</p>
  <Button className="clickme" onClick={handleClick}>Don't Click Me!&#128512;</Button>
</StyledPage>
</Layout>
  )}

export default Home
