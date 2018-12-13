import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import * as style from './ReaderParagraph.style';
import ReaderSentence from './ReaderSentence';

const {
  ReaderParagraphContainer,
  ReaderParagraphText,
} = style;

class ReaderParagraph extends Component {
  static propTypes = {
    paragraph: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  getIndexes(paragraph, fullStop) {
    const indexes = [];
    paragraph.forEach((char, index) => {
      if (char === fullStop) {
        indexes.push(index);
      }
    });
    return indexes;
  }

  getSentences(paragraph, indexes) {
    const sentences = [];
    const paragraphLength = paragraph.length;
    const lastIndex = indexes.length - 1;
    const pushSentence = (x, y) => sentences.push(paragraph.slice(x, y));

    indexes.reduce((acc, cur) => {
      if (acc !== 0) {
        pushSentence(acc + 1, cur + 1);
      }
      if (acc === 0) {
        pushSentence(acc, cur + 1);
      }
      return acc + cur;
    }, 0);

    if (lastIndex !== paragraphLength - 1) {
      pushSentence(indexes[lastIndex] + 1, paragraphLength);
    }

    return sentences;
  }

  render() {
    const { paragraph } = this.props;

    const fullStopIndexes = this.getIndexes(paragraph, '\u3002');
    const sentences = this.getSentences(paragraph, fullStopIndexes);

    return (
      <ReaderParagraphContainer>
        <ReaderParagraphText>
          {sentences.map(sentence => (
            <ReaderSentence sentence={sentence} key={uuidv4()} />
          ))}
          <span />
        </ReaderParagraphText>
      </ReaderParagraphContainer>
    );
  }
}

export default ReaderParagraph;
