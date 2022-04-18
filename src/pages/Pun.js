import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import {
    PageWrapper, 
    Button
} from '../styledComponents';
import { motion } from "framer-motion"

function Pun() {
    const params = useParams();
    console.log(params);

    const [pun, setPun] = useState([]);

    const fetchPun = async () => {
        try {
            const response = await fetch('https://puns-app.herokuapp.com/puns/' + params.id)
            const data = await response.json();

            setPun(data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPun();
    }, [])

    return (
        <PageWrapper>
            <motion.h1
                initial={{
                    x: -400,
                    y: -200,
                    opacity: 0,
                    fontSize: '1em',
                }}
                animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 360,
                    fontSize: '3em',
                    color: 'purple',
                }}
                transition={{ 
                    type: "tween",
                    ease: 'backInOut',
                    duration: 2
                }}
            >
                Pun with id: {params.id}
            </motion.h1>

            <p>{pun.content} - <i>{pun.date}</i></p>

            <Button
                as={motion.button}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
            >
                Home
            </Button>
            <Button 
                primary
                as={motion.button}
                whileHover={{
                    x: 500,
                    transition: { type: 'spring', stiffness: 200 },
                }}
            >
                Delete
            </Button>

            <br />

            <ExtendingStylesWhiteBtn>Extending styles</ExtendingStylesWhiteBtn>
            <ExtendingStylesTomatoBtn>Extending styles</ExtendingStylesTomatoBtn>
        </PageWrapper>
    )
}

// "const Button" is imported from an another file (styledComponents.js)
// const Button = styled.button`
//     background: ${props => props.primary ? "palevioletred" : "white"};
//     color: ${props => props.primary ? "white" : "palevioletred"};

//     font-size: 1em;
//     margin: 1em;
//     padding: 0.25em 1em;
//     border: 2px solid palevioletred;
//     border-radius: 3px;
// `


const ExtendingStylesWhiteBtn = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const ExtendingStylesTomatoBtn = styled(ExtendingStylesWhiteBtn)`
    border: 2px solid tomato;
    color: tomato;
`;

export default Pun