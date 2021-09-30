import React from 'react';

import Header from './Header/Header.jsx';
import Intro from './Main/Intro.jsx';
import Stack from './Main/Stack.jsx';
import About from './Main/About.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Stack />
      <About />
      <Footer />
    </div>
  )
};

export default App;