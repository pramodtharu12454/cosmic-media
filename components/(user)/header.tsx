"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger icon
import { cn } from "@/lib/utils";
import SubscribeModal from "./suscribe";

// ✅ NavLink Component
function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-all duration-300 relative group",
        isActive
          ? "text-primary underline underline-offset-4"
          : "text-gray-700 hover:text-primary hover:scale-105"
      )}
    >
      {children}
    </Link>
  );
}

// ✅ Navbar Component
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-lg bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Cosmic Logo" width={160} height={50} />
        </Link>

        {/* Middle: NavLinks (Desktop) */}
        <nav className="hidden md:flex gap-8">
          <NavLink href="/"> Cosmic TV</NavLink>
          <NavLink href="/about">About Us</NavLink>
        </nav>

        {/* Right: Subscribe Button */}
        <div className="hidden md:block">
          <SubscribeModal />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full">
          <nav className="flex flex-col gap-4 p-4">
            <NavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Cosmic TV
            </NavLink>
            <NavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </NavLink>
            <SubscribeModal />
          </nav>
        </div>
      )}
    </header>
  );
}
