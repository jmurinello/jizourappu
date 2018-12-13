import styled from 'styled-components';

export const ReaderContainer = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  height: 100%;
  min-height: 100vh;
`;

export const ReaderContent = styled.div`
  padding: 100px 0 77px;
  width: 100%;
  max-width: 630px;
  flex-grow: 1;
`;

export const ReaderText = styled.div`
  margin-top: 18px;
  white-space: pre-wrap
`;

export const ParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
