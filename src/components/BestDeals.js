import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import axios from "axios";

export default function BestDeals({ maxPrice = 15 }) {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function getDeals() {
      try {
        const storesRes = await axios.get(
          "https://www.cheapshark.com/api/1.0/stores"
        );
        const stores = storesRes.data;

        const dealsRes = await axios.get(
          `https://www.cheapshark.com/api/1.0/deals?upperPrice=${maxPrice}&sortBy=DealRating`
        );
        const getDeals = dealsRes.data;

        const dealsWithStore = getDeals.map((deal) => {
          const foundStore = stores.find(
            (store) => store.storeID === deal.storeID
          );
          return {
            ...deal,
            store: foundStore ? foundStore.storeName : "Unknown",
          };
        });

        setDeals(dealsWithStore);
      } catch (error) {
        console.log(error);
      }
    }
    getDeals();
  }, [maxPrice]);

  return (
    <ScrollView style={styles.games}>
      {deals.map((deal) => (
        <View style={styles.game} key={deal.dealID}>
          <View style={styles.gameThumb}>
            <Image
              style={styles.gameImg}
              source={{ uri: deal.thumb }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.gameTitle}>
            <Text style={styles.gameGameTitle}>{deal.title}</Text>
          </View>
          <View style={styles.gamePrice}>
            <Text style={styles.gameNormalPrice}>${deal.normalPrice}</Text>
            <Text style={styles.gameSalesPrice}>${deal.salePrice}</Text>
            <Text style={styles.gameSavings}>{Math.round(deal.savings)}%</Text>
          </View>
          <View style={styles.gameStores}>
            <Text style={styles.gameStore}>{deal.store}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
