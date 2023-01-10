import React from 'react';
import DataContextProvider from './src/context/DataContext';
import {StackNavigator} from './src/navigations/StackNavigator';

const App = () => {
  return ( 
  <DataContextProvider> 
  <StackNavigator />
  </DataContextProvider>
  );
};

export default App;
