import React from 'react';
import styled from 'styled-components';
import logo from '../../imagens/booksbrief.png';

const LogoContainer = styled.div`
    display: flex;
    align-items: center; /* Alinha verticalmente */
    font-size: 30px;
`;

const LogoImage = styled.img`
    margin-right: 5px;
`;

const Title = styled.p`
    margin-top: 50px; /* Ajuste a distância da margem */
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="Logo" />
            <Title><strong>BOOKS </strong>BRIEF</Title>
        </LogoContainer>
    );
}

export default Logo;
