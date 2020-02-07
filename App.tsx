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
  const items: any = [
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
        mode="spinner"
        currentValue={new Date()}
        newValue={(newDate: Date) => console.log(newDate)}
      />

      <EditDateTimeField
        title="Date/Time"
        currentValue={new Date()}
        newValue={(newDate: Date) => console.log(newDate)}
      />

      <EditTimeField
        title="Time"
        mode="spinner"
        currentValue={new Date()}
        newValue={(newDate: Date) => console.log(newDate)}
      />

      <EditStateField
        title="State"
        currentValue={'CA'}
        newValue={(state: string) => console.log(state)}
      />

      <EditListField
        title="List"
        items={items}
        currentValue={'1'}
        newValue={(item: any) => console.log(item)}
      />

      <EditDateRangeField
        toTitle="To Date"
        fromTitle="From Date"
        currentToValue={new Date()}
        newToValue={(date: Date) => console.log(date)}
        currentFromValue={new Date()}
        newFromValue={(date: Date) => console.log(date)}
        mode="spinner"
      />
    </SafeAreaView>
  )
};

// Exports
export default App;
