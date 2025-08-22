import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BestDeals from "../components/BestDeals";

export default function BestDealsView() {
  return (
    <View style={styles.container2}>
      <View style={styles.head}>
        <View style={styles.headThumb}>
          <Text style={styles.headText}>Thumbnail</Text>
        </View>
        <View style={styles.headTitle}>
          <Text style={styles.headText}>Title</Text>
        </View>
        <View style={styles.headPrice}>
          <Text style={styles.headText}>Price</Text>
        </View>
        <View style={styles.headStores}>
          <Text style={styles.headText}>Store</Text>
        </View>
      </View>
      <BestDeals />
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: "#6b6b6bff",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headThumb: {
    flex: 1,
    alignItems: "center",
  },
  headTitle: {
    flex: 1,
    alignItems: "center",
  },
  headPrice: {
    flex: 1,
    alignItems: "center",
  },
  headStores: {
    flex: 1,
    alignItems: "center",
  },
  headText: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
