"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cartContext";
import { Button } from "./ui/button";
import Navbar from "./navbar";

export default function ProductsNavbar() {
  const { cartItemsCount, toggleCart, isCartOpen } = useCart();

  return (
    <Navbar isProductPage>
      <div className="flex items-center space-x-6">
        <Button variant="ghost" asChild>
          <a href="/" className="font-bold hover:text-orange-500">
            Back to Home
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="relative bg-transparent cursor-pointer border-black/50 hover:bg-orange-500"
          onClick={toggleCart}
        >
          <ShoppingCart className="h-5 w-5" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </Button>
      </div>
    </Navbar>
  );
}
