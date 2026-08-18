import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Princess_Sofia } from 'next/font/google'
import { SearchProduct } from './SearchProduct'
import StoreFrontProduct from './Product'

const StoreFront = () => {

  return (
    <div className="max-w-7xl mx-auto p-4 m-2">
        {/* banner */}
       <Card className='relative overflow-hidden border-none bg-linear-to-r from-emerald-700 via-emerald-800 to-emerald-900 '>
          
  <CardHeader>
    <div>

   
        <p className="  bg-emerald-300/20 text-emerald-100 border border-emerald-400/30
        backdrop-blur-md w-fit px-3 py-1 text-sm rounded-full font-semibold">Special Offer</p>
 </div>
 <div className='space-y-1'>
    <CardTitle className="text-white font-bold text-2xl sm:text-3xl tracking-tight text-shadow-sm ">
        Fresh Grocery Delivery in Bhadrapur
    </CardTitle>

 </div>
    <CardDescription className='text-emerald-100/80 text-sm sm:text-base '>
Get up to 20% off on daily groceries, fresh produce, and household items delivered directly to your doorstep.    </CardDescription>
    <CardAction className='flex m-auto' >
        <Button className="bg-white text-emerald-800 text-sm font-semibold rounded-lg transition-all hover:bg-emerald-100">
            Shop Now
        </Button>
    </CardAction>
  </CardHeader>
</Card>
<div >
 <SearchProduct/>

</div>
<StoreFrontProduct/>


    </div>
    
  )
}

export default StoreFront