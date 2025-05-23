"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";
import { Order } from "@/sanity/lib/sanity.queries";
import {
  getClient,
  getAllOrders,
  updateOrderDeliveryStatus,
} from "@/sanity/lib/sanity.client";
import { writeToken } from "@/sanity/lib/sanity.api";
import LandingNavbar from "@/components/landingNavbar";
import { toast } from "sonner";

export default function OrdersPage() {
  const client = getClient({ token: writeToken });
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getAllOrders(client);
        setOrders(ordersData);
      } catch (error) {
        //console.error("Error fetching orders:", error);
        toast.error("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateDeliveryStatus = async (
    orderId: string,
    isDelivered: boolean
  ) => {
    try {
      await updateOrderDeliveryStatus(client, orderId, isDelivered);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, isDelivered } : order
        )
      );
      //console.log(`Order ${orderId} marked as delivered`);
      toast.success(
        `Order ${orderId.slice(-6).toUpperCase()} marked as delivered`
      );
    } catch (error) {
      //console.error("Error updating order:", error);
      toast.error("Failed to update order delivery status");
    }
  };

  if (loading) {
    return (
      <div className="">
        <LandingNavbar />
        <div className="container mx-auto py-8 text-center">
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <LandingNavbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Orders Management</h1>

        <Table className="border border-gray-300">
          <TableCaption>A list of recent orders</TableCaption>
          <TableHeader>
            <TableRow className="border-b border-gray-300">
              <TableHead className="border-r border-gray-300">
                Order ID
              </TableHead>
              <TableHead className="border-r border-gray-300">
                Customer Email
              </TableHead>
              <TableHead className="border-r border-gray-300">Items</TableHead>
              <TableHead className="border-r border-gray-300">Total</TableHead>
              <TableHead className="border-r border-gray-300">Date</TableHead>
              <TableHead className="border-r border-gray-300">Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id} className="border-b border-gray-300">
                <TableCell className="font-medium border-r border-gray-300">
                  {order._id.slice(-6).toUpperCase()}
                </TableCell>
                <TableCell className="border-r border-gray-300">
                  {order.customerEmail}
                </TableCell>
                <TableCell className="border-r border-gray-300">
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-gray-600">
                          × {item.quantity}
                        </span>
                        <span className="text-sm text-gray-800">
                          NGN {item.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="border-r border-gray-300">
                  NGN {order.totalAmount.toFixed(2)}
                </TableCell>
                <TableCell className="border-r border-gray-300">
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="border-r border-gray-300">
                  {order.isDelivered ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle2 className="mr-1 h-4 w-4" /> Delivered
                    </span>
                  ) : (
                    <span className="flex items-center text-yellow-600">
                      <XCircle className="mr-1 h-4 w-4" /> Pending
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {!order.isDelivered && (
                    <Button
                      size="sm"
                      onClick={() => updateDeliveryStatus(order._id, true)}
                      className="cursor-pointer"
                    >
                      Mark Delivered
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
