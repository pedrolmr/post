import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Navigation = () => {
    return (
        <Nav>
            <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
            <NavLink exact activeClassName="active-link" to="/create">Create</NavLink>
        </Nav>
    )
}

const Nav = styled.div`
  padding: 20px;
  background-color: #4960B1;
  a{
    padding: 10px;
    margin:10px;
    text-decoration: none;
    color: #fff;
    letter-spacing: 1px;
    font-weight: lighter;
    text-transform: uppercase;
    background: '#364B97';
    border:1px solid #394779;
  }
`

export default Navigation;
