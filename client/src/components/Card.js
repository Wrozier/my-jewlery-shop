import React from 'react';
import styled from 'styled-components';

const Card = ({ title, children }) => (
    <CardContainer>
        <CardTitle>{title}</CardTitle>
        {children}
    </CardContainer>
);

export default Card;

const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    padding: 15px;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.02);
    }
`;

const CardTitle = styled.h3`
    color: #4b0082;
    margin-bottom: 10px;
`;
