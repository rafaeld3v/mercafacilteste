import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { AppScreenProps } from "@routes";
import { useAppSafeArea } from "@hooks";
import { useCart } from "../../../context/index";

export function ProductDetailsScreen({
  route,
  navigation,
}: AppScreenProps<"ProductDetails">) {
  const { addToCart } = useCart();
  const product = route.params;

  const handleAddToCart = () => {
    addToCart(product);
    navigation.navigate("Cart");
  };

  const { bottom } = useAppSafeArea();

  return (
    <SafeAreaView style={[styles.container, { paddingBottom: bottom }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#c1c2c3",
  },
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
  },
  infoContainer: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  buttonContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: "#2ecc71",
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
