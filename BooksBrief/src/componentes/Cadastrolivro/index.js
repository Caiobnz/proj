// Importe o styled-components e o useState
import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos para o Container, Form, Title, InputField, SubmitButton, BackButton e ErrorMessage
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Form = styled.form`
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

const TextArea = styled.textarea`
    width: 100%; /* Utilizamos 100% da largura */
    height: 100px; /* Altura desejada da caixa de texto */
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #cccccc;
    border-radius: 4px;
    resize: vertical; /* Permitir redimensionamento vertical */
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

// Componente CadastroLivro
const CadastroLivro = () => {
    // Estados para título, autor, ano, sinopse e erro
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [ano, setAno] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [error, setError] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Verifica se todos os campos estão preenchidos
        if (titulo && autor && ano && sinopse) {
            // Lógica de cadastro bem-sucedida
            console.log('Livro cadastrado com sucesso!');
        } else {
            setError('Por favor, preencha todos os campos');
        }
    };

    // Função para lidar com o clique no botão de voltar
    const handleBack = () => {
        // Redireciona o usuário de volta para a tela principal
        window.location.href = 'http://localhost:3002';
    };

    // Retorna o JSX do componente
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Cadastro de Livro</Title>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <InputField
                    type="text"
                    placeholder="Título do livro"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <InputField
                    type="text"
                    placeholder="Autor do livro"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
                <InputField
                    type="number"
                    placeholder="Ano de publicação"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                />
                <TextArea
                    placeholder="Sinopse do livro"
                    value={sinopse}
                    onChange={(e) => setSinopse(e.target.value)}
                />
                <SubmitButton type="submit">Cadastrar Livro</SubmitButton>
            </Form>
            <BackButton onClick={handleBack}>Voltar para tela principal</BackButton>
        </Container>
    );
};

// Exporta o componente CadastroLivro
export default CadastroLivro;
