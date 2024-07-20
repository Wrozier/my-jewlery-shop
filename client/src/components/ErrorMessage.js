import React from 'react';
import styled from 'styled-components';

const ErrorMessage = ({ message }) => {
    if (!message) return null;
    return <Error>{message}</Error>;
};

export default ErrorMessage;

const Error = styled.p`
    color: red;
    margin-top: 10px;
`;
