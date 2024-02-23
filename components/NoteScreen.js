import React from 'react';
import { Text, View, TextInput } from 'react-native';

export default function NoteScreen({ route, navigation }) {
  const { id } = route.params;

  return (
    <View>
      <Text>Note {id}</Text>
      <TextInput
        multiline
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
      />
    </View>
  );
}