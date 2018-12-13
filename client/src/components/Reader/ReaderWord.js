import React from 'react';
import PropTypes from 'prop-types';
import ReaderWord from './ReaderWord.style';

function ReaderSentence({ word }) {
  return <ReaderWord>{word}</ReaderWord>;
}

ReaderSentence.propTypes = {
  word: PropTypes.string.isRequired,
};

export default ReaderSentence;
