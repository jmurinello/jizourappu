import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as style from './ReaderSentence.style';
import ReaderWord from './ReaderWord';

const {
  ReaderSentenceContainer,
} = style;

class ReaderSentence extends Component {
  static propTypes = {
    sentence: PropTypes.array.isRequired,
  };

  render() {
    const words = this.props.sentence;

    return (
      <ReaderSentenceContainer>
        {words.map((word, index) => {
          return <ReaderWord word={word} key={`word-${index}`} />
        })}
      </ReaderSentenceContainer>
    );
  }
}

export default ReaderSentence;
