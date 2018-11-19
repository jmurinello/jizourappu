import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as style from './Reader.style';
import ReaderParagraph from './ReaderParagraph';

const {
  ReaderContainer,
  ReaderContent,
  ReaderText,
  ParagraphsContainer,
} = style;

class Reader extends Component {
  static propTypes = {
    readerText: PropTypes.array.isRequired,
  };

  render() {
    const paragraphs = this.props.readerText;

    return (
      <ReaderContainer>
        <ReaderContent>
          <ReaderText>
            <ParagraphsContainer>
              {paragraphs.map((paragraph, index) => {
                return <ReaderParagraph paragraph={paragraph} key={`paragraph-${index}`} />
              })}
            </ParagraphsContainer>
          </ReaderText>
        </ReaderContent>
      </ReaderContainer>
    );
  }
}

export default Reader;
