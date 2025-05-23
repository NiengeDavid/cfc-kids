import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productId", type: "string", title: "Product ID" },
            { name: "name", type: "string", title: "Product Name" },
            { name: "quantity", type: "number", title: "Quantity" },
            { name: "price", type: "number", title: "Price (NGN)" },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "totalAmount",
      title: "Total Amount (NGN)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "paymentReference",
      title: "Payment Reference",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isDelivered",
      title: "Delivered?",
      type: "boolean",
      initialValue: false,
      description: "Mark as delivered when order is fulfilled",
    }),
    defineField({
      name: "createdAt",
      title: "Order Date",
      type: "datetime",
      initialValue: new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "notes",
      title: "Order Notes",
      type: "text",
      description: "Any special instructions or notes about this order",
    }),
  ],
  orderings: [
    {
      title: "Newest First",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "createdAtAsc",
      by: [{ field: "createdAt", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      customerEmail: "customerEmail",
      totalAmount: "totalAmount",
      isDelivered: "isDelivered",
      createdAt: "createdAt",
    },
    prepare(selection) {
      const { customerEmail, totalAmount, isDelivered, createdAt } = selection;
      return {
        title: `${customerEmail}`,
        subtitle: `${new Date(createdAt).toLocaleDateString()} • NGN ${totalAmount.toFixed(2)} • ${isDelivered ? "✅ Delivered" : "🛒 Pending"}`,
        media: TagIcon,
      };
    },
  },
});
