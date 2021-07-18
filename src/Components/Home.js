import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const NavBar = styled.nav`
margin-left: 89rem;
display: flex;
margin-top: 1.3rem;
margin-bottom: 1.3rem;

`;

const LambdaEatsHeader = styled.h1`
  color: black;
  margin-left: 1rem;
  border: 0.3rem solid black;
  border-radius: 8px;
  padding: 0.3rem;
`;

const Anchors = styled.a`
  color: white;
  border: 2px solid black;
  border-radius: 8px;
  margin-left: 0.3rem;
  background: black;
  text-decoration: none;
  font-size: 1.7rem;
  justify-content: center;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  border: 0.3rem solid black;
  border-radius: 8px;
  background: cyan;
  margin: 1rem;
`;

const PizzaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const OrderPizzaButton = styled.button`
color: white;
border: 2px solid black;
border-radius: 8px;
background: black;
font-size: 1.7rem;
margin-top: 1rem;
padding 0.5rem;
`;


export default function Home() {

  const history = useHistory()
  const routeToForm = () => {
      history.push('/pizza')
  }
    
    
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
        <OrderPizzaButton id='order-pizza' onClick={routeToForm}>Order Pizza</OrderPizzaButton>
      </PizzaContainer>
      </div>
    )
}