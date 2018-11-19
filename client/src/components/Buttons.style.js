import styled from 'styled-components';

export const NewTextButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  color: #fff;
  transition: all .1s;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
  letter-spacing: 1.5px;
  height: 40px;
  min-height: 40px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 0 20px;
  width: 160px;
  outline: none;

  &:disabled {
    cursor: auto;
    opacity: .5;
  }
`;

export const ButtonLightGreen = styled(Button)`
  background-color: #2ecc71;
  border-color: #2ecc71;

  &:enabled:hover {
    background-color: #27af61;
    border-color: #27af61;
  }
`;

export const ButtonGrey = styled(Button)`
  background-color: #aeb4b8;
  border-color: #aeb4b8;

  &:enabled:hover {
    background-color: #9ba2a7;
    border-color: #9ba2a7;
  }
`;

export const ButtonBlue = styled(Button)`
  background-color: #3498db;
  border-color: #3498db;

  &:enabled:hover {
    background-color: #2386c8;
    border-color: #2386c8;
  }
`;
