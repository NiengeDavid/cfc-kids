import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { type Product } from "@/sanity/lib/sanity.queries";
import { useCart } from "@/context/cartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      imageUrl: product.image.url,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart(); // Add to cart first
    toggleCart(); // Then open the cart modal
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
      {/* Product Image */}
      <div className="relative aspect-square">
        <Image
          src={product.image.url}
          alt={product.image.alt || product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority
        />
        {product.discountPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            SALE!
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            {product.discountPrice ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-red-500">
                  NGN {product.discountPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  NGN {product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="font-bold text-lg">
                NGN {product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-yellow-900"
            size="sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button
            onClick={handleBuyNow}
            variant="outline"
            size="sm"
            className="flex-1 border border-yellow-400 text-yellow-900"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
