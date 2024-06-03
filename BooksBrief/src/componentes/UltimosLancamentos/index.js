import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/diariodeumbanana.jpeg'; 
import styled from 'styled-components';

const Container = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: #EBECEE;
  padding: 20px;
`;

const NovosLivrosContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ImagemLivro = styled.img`
  max-width: 350px; /* Define a largura máxima da imagem */
  max-height: 350px; /* Define a altura máxima da imagem */
  width: 750px; /* Mantém a proporção da imagem */
`;

function UltimosLancamentos() {
  return (
    <Container>
      <Content>
        <Titulo
          cor="#EB9B00"
          tamanhoFonte="36px"
        >
          ÚLTIMOS LANÇAMENTOS
        </Titulo>
        <NovosLivrosContainer>
          {livros.map(livro => ( // Corrigido para 'livro' como o nome do parâmetro
            <ImagemLivro key={livro.id} src={livro.src} alt={livro.nome} /> // Usando 'livro' para acessar propriedades corretamente
          ))}
        </NovosLivrosContainer>
      </Content>
      <Footer>
        <CardRecomenda
          titulo="Talvez você se interesse por"
          subtitulo="Diario de um Banana"
          descricao="
          Diário de um Banana, escrita por Jeff Kinney, é uma série de livros populares desde seu lançamento em 2007, cativando leitores com suas aventuras humorísticas do estudante Greg Heffley.."
          img={imagemLivro} // Corrigido para usar o caminho da imagem
        />
      </Footer>
    </Container>
  );
}

export default UltimosLancamentos;
