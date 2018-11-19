import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as style from './ReaderWord.style';

const {
  ReaderWord,
} = style;

class ReaderSentence extends Component {
  static propTypes = {
    word: PropTypes.string.isRequired,
  };

  render() {
    const word = this.props.word;

    return (
      <ReaderWord>{word}</ReaderWord>
    );
  }
}

export default ReaderSentence;
