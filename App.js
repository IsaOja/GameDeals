import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import HomeView from "./src/views/HomeView";
import BestDealsView from "./src/views/BestDealsView";
import SearchView from "./src/views/SearchView";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Game Deals</Text>
      </SafeAreaView>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BestDeals"
          component={BestDealsView}
          options={{
            title: "Best Deals",
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchView}
          options={{
            title: "Search Games",
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.footerText}>Contact</Text>
        <Text style={styles.footerText}>Q & A</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#333",
    padding: 16,
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#333",
    padding: 16,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
  },
});
