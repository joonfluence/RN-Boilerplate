import React from 'react';
import {NativeModules, Button} from 'react-native';

const {CalendarModule, CalendarManager} = NativeModules;

const NewModuleButton = () => {
  const onPress = () => {
    // Object-C
    CalendarModule.createCalendarEvent('testName', 'testLocation');
    // Swift
    CalendarManager.addEvent('testName', 'testLocation', 2022);
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
