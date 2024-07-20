import React from 'react';
import styled from 'styled-components';

const InputField = ({ label, type, value, onChange }) => (
    <InputGroup>
        <Label>{label}</Label>
        <Input type={type} value={value} onChange={onChange} />
    </InputGroup>
);

export default InputField;

const InputGroup = styled.div`
    margin-bottom: 15px;
    text-align: left;
`;

const Label = styled.label`
    color: #4b0082;
    margin-bottom: 5px;
    display: block;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`;
