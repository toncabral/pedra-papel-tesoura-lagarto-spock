import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100px;
  width: 100px;
  padding: 24px;
  border-radius: 50%;

  background: #ff5252;
  border: 3px solid #b33939;
  color: #f7f1e3;

  svg {
    flex: 1;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;
