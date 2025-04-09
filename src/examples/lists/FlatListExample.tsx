import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

type FlatListExampleProps = {
  length: number;
}

const FlatListExample: React.FC<FlatListExampleProps> = ({ length }) => {
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
    <FlatList
      data={data}
      keyExtractor={(item) => item.id} // helps React efficiently identify which items have changed, been added, or removed, reducing unnecessary re-renders.
      renderItem={renderItem}
      initialNumToRender={10} // Reduces the initial rendering load by limiting the number of items rendered at the start.
      maxToRenderPerBatch={10} // how many items are rendered at a time
      windowSize={5} // how many items are kept in memory around the visible area.
      removeClippedSubviews={true} // improves memory efficiency by removing items that are not visible.
      updateCellsBatchingPeriod={50} // how often the cells are updated in batches.
      getItemLayout={(data, index) => ({ // helps the FlatList to calculate the height of each item in advance, improving performance.
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
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

export default FlatListExample;
