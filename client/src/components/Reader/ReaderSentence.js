import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import ReaderSentenceContainer from './ReaderSentence.style';
import ReaderWord from './ReaderWord';

function ReaderSentence({ sentence }) {
  const words = sentence;

  return (
    <ReaderSentenceContainer>
      {words.map(word => (
        <ReaderWord word={word} key={uuidv4()} />
      ))}
    </ReaderSentenceContainer>
  );
}

ReaderSentence.propTypes = {
  sentence: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ReaderSentence;
