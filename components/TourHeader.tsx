import Link from "next/link";
import Image from "next/image";
import { UsersIcon, MapPinIcon } from "./Icons";

export default function TourHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Travelshop"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <Link href="#" className="hover:text-[#854EC9]">Home</Link>
          <Link href="#" className="hover:text-[#854EC9]">Tours</Link>
          <Link href="#" className="hover:text-[#854EC9]">Deals</Link>
          <Link href="#" className="hover:text-[#854EC9]">About</Link>
          <Link href="#" className="hover:text-[#854EC9]">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#854EC9]">
             <UsersIcon className="h-4 w-4" />
             <span>Log in</span>
          </button>
          <button className="bg-[#854EC9] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#703db5] transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
