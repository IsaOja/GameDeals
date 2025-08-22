import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function SearchView() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchGame, setSearchGame] = useState("");

  useEffect(() => {}, [searchGame]);

  const gameSearch = async () => {
    try {
      const storesRes = await axios.get(
        "https://www.cheapshark.com/api/1.0/stores"
      );
      const stores = storesRes.data;
      const searchRes = await axios.get(
        `https://www.cheapshark.com/api/1.0/deals?title=${searchGame}&sortBy=Title`
      );
      const searchData = searchRes.data;

      const searchWithStore = searchData.map((search) => {
        const foundStore = stores.find(
          (store) => store.storeID === search.storeID
        );
        return {
          ...search,
          store: foundStore ? foundStore.storeName : "Unknown",
        };
      });
      setSearchResults(searchWithStore);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.games}>
      <View>
        <View>
          <TextInput
            style={styles.searchInput}
            value={searchGame}
            onChangeText={setSearchGame}
            placeholder="Type to search..."
          />
          <TouchableOpacity style={styles.searchButton} onPress={gameSearch}>
            <Text style={{ color: "#fff" }}>Click me to Search</Text>
          </TouchableOpacity>
        </View>
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
      </View>
      {searchResults.map((search) => (
        <View style={styles.game} key={search.searchID}>
          <View style={styles.gameThumb}>
            <Image
              style={styles.gameImg}
              source={{ uri: search.thumb }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.gameTitle}>
            <Text style={styles.gameGameTitle}>{search.title}</Text>
          </View>
          <View style={styles.gamePrice}>
            <Text style={styles.gameNormalPrice}>${search.normalPrice}</Text>
            <Text style={styles.gameSalesPrice}>${search.salePrice}</Text>
            <Text style={styles.gameSavings}>
              {Math.round(search.savings)}%
            </Text>
          </View>
          <View style={styles.gameStores}>
            <Text style={styles.gameStore}>{search.store}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: "#6b6b6bff",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  searchButton: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
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

  games: {
    flex: 1,
  },
  game: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#333",
    borderRadius: 8,
  },
  gameThumb: {
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },
  gameImg: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#dddddd00",
  },
  gameTitle: {
    flex: 2,
    justifyContent: "center",
  },
  gameGameTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#c5c5c5ff",
  },
  gamePrice: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  gameNormalPrice: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
  },
  gameSalesPrice: {
    fontSize: 16,
    color: "#c5c5c5ff",
    fontWeight: "bold",
  },
  gameSavings: {
    fontSize: 14,
    color: "#28a745",
  },
  gameStores: {
    flex: 1,
    alignItems: "center",
  },
  gameStore: {
    fontSize: 10,
    color: "#c5c5c5ff",
  },
});
