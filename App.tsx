// Imports: Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';

// Imports: Components
import {
  EditTextField,
} from './src/index';

// React Native App
const App = () => {

  // Test Data
  const items = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' }
  ];

  return (
    <SafeAreaView style={{ display: 'flex', flex: 1 }}>
      <EditTextField
        title="Text Field"
      />

      <EditTextField
        title="Text Field"
      />

      <EditTextField
        title="Text Field"
      />

    </SafeAreaView>
  )
};

// Exports
export default App;
