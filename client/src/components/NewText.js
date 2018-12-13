import React, { Component } from 'react';

import NewTextContainer from './NewText.style';
import Editor from './Editor';
import Reader from './Reader/Reader';
import BottomMenu from './BottomMenu';
import * as Buttons from './Buttons';

const {
  StartReadingButton,
  NewTextButtons,
} = Buttons;

class NewText extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handleReaderClick = this.handleReaderClick.bind(this);
    this.state = {
      hasInput: true,
      isReading: false,
      editorText: '親譲りの無鉄砲で小供の時から損ばかりしている',
      readerText: [],
    };
  }

  handleInput({ input, text }) {
    this.setState({
      hasInput: input,
      editorText: text,
    });
  }

  async handleEditorClick(e) {
    e.preventDefault();
    const { editorText } = this.state;
    const data = await fetch('/api/tokens', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: editorText }),
    })
      .then(res => res.json())
      .then(tokens => tokens);

    this.setState({
      isReading: true,
      readerText: data,
    });
  }

  handleReaderClick() {
    this.setState({
      hasInput: true,
      isReading: false,
      editorText: '親譲りの無鉄砲で小供の時から損ばかりしている',
      readerText: [],
    });
  }

  render() {
    let newText;
    const {
      handleReaderClick,
      handleEditorClick,
      handleInput,
    } = this;
    const {
      isReading,
      readerText,
      hasInput,
    } = this.state;

    if (isReading) {
      newText = {
        reader: {
          content: <Reader readerText={readerText} />,
          buttons: <NewTextButtons onClick={handleReaderClick} />,
        },
      };
    } else {
      newText = {
        editor: {
          content: <Editor handleInput={handleInput} />,
          buttons: <StartReadingButton onClick={handleEditorClick} isDisabled={!hasInput} />,
        },
      };
    }

    return (
      <NewTextContainer>
        {isReading ? newText.reader.content : newText.editor.content}
        <BottomMenu>
          {isReading ? newText.reader.buttons : newText.editor.buttons}
        </BottomMenu>
      </NewTextContainer>
    );
  }
}

export default NewText;
