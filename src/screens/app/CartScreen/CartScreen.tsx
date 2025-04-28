import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { AppScreenProps } from "@routes";
import { useAppSafeArea } from "@hooks";
import { useCart } from "../../../context/index";

export function CartScreen({}: AppScreenProps<"Cart">) {
  const { items, removeFromCart, updateQuantity, getTotal } = useCart();

  const buttonDisabled = items.length <= 0;

  const { bottom } = useAppSafeArea();

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => updateQuantity(item.id, item.quantity - 1)}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => updateQuantity(item.id, item.quantity + 1)}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromCart(item.id)}>
        <Text style={styles.removeButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { paddingBottom: bottom }]}>
      <View style={styles.content}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R$ {getTotal().toFixed(2)}</Text>
      </View>
      <View style={styles.totalContainer}>
        <TouchableOpacity
          style={[styles.button, buttonDisabled && styles.buttonDisabled]}
          onPress={() => {}}
          disabled={buttonDisabled}>
          <Text style={styles.buttonText}>Finalizar compra</Text>
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
  content: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: "#2ecc71",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  quantityButton: {
    backgroundColor: "#f0f0f0",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    padding: 8,
    borderRadius: 4,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 12,
  },
  totalContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#c1c2c3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
