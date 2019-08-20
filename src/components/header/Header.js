import React from 'react';
import PropTypes from 'prop-types';

function Header({ name }) {
  return (
    <h1>Hey there {name}, welcome! to page</h1>
  );
}

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
