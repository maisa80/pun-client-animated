import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { motion } from "framer-motion"

function Nav() {
  return (
    <motion.div drag>
        {/* <a href="/">Home</a> | <a href="/puns">Puns</a> */}
        <NavLink to="/">Home</NavLink> | <NavLink to="/puns">Puns</NavLink>
    </motion.div>
  )
}

const NavLink = styled(Link)`
    text-decoration: none;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    &:hover {
      background-color: palevioletred;
      color: white;
      border: 2px solid palevioletred;
    }
`


export default Nav