"use client";

import { useState, useEffect } from "react";

// Extend the Window interface to include PaystackPop
declare global {
  interface Window {
    PaystackPop?: any;
  }
}
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export function CartModal() {
  const {
    isCartOpen,
    toggleCart,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  const router = useRouter();

  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleProceedToCheckout = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setShowEmailModal(false);
    handlePaystackPayment();
  };

  const handlePaystackPayment = () => {
    setIsProcessing(true);

    // Close the cart and email modals
    toggleCart(); // Close the cart modal
    setShowEmailModal(false);

    // Load Paystack inline JS dynamically
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => {
      if (typeof window.PaystackPop === "undefined") {
        console.error("PaystackPop is not defined");
        setIsProcessing(false);
        return;
      }

      // Initialize PaystackPop using the correct API
      const paystack = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY, // Your public key
        email,
        amount: cartTotal * 100, // Convert to kobo
        currency: "NGN",
        callback: (response: any) => {
          //console.log("Payment successful:", response);
          handlePaymentSuccess();
        },
        onClose: () => {
          console.log("Payment window closed");
          setIsProcessing(false);
        },
      });

      paystack.openIframe(); // Open the Paystack payment modal
    };
    script.onerror = () => {
      console.error("Failed to load Paystack script");
      setIsProcessing(false);
    };
    document.body.appendChild(script);
  };

  const handlePaymentSuccess = () => {
    console.log("Payment successful!");
    // Optionally redirect to a success page
    router.push("/success");
  };

  return (
    <Dialog open={isCartOpen} onOpenChange={toggleCart}>
      <DialogContent className="sm:max-w-lg h-[90vh] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            Your Shopping Cart
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleCart}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {/* ... existing cart items rendering ... */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-lg text-gray-500 mb-4">Your cart is empty</p>
              <Button onClick={toggleCart}>Continue Shopping</Button>
            </div>
          ) : (
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li key={item._id} className="py-4 flex">
                  <div className="relative h-24 w-24 rounded-md overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => removeFromCart(item._id)}
                      >
                        <X className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>

                    <p className="mt-1 text-sm">
                      $
                      {item.discountPrice
                        ? item.discountPrice.toFixed(2)
                        : item.price.toFixed(2)}
                    </p>

                    <div className="flex items-end justify-between mt-4">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item._id, item.quantity - 1)
                          }
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item._id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </div>

                      <p className="font-medium">
                        $
                        {(
                          (item.discountPrice || item.price) * item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-medium mb-4">
              <span>Subtotal</span>
              <span>NGN {cartTotal.toFixed(2)}</span>
            </div>
            <Button
              onClick={() => setShowEmailModal(true)}
              className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}

        {/* Email Collection Modal */}
        <Dialog open={showEmailModal} onOpenChange={setShowEmailModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Enter Your Email</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  className="col-span-3"
                  placeholder="your@email.com"
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm text-center">{emailError}</p>
              )}
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setShowEmailModal(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleProceedToCheckout} disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Continue to Payment"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}
