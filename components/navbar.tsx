import Link from "next/link";
import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
  isProductPage?: boolean;
}

export default function Navbar({
  children,
  isProductPage = false,
}: NavbarProps) {
  return (
    <nav
      className={`bg-yellow-400 py-4 sticky top-0 z-50 shadow-md ${isProductPage ? "bg-yellow-500" : ""}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          CFC Kids
        </Link>
        {children}
      </div>
    </nav>
  );
}
