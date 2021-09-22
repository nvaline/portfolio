import React, { useState } from 'react';

import Nav from './Nav.jsx';

const styles = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
}

const Header = () => {
  return (
    <header style={ styles }>
      <Nav />
    </header>
  )
}

export default Header;
