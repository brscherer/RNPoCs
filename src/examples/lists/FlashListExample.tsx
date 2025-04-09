import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';

type FlashListExampleProps = {
  length: number;
};

const FlashListExample: React.FC<FlashListExampleProps> = ({ length }) => {
  const data = Array.from({ length }, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
  }));

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <FlashList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      estimatedItemSize={ITEM_HEIGHT} // Required for FlashList to optimize performance
    />
  );
};

const ITEM_HEIGHT = 50;

const styles = StyleSheet.create({
  itemContainer: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default FlashListExample;
