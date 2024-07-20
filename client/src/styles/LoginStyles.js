import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f3f2f7;
    font-family: Arial, sans-serif;
`;

export const LoginBox = styled.div`
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
`;

export const Title = styled.h2`
    color: #4b0082;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    margin-bottom: 15px;
    text-align: left;
`;

export const Label = styled.label`
    color: #4b0082;
    margin-bottom: 5px;
    display: block;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`;

export const ErrorMessage = styled.p`
    color: red;
    margin-top: 10px;
`;
