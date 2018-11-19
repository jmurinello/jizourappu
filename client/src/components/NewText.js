import React, { Component } from 'react';

import { NewTextContainer } from './NewText.style.js';
import Editor from './Editor';
import Reader from './Reader/Reader';
import BottomMenu from './BottomMenu';
import * as style from './Buttons';

const {
  StartReadingButton,
  NewTextButtons,
} = style;

class NewText extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handleReaderClick = this.handleReaderClick.bind(this);
    this.state = {
      hasInput: false,
      isReading: false,
      editorText: '',
      readerText: [],
    };
  }

  handleInput({input, text}) {
    this.setState({
      hasInput: input,
      editorText: text,
    });
  }

  async handleEditorClick() {
    event.preventDefault();
    const data =
      await fetch('/api/tokens', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: this.state.editorText }),
      })
      .then((res) => res.json())
      .then((tokens) => tokens);

    this.setState({
      isReading: true,
      readerText: data,
    });
  }

  handleReaderClick() {
    this.setState({
      hasInput: false,
      isReading: false,
      editorText: '',
      readerText: [],
    });
  }

  render() {
    let newText;

    if (this.state.isReading) {
      newText = {
        reader: {
          content: <Reader readerText={this.state.readerText} />,
          buttons: <NewTextButtons onClick={this.handleReaderClick}/>,
        },
      };
    } else {
      newText = {
        editor: {
          content: <Editor handleInput={this.handleInput} />,
          buttons: <StartReadingButton onClick={this.handleEditorClick} isDisabled={!this.state.hasInput} />,
        },
      };
    }

    return (
      <NewTextContainer>
        {this.state.isReading ? newText.reader.content : newText.editor.content}
        <BottomMenu>
          {this.state.isReading ? newText.reader.buttons : newText.editor.buttons}
        </BottomMenu>
      </NewTextContainer>
    );
  }
}

export default NewText;
