import React from 'react';
import PropTypes from 'prop-types';
import * as style from './Buttons.style';

const {
  ButtonLightGreen,
  ButtonGrey,
  ButtonBlue,
  NewTextButtonContainer,
} = style;

export function StartReadingButton({ onClick, isDisabled }) {
  return (
    <ButtonLightGreen
      onClick={onClick}
      disabled={isDisabled}
    >
      Start Reading
    </ButtonLightGreen>
  );
}

StartReadingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export function NewTextButtons({ onClick }) {
  return (
    <NewTextButtonContainer>
      <ButtonGrey onClick={onClick}>Clear</ButtonGrey>
      <ButtonBlue disabled>Add To Library</ButtonBlue>
    </NewTextButtonContainer>
  );
}

NewTextButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
