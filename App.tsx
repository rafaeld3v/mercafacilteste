import React from "react";
import { Routes } from "@routes";
import { CartProvider } from "./src/context/index";

export default function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}
