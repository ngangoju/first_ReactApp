import React from "react";
import { View, ListView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});

class ListViewDemo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Kalisa" },
            { key: "Kamali" },
            { key: "Uwase" },
            { key: "James" },
            { key: "John" },
            { key: "Matt" },
            { key: "Emmi" },
            { key: "Jules" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default ListViewDemo;
