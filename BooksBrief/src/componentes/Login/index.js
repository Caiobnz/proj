import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoginForm = styled.form`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Title = styled.h2`
    color: #333333;
`;

const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #cccccc;
    border-radius: 4px;
`;

const SubmitButton = styled.button`
    background-color: #007bff;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
`;

const BackButton = styled.button`
    background-color: #cccccc;
    color: #333333;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
`;

const ErrorMessage = styled.p`
    color: #ff0000;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar lógica de autenticação, como fazer uma solicitação para um servidor
        
        if (username === 'usuario' && password === 'senha') {
            // Lógica de autenticação bem-sucedida
            console.log('Login bem-sucedido!');
        } else {
            setError('Usuário ou senha inválidos');
        }
    };

    const handleBack = () => {
        // Redireciona o usuário de volta para a tela principal
        window.location.href = 'http://localhost:3002';
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <Title>Login</Title>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <InputField
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton type="submit">Entrar</SubmitButton>
            </LoginForm>
            <BackButton onClick={handleBack}>Voltar para tela principal</BackButton>
        </LoginContainer>
    );
};

export default Login;
