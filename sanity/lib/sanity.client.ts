import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from "@/sanity/lib/sanity.api";

import { createClient, type SanityClient } from "next-sanity";
import {
  getAllProductsQuery,
  getDiscountedProductsQuery,
  getProductBySlugQuery,
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
