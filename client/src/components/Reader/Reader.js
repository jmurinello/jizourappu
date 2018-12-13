import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import * as style from './Reader.style';
import ReaderParagraph from './ReaderParagraph';

const {
  ReaderContainer,
  ReaderContent,
  ReaderText,
  ParagraphsContainer,
} = style;

function Reader({ readerText }) {
  const paragraphs = readerText;

  return (
    <ReaderContainer>
      <ReaderContent>
        <ReaderText>
          <ParagraphsContainer>
            {paragraphs.map(paragraph => (
              <ReaderParagraph paragraph={paragraph} key={uuidv4()} />
            ))}
          </ParagraphsContainer>
        </ReaderText>
      </ReaderContent>
    </ReaderContainer>
  );
}

Reader.propTypes = {
  readerText: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Reader;
