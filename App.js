// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavStack from './src/routes/NavStack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
