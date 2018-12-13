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
    const { handleInput } = this.props;
    this.textarea.style.height = '84px';
    this.textarea.style.height = `${this.textarea.scrollHeight}px`;

    if (this.textarea.value.length === 0) {
      return handleInput({ input: false, text: '' });
    }

    return handleInput({ input: true, text: this.textarea.value });
  }

  render() {
    return (
      <EditorContainer>
        <EditorContent>
          <EditorBody>
            <TextArea
              placeholder="Insert text in Japanese..."
              onInput={() => this.handleEditor()}
              ref={c => this.textarea = c} // eslint-disable-line no-return-assign
              maxLength="50"
              defaultValue="親譲りの無鉄砲で小供の時から損ばかりしている"
            />
          </EditorBody>
        </EditorContent>
      </EditorContainer>
    );
  }
}

export default Editor;
