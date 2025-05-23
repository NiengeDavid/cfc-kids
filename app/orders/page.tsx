import OrdersPage from "@/containers/ordersPage";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Orders",
  description: "Manage your orders here.",
};

export default function Orders() {
  return (
    <div className="w-full">
      <OrdersPage />
    </div>
  );
}
