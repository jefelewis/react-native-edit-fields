# React Native Edit Fields

[![npm version](https://badge.fury.io/js/react-native-edit-fields.svg)](https://badge.fury.io/js/react-native-edit-fields)
[![npm downloads](https://img.shields.io/npm/dm/react-native-edit-fields.svg)](https://www.npmjs.com/package/react-native-edit-fields)

*  [Built With](#built-with)
*  [Pending Items](#pending-items)
*  [Getting Started](#getting-started)
*  [Example Code](#example-code)

*  [Changelog](#changelog)

## Built With
* [TypeScript](https://github.com/microsoft/TypeScript) - Programming Language
* [React Native](https://facebook.github.io/react-native/) - Mobile (iOS/Android) Framework
* [React Native Modal](https://github.com/react-native-community/react-native-modal) - Modal
* [React Native Datetime Picker](https://github.com/react-native-community/react-native-datetimepicker) - Native Date/Time Picker
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Functional Component State/Lifecycle Methods
* [Moment](https://github.com/moment/moment) - Date/Time Formatting

## Pending Items


## Getting Started
**1. Install Package:**
```
npm i react-native-edit-fields
```

**2. Add Pod (For iOS)**

Add the following line to ios/podfile:
```
pod 'RNDateTimePicker', :path => '../node_modules/@react-native-community/datetimepicker/RNDateTimePicker.podspec'
```

**3. Install Pods (For iOS)**
```
cd ios
pod install
```

**4. Add Dependencies (For Android)**

Add the following lines to android/settings.gradle:
```
include ':react-native-datetimepicker'
project(':react-native-datetimepicker').projectDir = new File(rootProject.projectDir, '../node_modules/@react-native-community/datetimepicker/android')
```

Add the following line to android/app/build.gradle:
```
dependencies {
  ...
  implementation project(':react-native-datetimepicker')
}
```

**5. Run Project:**
```
react-native run-ios
```


## Example Code
**Functional Component (Using React Hooks):**

```javascript
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
} from 'react-native-edit-fields';

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
```

<!-- ## Picker Types (iOS)
### 1. Date
<div align="center">
  <img src="/screenshots/ios/iosDate.gif" width="40%" height="40%" />
</div> -->

<!-- ## Picker Types (Android)
### 1. Date (Mode: Spinner)
<div align="center">
  <img src="/screenshots/android/androidDateSpinner.gif" width="40%" height="40%" />
</div> -->


## Changelog

### [0.0.3] - 2/7/2020

***Changed***

- Increased `pickerHeaderContainer` height to 45px.
