import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/reducers/store';
import RootNavigator from './src/navigation/rootNavigator';
import { colors } from './src/helper/colors';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Provider store={store}>
        <StatusBar backgroundColor={colors.backgroundColor} barStyle={'dark-content'} />
        <RootNavigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
