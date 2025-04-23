import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { View, TouchableOpacity, Text } from "react-native";
import { CartProvider, useCart } from "../CartContext";

const TestComponent = () => {
  const { addToCart, removeFromCart, items } = useCart();

  return (
    <View>
      <TouchableOpacity
        testID="add-button"
        onPress={() =>
          addToCart({
            id: 1,
            name: "Test Product",
            price: 99.99,
            image: "test-image.jpg",
            description: "Test Description",
          })
        }>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="remove-button"
        onPress={() => removeFromCart(1)}>
        <Text>Remove from Cart</Text>
      </TouchableOpacity>
      <Text testID="cart-count">{items.length}</Text>
    </View>
  );
};

describe("CartContext", () => {
  it("adds and removes items from cart", () => {
    const { getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    // Test adding to cart
    fireEvent.press(getByTestId("add-button"));
    expect(getByTestId("cart-count")).toHaveTextContent("1");

    // Test removing from cart
    fireEvent.press(getByTestId("remove-button"));
    expect(getByTestId("cart-count")).toHaveTextContent("0");
  });
});
