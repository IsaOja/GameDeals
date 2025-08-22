import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Search from "../components/Search";

export default function SearchView() {
  return (
    <View style={styles.container2}>
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: "#6b6b6bff",
  },
});
