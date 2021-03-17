import React from 'react';
import Button from '../../components/Button';
import Character from '../../components/Character';

import { Container, Content, Characters, Options } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Characters>
          <Character type="rock" />
          <Character type="paper" />
          <Character type="scissor" />
          <Character type="lizard" />
          <Character type="spock" />
        </Characters>

        <Options>
          <Button>Jogar</Button>
          <Button>Instruções</Button>
          <Button>Sair</Button>
        </Options>
      </Content>
    </Container>
  );
};

export default Home;
