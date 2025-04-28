import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "@api";

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID="product-card">
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        testID="product-image"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 4,
    marginBottom: 8,
    resizeMode: "contain",
  },
  infoContainer: {
    padding: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },
});
