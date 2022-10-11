import React from 'react';
import Main from './components/Main.jsx';

import { mainTeemo } from './data/data.js';

const App = () => {
  return (
   <>
      <main className='flex flex-col gap-16 relative'>
       <Main mainTeemo={mainTeemo}/>
      
      </main>
  
   </>
  )
}

export default App;