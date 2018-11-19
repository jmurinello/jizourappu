import React from 'react';
import * as style from './BottomMenu.style';

const {
  MenuContainer,
  MenuContent,
  MenuActions,
} = style;

function BottomMenu(props) {
  return (
    <MenuContainer>
      <MenuContent>
        <MenuActions>
          {props.children}
        </MenuActions>
      </MenuContent>
    </MenuContainer>
  );
}

export default BottomMenu;
