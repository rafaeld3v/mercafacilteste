import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CartScreen, ProductDetailsScreen, ProductListScreen } from "@screens";
import { Product } from "@api";

export type AppStackParamList = {
  ProductList: undefined;
  ProductDetails: Product;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProductList"
      screenOptions={{
        /* headerShown: false, */
        fullScreenGestureEnabled: true,
        headerStyle: {
          backgroundColor: "#002040",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        headerBackButtonDisplayMode: "minimal",
      }}>
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: "Lista de Produtos" }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ title: "Detalhes do Produto" }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Carrinho" }}
      />
    </Stack.Navigator>
  );
}
