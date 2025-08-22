import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeView() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("BestDeals")}
        >
          <View style={styles.cardTitle}>
            <Text style={styles.title}>Best Deals</Text>
          </View>
          <View style={styles.cardButton}>
            <Text style={styles.buttonText}>Click me</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Search")}
        >
          <View style={styles.cardTitle}>
            <Text style={styles.title}>Search</Text>
          </View>
          <View style={styles.cardButton}>
            <Text style={styles.buttonText}>Click me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#6b6b6bff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    width: "80%",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  cardTitle: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  cardButton: {
    backgroundColor: "#333",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
