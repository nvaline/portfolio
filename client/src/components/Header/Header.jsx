import React from 'react';

import Nav from './Nav.jsx';

const styles = {
  // position: "fixed",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
}

const Header = () => {
  return (
    <header style={ styles } id="Home">
      <Nav />
    </header>
  )
}

export default Header;
