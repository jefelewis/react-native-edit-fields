// Imports: Dependencies
import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  title: string;
  currentValue: string;
  newValue: (text: string | number) => string | number | void;
}

// Component: Edit Profile Field
const EditProfileField = (props: Props) => {

  // Text Input: Reference
  const textInputRef: React.RefObject<TextInput> = React.createRef();

  // Props
  const { title, ...otherProps } = props;

  // Handle Change
  const handleChange = (text: string | number) => {
    try {
      props.newValue(text);
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldTitleContainer}>
        <Text style={styles.fieldTitle} numberOfLines={1}>{title}</Text>
      </View>

      <View style={styles.fieldTextContainer}>
        <TextInput
          ref={textInputRef}
          style={styles.fieldText}
          clearButtonMode="while-editing"
          onChangeText={handleChange}
          {...otherProps}
        >
          {props.currentValue}
        </TextInput>
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
    width: width - 130 - 32,
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
