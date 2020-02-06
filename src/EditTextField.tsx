// Imports: Dependencies
import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Screen: Edit Profile Field
const EditProfileField = (props) => {

  // Text Input: Reference
  const textInputRef = React.createRef();

  // Props
  const { ...otherProps } = props;

  return (
    <View style={styles.container}>
      <View style={styles.fieldTitleContainer}>
        <Text style={styles.fieldTitle}>{props.title}</Text>
      </View>

      <View style={styles.fieldTextContainer}>
        <TextInput
          ref={textInputRef}
          style={styles.fieldText}
          {...otherProps}
        >
        </TextInput>
      </View>
    </View>
  )
};

// Styles
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: width - 16,
    height: 55,
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // marginBottom: 7,
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
});

// Exports
export default EditProfileField;
