import { react } from 'react-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
margin-left: 90rem;
margin-top: 1.5rem;

`;

const LambdaEatsHeader = styled.h1`
  color: red;
  margin-left: 1rem;
`;

const Anchors = styled.a`
  color: white;
  border: 2px solid black;
  border-radius: 8px;
  margin-left: 1px;
  background: black;
  text-decoration: none;
  font-size: 1.7rem;
  width: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  border: 0.3rem solid black;
  border-radius: 8px;
`;

const PizzaContainer = styled.div`

`;


export default function Home() {
    
    
    return (
      <div>
        <HeaderContainer className="header-container">
        <LambdaEatsHeader>Lambda Eats</LambdaEatsHeader>
        <NavBar>
          <Anchors href="home">Home</Anchors>
          <Anchors href="Help">Help</Anchors>
        </NavBar>
      </HeaderContainer>

      <PizzaContainer>
        <img src="./Assets/Pizza.jpg" />
      </PizzaContainer>
      </div>
    )
}