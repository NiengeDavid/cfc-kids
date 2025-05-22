"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useCart } from "@/context/cartContext";
import { runFireworks } from "../../lib/utils";
import ProductsNavbar from "@/components/productsNavbar";
import { CheckCircle2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    runFireworks();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ProductsNavbar />

      <div className="flex-1 flex items-center justify-center bg-[#fdf6e3] p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden border border-yellow-200">
          <div className="bg-yellow-400 p-6 text-center">
            <CheckCircle2 className="h-16 w-16 text-white mx-auto" />
          </div>

          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Thank you for your order!
            </h2>
            <p className="text-gray-600 mb-4">
              Your payment was successful and your treats will be ready soon!
            </p>
            <p className="text-sm text-gray-500 mb-6">
              A receipt has been sent to your email. For any questions, contact{" "}
              <a
                href="mailto:kidschurch@example.com"
                className="text-yellow-600 hover:underline"
              >
                kidschurch@example.com
              </a>
            </p>

            <div className="mt-6">
              <Button
                asChild
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900"
              >
                <Link href="/shop">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Back to Shop
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} CFCKids Church Ministry. All treats
              made with love!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
