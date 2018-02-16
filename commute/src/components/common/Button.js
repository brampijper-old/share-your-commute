import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, children02 }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      {children02}
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 0.95,
    alignSelf: 'stretch', 
    backgroundColor: '#fff',  
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 20
  }
};

export { Button };
