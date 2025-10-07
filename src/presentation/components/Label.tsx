import React from 'react';
import { FlatList, Text, View } from 'react-native';

const Label = () => {
  return (
    <View>
      <FlatList
        data={[{ key: 1 }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={({ key }, index) => key + index.toString()}
      />
      <Text>Este es un ejemplo de un text</Text>
    </View>
  );
};

export default Label;
