import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as style from './Editor.style';

const {
  EditorContainer,
  EditorContent,
  EditorBody,
  TextArea,
} = style;

class Editor extends Component {
  static propTypes = {
    handleInput: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.textarea.style.height = '84px';
  }

  handleEditor() {
    this.textarea.style.height = '84px';
    this.textarea.style.height = this.textarea.scrollHeight + 'px';

    if (this.textarea.value.length === 0) {
      return this.props.handleInput({ input: false, text: '' });
    }

    this.props.handleInput({ input: true, text: this.textarea.value });
  }

  render() {
    return (
      <EditorContainer>
        <EditorContent>
          <EditorBody>
            <TextArea
              placeholder="Insert text in Japanese..."
              onInput={() => this.handleEditor()}
              ref={(c) => this.textarea = c}
            />
          </EditorBody>
        </EditorContent>
      </EditorContainer>
    );
  }
}

export default Editor;
