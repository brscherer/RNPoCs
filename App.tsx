import React from 'react';
import FlatListExample from './src/examples/lists/FlatListExample';
import FlashListExample from './src/examples/lists/FlashListExample';


function App(): React.JSX.Element {

  return (
    <>
      <FlatListExample length={1000} />
      <FlashListExample length={1000} />
    </>
  );
}

export default App;
