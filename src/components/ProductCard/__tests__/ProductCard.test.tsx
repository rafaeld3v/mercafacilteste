import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ProductCard } from "../ProductCard";

describe("ProductCard", () => {
  const mockProduct = {
    id: 1,
    name: "Test Product",
    price: 99.99,
    image: "test-image.jpg",
    description: "Test Description",
  };

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <ProductCard product={mockProduct} onPress={() => {}} />,
    );

    expect(getByText("Test Product")).toBeTruthy();
    expect(getByText(/R\$ 99\.99/)).toBeTruthy();
    expect(getByTestId("product-image")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ProductCard product={mockProduct} onPress={onPressMock} />,
    );

    fireEvent.press(getByTestId("product-card"));
    expect(onPressMock).toHaveBeenCalled();
  });
});
