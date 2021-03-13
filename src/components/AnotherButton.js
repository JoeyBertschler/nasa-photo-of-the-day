import React from 'react'
import styled from 'styled-components'

const AnotherButton = styled.button`
padding: 6px 10 px;
margin: 5px;
border: none:
border-radius: 3px;
color: white;

${props => (props.type === 'primary' ? 'background: #216F3' : null)}
${props => (props.type === 'success' ? 'background: green' : null)}
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(AnotherButton)`
  color: tomato;
  border-color: tomato;
`;

export default AnotherButton && TomatoButton