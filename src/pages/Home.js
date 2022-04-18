import React from 'react'
import {PageWrapper} from '../styledComponents';
import { motion } from "framer-motion"
import {PageVariant, TitleVariant, TextVariant} from '../animations.js';


function Home() {
  return (
    <PageWrapper
      as={motion.div}
      initial="start"
      animate="stop"
      variants={PageVariant}
    >
        <motion.h1 variants={TitleVariant}>Home</motion.h1>
        <motion.p variants={TextVariant}>Text 1</motion.p>
        <motion.p variants={TextVariant}>Text 2</motion.p>
        <motion.p variants={TextVariant}>Text 3</motion.p>
        <motion.p variants={TextVariant}>Text 4</motion.p>
        <motion.p variants={TextVariant}>Text 5</motion.p>
    </PageWrapper>
  )
}



export default Home