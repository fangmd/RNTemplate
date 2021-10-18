import React from 'react';
import {Text, View, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import {styles} from './sytles';

interface Props {
  name: string;
}

export const MinePage: React.FC<Props> = ({name}) => {
  return (
    <SafeAreaView>
      <Text style={styles.header}>About</Text>
    </SafeAreaView>
  );
};
