/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import Navigation from './navigation';
import React from 'react';
import {SafeAreaView} from 'react-native';

type Props = {
  title?: string;
};

const STORYBOOK_START = false;

const App = () => {
  return (
    <SafeAreaView>
      <Navigation />
    </SafeAreaView>
  );
};

const module = STORYBOOK_START ? require('../storybook').default : App;

export default module;
