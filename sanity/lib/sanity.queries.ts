import { groq } from "next-sanity";

// Base product fields
const productFields = groq`
  _id,
  _type,
  _createdAt,
  name,
  "slug": slug.current,
  price,
  categories->{
    "title": title,
    "slug": slug.current
  },
  discountPrice,
  description,
  "image": image{
    "url": asset->url,
    "alt": alt
  },
  isAvailable
`;

// Get all available products
export const getAllProductsQuery = groq`
  *[_type == "product" && isAvailable == true] | order(_createdAt asc) {
    ${productFields}
  }
`;

// Get discounted products
export const getDiscountedProductsQuery = groq`
  *[_type == "product" && isAvailable == true && defined(discountPrice)] | order(_createdAt desc) {
    ${productFields}
  }
`;

// Get product by slug
export const getProductBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    ${productFields}
  }
`;

export const GET_ORDERS_QUERY = `
  *[_type == "order"] | order(createdAt desc) {
    _id,
    customerEmail,
    items[] {
      productId,
      name,
      quantity,
      price
    },
    totalAmount,
    paymentReference,
    isDelivered,
    createdAt,
    notes
  }
`;

export interface SanityImage {
  url: string;
  alt?: string;
}

export interface Product {
  _id: string;
  _type: "product";
  _createdAt: string;
  name: string;
  slug: string;
  price: number;
  categories: {
    title: string;
    slug: string;
  };
  discountPrice?: number;
  description: string;
  image: SanityImage;
  isAvailable?: boolean;
}

export interface CartItem extends Omit<Product, "image"> {
  quantity: number;
  imageUrl: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface CreateOrderParams {
  customerEmail: string;
  items: OrderItem[];
  totalAmount: number;
  paymentReference: string;
  notes?: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  _id: string;
  customerEmail: string;
  items: OrderItem[];
  totalAmount: number;
  paymentReference: string;
  isDelivered: boolean;
  createdAt: string;
  notes?: string;
}
