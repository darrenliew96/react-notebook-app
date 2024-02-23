import React, { useState } from 'react';
import { Button, FlatList, Text, View, StyleSheet } from 'react-native';

export default function NotesScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: notes.length, text: 'New note' }]);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Note" onPress={addNote} />
      <View>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text onPress={() => navigation.navigate('Note', { id: item.id })}>
            {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    padding: 5,
    margin: 5,
    borderWidth: 5,
    borderRadius: 5,
    backgroundColor: 'beige',}
});
