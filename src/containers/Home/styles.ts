import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;

export const Characters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div + div {
    margin-left: 16px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  button + button {
    margin-top: 16px;
  }
`;
