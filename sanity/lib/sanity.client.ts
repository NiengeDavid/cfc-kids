import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from "@/sanity/lib/sanity.api";

import { createClient, type SanityClient } from "next-sanity";
import {
  CreateOrderParams,
  GET_ORDERS_QUERY,
  getAllProductsQuery,
  getDiscountedProductsQuery,
  getProductBySlugQuery,
  Order,
  type Product,
} from "./sanity.queries";

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });

  // If preview is provided and has a token, return a client with the token
  if (preview?.token) {
    return client.withConfig({
      token: preview.token,
    });
  }

  // Otherwise, return the default client
  return client;
}

export const getSanityImageConfig = () => getClient();

// Fetch all available products
export async function getAvailableProducts(
  client: SanityClient
): Promise<Product[]> {
  return await client.fetch(getAllProductsQuery);
}

// Fetch discounted products
export async function getDiscountedProducts(
  client: SanityClient
): Promise<Product[]> {
  return await client.fetch(getDiscountedProductsQuery);
}

// Fetch single product by slug
export async function getProductBySlug(
  client: SanityClient,
  slug: string
): Promise<Product> {
  return await client.fetch(getProductBySlugQuery, { slug });
}

// Fetch all orders
export async function getAllOrders(client: SanityClient): Promise<Order[]> {
  return await client.fetch(GET_ORDERS_QUERY);
}

// update order delivery status
export async function updateOrderDeliveryStatus(
  client: SanityClient,
  orderId: string,
  isDelivered: boolean
): Promise<void> {
  try {
    await client.patch(orderId).set({ isDelivered }).commit();
    console.log(`Order ${orderId} updated successfully`);
  } catch (error) {
    console.error("Error updating order delivery status:", error);
    throw new Error("Failed to update order delivery status");
  }
}

// Create a new order
export async function createOrder(
  client: SanityClient,
  {
    customerEmail,
    items,
    totalAmount,
    paymentReference,
    notes = "",
  }: CreateOrderParams
) {
  try {
    const orderDoc = {
      _type: "order",
      customerEmail,
      items,
      totalAmount,
      paymentReference,
      isDelivered: false, // Default value
      createdAt: new Date().toISOString(),
      notes,
    };

    const result = await client.create(orderDoc);
    console.log("Order created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order");
  }
}
