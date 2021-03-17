import React from 'react';
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandLizard,
  FaRegHandScissors,
  FaRegHandSpock,
} from 'react-icons/fa';

import { Container } from './styles';

interface CharacterProps {
  type: 'rock' | 'paper' | 'scissor' | 'lizard' | 'spock';
}

const characters = {
  rock: {
    Icon: <FaRegHandRock size={100} />,
    name: 'Pedra',
  },
  paper: {
    Icon: <FaRegHandPaper size={100} />,
    name: 'Papel',
  },
  scissor: {
    Icon: <FaRegHandScissors size={100} />,
    name: 'Tesoura',
  },
  lizard: {
    Icon: <FaRegHandLizard size={100} />,
    name: 'Lagarto',
  },
  spock: {
    Icon: <FaRegHandSpock size={100} />,
    name: 'Spock',
  },
};

const Character: React.FC<CharacterProps> = ({ type }: CharacterProps) => {
  return (
    <Container>
      {characters[type].Icon}
      <p>{characters[type].name}</p>
    </Container>
  );
};

export default Character;
