export interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode; // Optional icon for future use
}

export interface NavbarProps {
  children: React.ReactNode;
  isProductPage?: boolean;
}

export interface ProductsNavbarProps {
  cartItemsCount?: number;
}
