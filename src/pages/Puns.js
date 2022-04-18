import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {PageWrapper} from '../styledComponents';
import { motion } from "framer-motion"


function Puns() {
    const [puns, setPuns] = useState([]);

    const fetchPuns = async () => {
        try {
            const response = await fetch('https://puns-app.herokuapp.com/puns')
            const data = await response.json();

            setPuns(data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPuns();
    }, [])


    return (
        <PageWrapper
            as={motion.div}
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{type: 'spring', stiffness: 100}}
        >
            <h1>Puns</h1>

            <section>
                {
                    puns.map( pun => (
                        <Link to={`/puns/${pun._id}`}><p>{pun.content} - <i>{pun.date}</i></p></Link>
                    ))
                }
            </section>
        </PageWrapper>
    )
}

export default Puns