import React, { lazy } from 'react';

import Header from './Header/Header.jsx';
import Intro from './Main/Intro.jsx';
import Stack from './Main/Stack.jsx';
import About from './Main/About.jsx';
import Work from './Main/Work.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Stack />
      <About />
      <Work />
      <Footer />
    </div>
  )
};

export default App;