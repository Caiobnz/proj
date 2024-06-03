import React, { useState } from 'react';
import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';
import Login from '../Login/index'; // Importa o componente de Login de um diretório dentro de 'componentes'
import CadastroLivro from '../Cadastrolivro/index'; // Importa o componente de cadastro de livros

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer; /* Adicione isso para tornar o ícone clicável */
`;

const Botao = styled.button`
    color: #002F52; /* Cor azul */
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    background-color: transparent; /* Removendo a cor de fundo */

    &:hover {
        text-decoration: underline; /* Adicionando sublinhado no hover */
    }
`;

const Icones = styled.ul`
    display: flex;
    align-items: center;
`;

const icones = [perfil]; // Se você tiver mais ícones, adicione-os aqui

function IconesHeader() {
    const [mostrarLogin, setMostrarLogin] = useState(false); // Estado para controlar se a tela de login deve ser exibida ou não
    const [mostrarCadastroLivro, setMostrarCadastroLivro] = useState(false); // Estado para controlar se o formulário de cadastro de livros deve ser exibido ou não

    const handleClickIcone = () => {
        setMostrarLogin(true); // Quando o ícone é clicado, mostra a tela de login
    };

    const handleCloseLogin = () => {
        setMostrarLogin(false); // Função para fechar a tela de login
    };

    const handleAbrirCadastroLivro = () => {
        setMostrarCadastroLivro(true); // Função para abrir o formulário de cadastro de livros
    };

    return (
        <>
            <Icones>
                {icones.map((icone, index) => (
                    <Icone key={index} onClick={handleClickIcone}><img src={icone} alt={`Ícone ${index}`} /></Icone>
                ))}
                <Botao onClick={handleAbrirCadastroLivro}>Cadastrar Livros</Botao>
            </Icones>
            {mostrarLogin && <Login onClose={handleCloseLogin} />} {/* Renderiza a tela de login se mostrarLogin for verdadeiro */}
            {mostrarCadastroLivro && <CadastroLivro />} {/* Renderiza o componente de cadastro de livros se mostrarCadastroLivro for verdadeiro */}
        </>
    );
}

export default IconesHeader;
