"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Gift, Star, Smile } from "lucide-react";
import Link from "next/link";
import Confetti from "./confetti";
import { ShopDecorations } from "./shop-decorations";

export default function WelcomeCard() {
  const [showConfetti, setShowConfetti] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {showConfetti && <Confetti />}
      <ShopDecorations />

      {/* Special Offer Banner */}
      <div className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-6 flex items-center justify-center gap-2 animate-pulse">
        <Gift className="h-5 w-5" />
        <span className="font-bold">SPECIAL OFFER:</span>
        <span>First 50 orders get free Bible stickers!</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">Ends in 2 days!</span>
      </div>

      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-yellow-400 to-orange-400 border-0 shadow-lg mb-12 overflow-hidden relative">
        <div className="absolute -top-4 -right-4 bg-white/20 rounded-full p-4">
          <Star className="w-8 h-8 text-white fill-white" />
        </div>
        <div className="absolute -bottom-4 -left-4 bg-white/20 rounded-full p-4">
          <Smile className="w-8 h-8 text-white fill-white" />
        </div>
        <CardHeader>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Happy Children's Day! 🎉
          </h1>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl text-white mb-4">
            You're the <span className="font-bold underline">BEST</span>{" "}
            parent/guardian!
          </p>
          <p className="text-white/90 mb-6">
            Celebrate with our special collection of faith-filled goodies at
            <span className="font-bold"> discounted prices!</span>
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="secondary"
              className="bg-white text-orange-500 hover:bg-white/90 shadow-md"
              asChild
            >
              <Link href="#discounted-products">
                <Gift className="mr-2 h-4 w-4" />
                View Discounts
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Rocket className="mr-2 h-4 w-4" />
              New Arrivals
            </Button>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-white/80">
            Limited time offers • Free stickers with every purchase
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
