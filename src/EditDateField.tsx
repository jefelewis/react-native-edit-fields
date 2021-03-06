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
  title?: string;
  mode: 'calendar' | 'spinner' | 'default';
  currentValue: Date;
  newValue: (date: Date) => Date | void;
}

// Component: Edit Date Field
const EditDateField = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);
  const [ androidModalVisible, toggleAndroid ] = useState(false);
  const [ date, setDate ] = useState(props.currentValue);
  const [ tempDate, setTempDate ] = useState(date);

  // Toggle Modal
  const toggleModal = () => {
    try {
      // Check Platform (Android)
      if (Platform.OS === 'android') {
        // React Hook: Toggle Android
        toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);
      }

      // Check Platform (iOS)
      else if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggle((modalVisible: boolean) => !modalVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select Date
  const selectDate = (event: any, newDate: Date) => {
    try {
      // Check Platform: Android
      if (Platform.OS === 'android') {

        // Undefined
        if (newDate === undefined) {
          // React Hook: Toggle Android 
          toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);
        }

        // Event Type: Set Date
        else if (event.type === 'set') {
          // React Hook: Toggle Android 
          toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);

          // React Hook: Set From Date
          setDate(newDate);

          // Props: newValue
          props.newValue(tempDate);
        }

        // Event Type: Dismissed
        else if (event.type === 'dismissed') {
          // React Hook: Toggle Android
          toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);
        }
      }

      // Check Platform: Android
      else if (Platform.OS === 'ios') {
        // Undefined
        if (newDate !== undefined) {
          // React Hook: Set Temp Date
          setTempDate(newDate);
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = () => {
    try {
      return (
        <RNDateTimePicker
          mode="date"
          value={tempDate ? tempDate : date}
          onChange={(event: any, newDate: any) => selectDate(event, newDate)}
        />
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Cancel
  const pressCancel = () => {
    try {
      // React Hook: Set Temp Date
      setTempDate(date);

      // Toggle Modal
      toggleModal();
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Done
  const pressDone = () => {
    try {
      // React Hook: Set Date
      setDate(tempDate);

      // Props: newValue
      props.newValue(tempDate);

      // Toggle Modal
      toggleModal();
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render Android Picker
  const renderAndroidPicker = () => {
    try {
      if (androidModalVisible === true) {
        return (
          <RNDateTimePicker
            mode="date"
            display={props.mode}
            value={date}
            onChange={(event: any, date: any) => selectDate(event, date)}
          />
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldTitleContainer}>
        <Text style={styles.fieldTitle}>{props.title === undefined ? 'Date' : props.title}</Text>
      </View>

      <TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
        <Text style={styles.fieldText} numberOfLines={1}>{moment(date).format('MMM Do, YYYY')}</Text>
      </TouchableOpacity>

      <View>{androidModalVisible === true ? renderAndroidPicker(): null}</View>

      <Modal
        isVisible={modalVisible}
        style={styles.modal}
        backdropOpacity={.30}
      >
        <View style={styles.modalContainer}>
          <View style={styles.pickerHeaderContainer}>
            <TouchableOpacity
              onPress={() => pressCancel()} >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <View style={styles.doneButton}>
              <Button
                onPress={() => pressDone()}
                title="Done"
                disabled={date === tempDate ? true : false}
              />
            </View>
          </View>

          <View style={styles.pickerContainer}>{renderIOSPicker()}</View>
        </View>
      </Modal>
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
    height: 45,
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
export default EditDateField;
