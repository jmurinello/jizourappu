import styled from 'styled-components';

export const EditorContainer = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  height: 100%;
  min-height: 100vh;
`;

export const EditorContent = styled.div`
  padding: 100px 0 77px;
  width: 100%;
  max-width: 630px;
  flex-grow: 1;
`;

export const EditorBody = styled.div`
  margin-top: 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const TextArea = styled.textarea`
  color: #27323b;
  font-size: 18px;
  line-height: 2;
  width: 100%;
  max-width: 100%;
  resize: none;
  outline: none;
  border: none;
  padding: 0 0 48px;
  overflow: hidden;

  &:focus {
    border-left: 2px solid #e1e5e5;
    margin-left: -7px;
    padding-left: 5px;
  }
`;
