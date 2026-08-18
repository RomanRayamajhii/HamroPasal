
"use client"

import { useState } from "react"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SearchProduct() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    
    // Add your search logic here (e.g., router.push(`/search?q=${query}`))
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md">
      <Field orientation="horizontal" className="flex items-center space-x-2 py-3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <Input
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 rounded-xl focus-visible:ring-emerald-200/60 border-gray-200 "
          />
        </div>
        <Button 
          type="submit" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-5 transition-colors"
        >
          Search
        </Button>
      </Field>
    </form>
  )
}

// import { Button } from "@/components/ui/button"
// import { Field } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { Search } from "lucide-react"

// export function SearchProduct() {
//   return (
//     <Field orientation="horizontal" className="w-full max-w-md items-center space-x-2 px-4 py-2">
//         <div className="relative w-full">
//  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

//       <Input type="search" placeholder="Search..." className="border rounded-lg pl-9 focus-visible:ring-emerald-200/60 border-gray-200"/>
     
//         </div>
//      <Button className="bg-emerald-600 text-white rounded-xl px-5">Search</Button>
//     </Field>
//   )
// }