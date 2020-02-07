// Imports: Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';

// Imports: Components
import {
  EditTextField,
  EditDateField,
  EditDateTimeField,
  EditTimeField,
  EditDateRangeField,
  EditStateField,
  EditListField,
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
        title="Text"
        currentValue={'Current Text'}
        newValue={(text: string | number) => console.log(text)}
      />

      <EditDateField
        title="Date"
        onChange={(date) => console.log(date)}
        mode="spinner"
      />

      <EditDateTimeField
        title="Date/Time"
        onChange={(date) => console.log(date)}
      />

      <EditTimeField
        title="Time"
        onChange={(date) => console.log(date)}
        mode="spinner"
      />

      <EditStateField
        title="State"
        onChange={(state) => console.log(state)}
      />

      <EditListField
        title="List"
        items={items}
        onChange={(item) => console.log(item)}
      />

      <EditDateRangeField
        toTitle="To Date"
        fromTitle="From Date"
        onFromChange={(date) => console.log(date)}
        onToChange={(date) => console.log(date)}
        mode="spinner"
      />
    </SafeAreaView>
  )
};

// Exports
export default App;
