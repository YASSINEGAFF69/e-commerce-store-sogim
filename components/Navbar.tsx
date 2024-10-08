"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  // Reference to the footer section, with the type HTMLDivElement | null
  const footerRef = useRef<HTMLDivElement | null>(null);

  const scrollToFooter = () => {
    // Check if the footerRef is assigned and scroll to it
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={38} height={10} />
        </Link>

        <div className="flex gap-7 text-base-bold max-lg:hidden">
          <Link
            href="/"
            className={`hover:text-sky-300 ${pathname === "/" && "text-sky-300"}`}
          >
            Acceuil
          </Link>
          <Link
            href={user ? "/wishlist" : "/sign-in"}
            className={`hover:text-sky-300 ${pathname === "/wishlist" && "text-sky-300"}`}
          >
            Favoris
          </Link>
          {/* Contact link */}
         
        </div>

        <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
          <input
            className="outline-none max-sm:max-w-[120px]"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            disabled={query === ""}
            onClick={() => router.push(`/search/${query}`)}
          >
            <Search className="cursor-pointer h-4 w-4 hover:text-sky-300" />
          </button>
        </div>

        <div className="relative flex gap-3 items-center">
          <Link
            href="/cart"
            className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
          >
            <ShoppingCart />
            <p className="text-base-bold"> ({cart.cartItems.length})</p>
          </Link>

          <Menu
            className="cursor-pointer lg:hidden"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />

          {dropdownMenu && (
            <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
              <Link href="/" className="hover:text-sky-300">
              acceuil 
              </Link>
              <Link
                href={user ? "/wishlist" : "/sign-in"}
                className="hover:text-sky-300"
              >
                 favoris
              </Link>
              
              
              <Link
                href="/cart"
                className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
              >
                <ShoppingCart />
                <p className="text-base-bold"> ({cart.cartItems.length})</p>
              </Link>
            </div>
          )}

          {user ? (
            <UserButton afterSignOutUrl="/sign-in" />
          ) : (
            <Link href="/sign-in">
              <CircleUserRound />
            </Link>
          )}
        </div>
      </div>

      {/* Footer component with the ref passed down */}
      
    </>
  );
};

export default Navbar;
