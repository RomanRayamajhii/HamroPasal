"use client"
import Link from 'next/link'
import { ShoppingBag, Store, ShoppingCart, Package, UserCircle2, Menu, X } from 'lucide-react'
import { useState } from 'react'

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navbar = [
    { name: "Store", href: "/", icon: Store },
    { name: "Cart", href: "/cart", icon: ShoppingCart },
    { name: "Order", href: "/order", icon: Package },
    { name: "Profile", href: "/profile", icon: UserCircle2 },
  ]

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center w-full">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <ShoppingBag className="bg-emerald-500 text-white p-2 rounded-xl size-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col justify-center items-start">
              <h2 className="text-xl font-bold text-emerald-600 leading-tight">HamroPasal</h2>
              <p className="text-xs text-slate-400 font-medium">Local Kirana Store</p>
            </div>
          </Link>
        </div>


      {/* Desktop Navigation Links */}
<ul className="items-center gap-1 md:flex hidden bg-gray-100 p-1 rounded-full border border-gray-200">
  {navbar.map((item) => {
    const ItemIcon = item.icon
    return (
      <li key={item.name}>
        <Link 
          href={item.href} 
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white  px-4 py-1.5 rounded-full transition-all font-medium border border-transparent hover:border-gray-200/80 hover:shadow-sm"
        >
          <ItemIcon className="w-4 h-4" />
          <span>{item.name}</span>
        </Link>
      </li>
    )
  })}
</ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-700 hover:text-emerald-600 md:hidden rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 shadow-lg z-30 animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-1">
            {navbar.map((item) => {
              const ItemIcon = item.icon
              return (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/60 px-3 py-2.5 rounded-xl transition-colors font-medium"
                  >
                    <ItemIcon className="w-4 h-4 text-emerald-500" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}