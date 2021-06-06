import React from 'react';
import { TextInput } from 'react-native';

import { style } from './styles';

const SearchBar = ({ onChangeText, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder || 'Search'}
      onChangeText={onChangeText}
      returnKeyType={'search'}
      autoCapitalize={'none'}
      style={style.textInput}
    />
  );
};

export default SearchBar;
