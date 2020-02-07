// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import moment from 'moment';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  toTitle?: string;
  fromTitle?: string;
  mode: 'calendar' | 'spinner' | 'default';
  onFromChange: (newDate: Date | string) => Date | string | void;
  onToChange: (newDate: Date | string) => Date | string | void;
  }

// Component: Edit Date Range Field
const EditDateRangeField = (props: Props) => {
  // React Hooks: State
  const [ fromDateModalVisible, toggleFromDate ] = useState(false);
  const [ toDateModalVisible, toggleToDate ] = useState(false);
  const [ androidFromDateVisible, toggleFromDateAndroid ] = useState(false);
  const [ androidToDateVisible, toggleToDateAndroid ] = useState(false);
  const [ fromDate, setFromDate ] = useState(new Date());
  const [ toDate, setToDate ] = useState(new Date());
  const [ tempToDate, setTempToDate ] = useState(toDate);
  const [ tempFromDate, setTempFromDate ] = useState(fromDate);
  const [ today , todaySent ] = useState(false);

  // React Hooks: Lifecycle Methods
  useEffect(() => {
    // Send Initial Date
    if (today === false) {
      // Props: onFromChange
      props.onFromChange(new Date());

      // Today's Date Has Been Sent To Parent Component
      todaySent(true);
    }
  });

  // Toggle From Date Modal
  const toggleFromDateModal = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggleFromDate((fromDateModalVisible: boolean) => !fromDateModalVisible);
      }

      // Check Platform (Android)
      else if (Platform.OS === 'android') {
        // React Hook: Toggle Android
        toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Toggle To Date Modal
  const toggleToDateModal = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggleToDate((toDateModalVisible: boolean) => !toDateModalVisible);
      }

      // Check Platform (Android)
      else if (Platform.OS === 'android') {
        // React Hook: Toggle Android
        toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select From Date
  const selectFromDate = (event: any, newDate: Date) => {
    try {
      // Check Platform: Android
      if (Platform.OS === 'android') {
        // Undefined
        if (newDate === undefined) {
          // React Hook: Toggle From Date Android 
          toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);
        }

        // Event Type: Set Date
        else if (event.type === 'set') {
          // React Hook: Toggle Android 
          toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);
  
          // React Hook: Set From Date
          setFromDate(newDate);
  
          // React Props: onChange
          props.onFromChange(newDate);
        }
  
        // Event Type: Dismissed
        else if (event.type === 'dismissed') {
          // React Hook: Toggle Android
          toggleFromDate(false);
        }
      }

      // Check Platform: Android
      else if (Platform.OS === 'ios') {
        // Undefined
        if (newDate !== undefined) {
          // React Hook: Set Temp State
          setTempFromDate(newDate);
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select To Date
  const selectToDate = (event: any, newDate: Date) => {
    try {
      // Check Platform: Android
      if (Platform.OS === 'android') {
        // Undefined
        if (newDate === undefined) {
          // React Hook: Toggle From Date Android 
          toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);
        }

        // Event Type: Set Date
        else if (event.type === 'set') {
          // React Hook: Toggle Android 
          toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);
  
          // React Hook: Set To Date
          setToDate(newDate);
  
          // React Props: onChange
          props.onToChange(newDate);
        }
  
        // Event Type: Dismissed
        else if (event.type === 'dismissed') {
          // React Hook: Toggle Android
          toggleToDate(false);
        }
      }

      // Check Platform: Android
      else if (Platform.OS === 'ios') {
        // Undefined
        if (newDate !== undefined) {
          // React Hook: Set Temp State
          setTempToDate(newDate);
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render From iOS Date Picker
  const renderFromIOSDatePicker = () => {
    try {
      return (
        <RNDateTimePicker
          mode="date"
          value={tempFromDate ? tempFromDate : fromDate}
          onChange={(event: any, newDate: any) => selectFromDate(event, newDate)}
        />
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Cancel (From Date)
  const pressCancelFromDate = () => {
    try {
      // React Hook: Set Temp Date
      setTempFromDate(fromDate);

      // Toggle Modal
      toggleFromDateModal();
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Done (From Date)
  const pressDoneFromDate = () => {
    try {
      // React Hook: Set Date
      setFromDate(tempFromDate);

      // Props: onChange
      props.onFromChange(tempFromDate);

      // Toggle Modal
      toggleFromDateModal();
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render To iOS Date Picker (To Date)
  const renderToIOSDatePicker = () => {
    try {
      return (
        <RNDateTimePicker
          mode="date"
          value={tempToDate ? tempToDate : toDate}
          onChange={(event: any, newDate: any) => selectToDate(event, newDate)}
        />
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Cancel (To Date)
  const pressCancelToDate = () => {
    try {
      // React Hook: Set Temp Date
      setTempToDate(toDate);

      // Toggle Modal
      toggleToDateModal();
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Done (To Date)
  const pressDoneToDate = () => {
    try {
      // React Hook: Set Date
      setToDate(tempToDate);

      // Props: onChange
      props.onToChange(tempToDate);

      // Toggle Modal
      toggleToDateModal();
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render To Date Android Picker
  const renderToDateAndroidPicker = () => {
    try {
      if (androidToDateVisible === true) {
        return (
          <RNDateTimePicker
            mode="date"
            display={props.mode}
            value={toDate}
            onChange={(event: any, newDate: any) => selectToDate(event, newDate)}
          />
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render From Date Android Picker
  const renderFromDateAndroidPicker = () => {
    try {
      if (androidFromDateVisible === true) {
        return (
          <RNDateTimePicker
            mode="date"
            display={props.mode}
            value={fromDate}
            onChange={(event: any, newDate: any) => selectFromDate(event, newDate)}
          />
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.fieldTitleContainer}>
          <Text style={styles.fieldTitle} numberOfLines={1}>{props.toTitle === undefined ? 'Date' : props.toTitle}</Text>
        </View>

        <TouchableOpacity onPress={() => toggleFromDateModal()} style={styles.fieldTextContainer}>
          <Text style={styles.fieldText} numberOfLines={1}>{moment(fromDate).format('MMM Do, YYYY')}</Text>
        </TouchableOpacity>

        <View>{androidFromDateVisible === true ? renderFromDateAndroidPicker() : null}</View>

        <Modal
          isVisible={fromDateModalVisible}
          style={styles.modal}
          backdropOpacity={.30}
        >
          <View style={styles.modalContainer}>
            <View style={styles.pickerHeaderContainer}>
              <TouchableOpacity onPress={() => pressCancelFromDate()} >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <View style={styles.doneButton}>
                <Button
                  onPress={() => pressDoneFromDate()}
                  title="Done"
                  disabled={fromDate === tempFromDate ? true : false}
                />
              </View>
            </View>

            <View style={styles.pickerContainer}>{renderFromIOSDatePicker()}</View>
          </View>
        </Modal>
      </View>

      <View style={styles.container}>
        <View style={styles.fieldTitleContainer}>
          <Text style={styles.fieldTitle} numberOfLines={1}>{props.fromTitle === undefined ? 'Date' : props.fromTitle}</Text>
        </View>

        <TouchableOpacity onPress={() => toggleToDateModal()} style={styles.fieldTextContainer}>
          <Text style={styles.fieldText} numberOfLines={1}>{moment(toDate).format('MMM Do, YYYY')}</Text>
        </TouchableOpacity>

        <View>{androidToDateVisible === true ? renderToDateAndroidPicker(): null}</View>

        <Modal
          isVisible={toDateModalVisible}
          style={styles.modal}
          backdropOpacity={.30}
        >
          <View style={styles.modalContainer}>
            <View style={styles.pickerHeaderContainer}>
              <TouchableOpacity onPress={() => pressCancelToDate()} >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <View style={styles.doneButton}>
                <Button
                  onPress={() => pressDoneToDate()}
                  title="Done"
                  disabled={toDate === tempToDate ? true : false}
                />
              </View>
            </View>

            <View style={styles.pickerContainer}>{renderToIOSDatePicker()}</View>
          </View>
        </Modal>
      </View>
    </View>
  )
};

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: width - 16,
    height: 55,
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 16,
    marginBottom: 4,
  },
  fieldTitleContainer: {
    width: 120,
  },
  fieldTitle: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  fieldTextContainer: {
    width: width - 120 - 32,
    justifyContent: 'flex-end',
  },
  fieldText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
  },
  modal: {
    margin: 0,
  },
  modalContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pickerHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: width,
    backgroundColor: '#FAFAF8',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pickerContainer: {
    height: 250,
    width: width,
    backgroundColor: 'white',
  },
  doneButton: {
    marginRight: 7,
  },
  doneText: {
    fontFamily: 'System',
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 17,
    marginRight: 16,
  },
  cancelText: {
    fontFamily: 'System',
    color: '#007AFF',
    fontWeight: '400',
    fontSize: 17,
    marginLeft: 16,
  },
});

// Exports
export default EditDateRangeField;
