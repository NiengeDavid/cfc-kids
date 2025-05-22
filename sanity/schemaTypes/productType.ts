import { defineField, defineType } from "sanity";
import { TagsIcon } from "@sanity/icons";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TagsIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      description: "Name of the food item (e.g., Chocolate Chip Cookies)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      description: "URL-friendly identifier",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Price in USD",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "discountPrice",
      title: "Discount Price",
      type: "number",
      description: "Special sale price (leave empty if not on sale)",
      validation: (Rule) => Rule.positive().min(0),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short description of the food item",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Appetizing photo of the food item",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isAvailable",
      title: "Currently Available?",
      type: "boolean",
      description: "Is this item currently being sold?",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      price: "price",
      discountPrice: "discountPrice",
    },
    prepare(selection) {
      const { title, media, price, discountPrice } = selection;
      const priceText = discountPrice
        ? `$${discountPrice} (was $${price})`
        : `$${price}`;

      return {
        title,
        media,
        subtitle: priceText,
      };
    },
  },
});
