import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-top: 60px;

  h1 {
    font-size: 1.5em;
    color: palevioletred;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`