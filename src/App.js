import React from "react";
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home.js';
import Form from './Components/Form.js';

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

const App = () => {
  return (
    <>
      <div>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form />
      </Route>
    </div>
    </>
  );
};
export default App;
