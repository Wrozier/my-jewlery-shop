import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import {
    LoginContainer,
    LoginBox,
    Title,
    Form,
    InputGroup,
    Label,
    Input,
    ErrorMessage
} from '../styles/LoginStyles';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/login', { username, password });
            localStorage.setItem('token', res.data.token);
            navigate('/profile');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <LoginContainer>
            <LoginBox>
                <Title>Login</Title>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Label>Username:</Label>
                        <Input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Password:</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputGroup>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <Button type="submit">Login</Button>
                </Form>
            </LoginBox>
        </LoginContainer>
    );
};

export default Login;
