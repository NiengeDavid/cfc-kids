import type { NextPage } from "next";
import type { Metadata } from "next";
import ShopPage from "@/containers/shopPage";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shining God's light to the world.",
};

const ProductsPage: NextPage = () => {
  return (
    <div className="w-full">
      <ShopPage />
    </div>
  );
};

export default ProductsPage;
