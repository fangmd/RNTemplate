import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import {styles} from './sytles';

interface Props {
  name: string;
}

export const HomePage: React.FC<Props> = ({name}) => {
  const navigation = useNavigation();

  const toSecond = () => {
    console.log('12');
  };

  return (
    <SafeAreaView>
      <Text style={styles.header}>Home</Text>

      <TouchableOpacity onPress={toSecond}>
        <Text style={styles.header}>To Second</Text>
      </TouchableOpacity>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
      <View style={styles.box} />
    </SafeAreaView>
  );
};
