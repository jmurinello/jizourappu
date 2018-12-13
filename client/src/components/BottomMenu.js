import React from 'react';
import PropTypes from 'prop-types';
import * as style from './BottomMenu.style';

const {
  MenuContainer,
  MenuContent,
  MenuActions,
} = style;

function BottomMenu({ children }) {
  return (
    <MenuContainer>
      <MenuContent>
        <MenuActions>
          {children}
        </MenuActions>
      </MenuContent>
    </MenuContainer>
  );
}

BottomMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
  ]).isRequired,
};

export default BottomMenu;
