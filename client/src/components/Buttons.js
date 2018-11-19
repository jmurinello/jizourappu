import React from 'react';
import * as style from './Buttons.style';

const {
  ButtonLightGreen,
  ButtonGrey,
  ButtonBlue,
  NewTextButtonContainer,
} = style;

export function StartReadingButton(props) {
  return (
    <ButtonLightGreen
      onClick={props.onClick}
      disabled={props.isDisabled}
    >Start Reading</ButtonLightGreen>
  );
}

export function NewTextButtons(props) {
  return (
    <NewTextButtonContainer>
      <ButtonGrey onClick={props.onClick}>Clear</ButtonGrey>
      <ButtonBlue disabled={true}>Add To Library</ButtonBlue>
    </NewTextButtonContainer>
  );
}
