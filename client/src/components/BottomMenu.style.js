import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const MenuContent = styled.div`
  border-top: 1px solid #e1e5e5;
  height: 72px;
  background-color: #fff;
`;

export const MenuActions = styled.div`
  width: 100%;
  max-width: 630px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  margin: 0 auto;

  ${MenuActions} button:first-child {
    margin-left: 0;
  }

  ${MenuActions} button {
    margin-left: 20px;
  }
`;
