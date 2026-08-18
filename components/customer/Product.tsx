import React from 'react'
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react' 
import Image from 'next/image'


const StoreFrontProduct = () => {
  const products = [
    {
      id: "1",
      name: "Basmati Fine Rice (20kg)",
      description: "Premium long-grain fragrant aromatic basmati rice for daily meals.",
      image: "/basmati.png",
      price: 3200,
      category: "Rice & Grains",
      stock: "In Stock"
    },
    {
      id: "2",
      name: "2pm Korean Ramen (Pack of 5)",
      description: "Spicy Korean style instant noodles with rich flavorful broth.",
      image: "/2pmnoodels.png",
      price: 230,
      category: "Noodles & Snacks",
      stock: "Low Stock"
    },
    {
      id: "3",
      name: "Pure Mustard Oil (1 Litre)",
      description: "Cold-pressed natural mustard oil ideal for traditional cooking.",
      image: "/mustardoil.png",
      price: 280,
      category: "Oil & Ghee",
      stock: "Out of Stock"
    },
    {
      id: "4",
      name: "Yellow Dal / Musuro Dal (1kg)",
      description: "High-protein unpolished split red lentils for everyday Dal Bhat.",
      image: "/musuro.png",
      price: 160,
      category: "Pulses & Dal",
      stock: "In Stock"
    },
    {
      id: "5",
      name: "Organic Honey (500g)",
      description: "100% natural raw forest honey filled with antioxidants.",
      image: "/honey.png",
      price: 550,
      category: "Breakfast & Spreads",
      stock: "In Stock"
    },
    {
      id: "6",
      name: "Tokla CTC Tea (500g)",
      description: "Strong aromatic black tea dust perfect for milk tea (Chiya).",
      image: "/toklatea.png",
      price: 220,
      category: "Beverages",
      stock: "Out of Stock"
    },
    {
      id: "7",
      name: "Whole Wheat Atta Flour (5kg)",
      description: "Freshly ground 100% whole wheat flour for soft rotis.",
      image: "/aata.png",
      price: 380,
      category: "Atta & Flour",
      stock: "In Stock"
    },
    {
      id: "8",
      name: "Amul Butter (200g)",
      description: "Delicious salted pasteurized butter for toast and cooking.",
      image: "/amulbutter.png",
      price: 260,
      category: "Dairy & Eggs",
      stock: "Low Stock"
    },
    {
      id: "9",
      name: "Garam Masala Powder (100g)",
      description: "Authentic blend of aromatic spices to elevate dish flavor.",
      image: "/garam_masala.png",
      price: 110,
      category: "Spices & Masala",
      stock: "In Stock"
    },
    {
      id: "10",
      name: "Fresh Farm Eggs (Crate of 30)",
      description: "Farm-fresh high protein brown chicken eggs.",
      image: "/eggcaret.png",
      price: 480,
      category: "Dairy & Eggs",
      stock: "In Stock"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto  py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        {/* <span className="text-sm text-gray-500">{products.length} Items Available</span> */}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const isOutOfStock = product.stock === "Out of Stock";
          const isLowStock = product.stock === "Low Stock";

          return (
            <Card key={product.id} className="flex flex-col justify-between overflow-hidden hover:shadow-lg transition-shadow pt-0 border-gray-200/60">
              <div >
                {/* Product Image Container */}
                <div className="relative w-full h-38 md:h-48 overflow-hidden rounded-sm bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 640px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-contain p-3 transition-transform duration-300 hover:scale-105"
                  />
                  {/* Category Badge */}
                   {/* <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white backdrop-blur-sm text-xs border border-gray-200">
                    {product.category}
                  </Badge> */}


                  {/* Stock Status Badge */}
                  {isOutOfStock && (
                   <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white backdrop-blur-sm text-xs border border-gray-200">
                Out of stock
                </Badge>
                  )}
                  {isLowStock && (
                    <Badge className="absolute top-3 left-3 bg-amber-500 hover:bg-amber-600 text-white">
                     Limited Stock
                    </Badge>
                  )}
                </div>

                {/* Card Body Header */}
                <div className='mt-4 px-2'>
                        <span className=" text-emerald-600/80 border border-emerald-500/30
                        w-fit px-2 py-1 text-sm rounded-full font-semibold">
                    {product.category}
                  </span>
                </div>
             
                

            
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base font-semibold text-gray-900 ">
                    {product.name}
                  </CardTitle>
                  {/* <CardDescription className="text-xs text-gray-500 line-clamp-2 mt-1">
                    {product.description}
                  </CardDescription> */}
                </CardHeader>
              </div>

              {/* Card Footer / Price & Add to Cart */}
              <div className="p-4 pt-0">
                <CardContent className="p-0 mb-3">
                  <div className="text-lg font-bold text-emerald-600">
                    Rs. {product.price.toLocaleString()}
                  </div>
                </CardContent>

                <CardFooter className="p-0">
                  <Button 
                    disabled={isOutOfStock}
                    className={`w-full rounded-xl gap-2 font-medium ${
                      isOutOfStock 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                  </Button>
                </CardFooter>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  )
}

export default StoreFrontProduct
