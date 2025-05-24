import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
  isProductPage?: boolean;
}

const logo = "/assets/logo.png"; // Update with your actual logo path

export default function Navbar({
  children,
  isProductPage = false,
}: NavbarProps) {
  return (
    <nav
      className={`bg-yellow-400 py-4 sticky top-0 z-50 shadow-md ${isProductPage ? "bg-yellow-500" : ""}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="CFC Kids Logo"
            width={32}
            height={32}
            className="mr-2 h-8 w-8 rounded-full shadow"
          />
          <span className="text-2xl font-bold text-gray-800">CFC Kids</span>
        </Link>
        {children}
      </div>
    </nav>
  );
}
