import React from 'react';
import './App.css';

//classnames module
import classNames from 'classnames';

import Advice from './Components/Advice';

function App() {
  return (
    <div className={classNames(`flex h-screen w-screen`)}>
      <Advice/>
    </div>
  );
}

export default App;
