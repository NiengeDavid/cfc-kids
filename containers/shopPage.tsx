"use client";

import { useState, useEffect } from "react";
import ProductsNavbar from "@/components/productsNavbar";
import WelcomeCard from "@/components/welcomeCard";
import { readToken } from "@/sanity/lib/sanity.api";
import { getAvailableProducts, getClient } from "@/sanity/lib/sanity.client";
import { type Product } from "@/sanity/lib/sanity.queries";
import ProductCard from "@/components/productCard";
import ProductCardSkeleton from "@/components/productCardSkeleton";
import Container from "@/components/container";
import { toast } from "sonner";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const client = getClient({ token: readToken });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const discountedProducts = await getAvailableProducts(client);
        setProducts(discountedProducts);
        //console.log("Discounted Products:", discountedProducts);
      } catch (error) {
        //console.error("Error fetching products");
        toast("Network Error", {
          description:
            "Error fetching products; kindly check your internet connection.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // In a real app, this would come from your cart context or state
  const cartItemsCount = 5;

  return (
    <div className="min-h-screen bg-white">
      <ProductsNavbar />
      {/* Products page content */}
      <WelcomeCard />

      {/* Dynamic Products Sections */}
      {products.length > 0 &&
        Array.from(
          new Set(products.map((product) => product.categories?.title))
        ).map((categoryTitle) => (
          <section
            key={categoryTitle}
            id={`${categoryTitle.toLowerCase().replace(/\s+/g, "-")}-products`}
            className="mb-32"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-yellow-400 px-4 py-2 rounded-full">
                {categoryTitle} Products
              </span>
            </h2>

            {/* Products Grid */}
            <Container>
              <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {loading
                  ? Array.from({ length: 6 }).map((_, i) => (
                      <ProductCardSkeleton key={i} />
                    ))
                  : products
                      .filter(
                        (product) => product.categories.title === categoryTitle
                      )
                      .map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
              </div>
            </Container>
          </section>
        ))}
    </div>
  );
}
