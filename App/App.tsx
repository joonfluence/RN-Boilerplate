/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import Navigation from './navigation';
import BottomTab from './navigation/bottomTab';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type Props = {
  title?: string;
};

const STORYBOOK_START = false;

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Navigation /> */}
      <BottomTab />
    </SafeAreaProvider>
  );
};

const module = STORYBOOK_START ? require('../storybook').default : App;

export default module;
