import React, { useState } from "react";
import {
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import { products } from "@api";
import { ProductCard } from "@components";
import { AppScreenProps } from "@routes";

import CartPNG from "../../../assets/images/cart.png";

export function ProductListScreen({
  navigation,
}: AppScreenProps<"ProductList">) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleProductPress = (product: (typeof products)[0]) => {
    navigation.navigate("ProductDetails", product);
  };

  const handleCartPress = () => {
    navigation.navigate("Cart");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produtos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleProductPress(item)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
        <Image source={CartPNG} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  listContainer: {
    padding: 8,
  },
  cartButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "#4CAF50",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
