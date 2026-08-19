import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertCircle, Package } from 'lucide-react'
import React from 'react'

const Order = () => {
  const orderDetails=[
    {
      id:"ORD-400299",
      placed_on:"8/17/2026,11:48:15 PM",
      payment_method:"eSewa Wallet",
      order_status:"PENDING",
      Customer: "Roman Rayamajhi",
      order_items:"Basmati (20kg) x 1 ,Honey (500gm) x 2",
      price:"4300",
      Address: "Bhadrapur,Aapgachi"
    },
     {
      id:"ORD-299258",
      placed_on:"8/17/2026,11:48:15 PM",
      payment_method:"Cash on Delivery",
      order_status:"DELIVERED",
      Customer: "Roman Rayamajhi",
      order_items:"Basmati (20kg) x 1",
      price:"3200",
       Address: "Bhadrapur,Aapgachi"
    },
     {
      id:"ORD-849201",
      placed_on:"8/17/2026,11:48:15 PM",
      payment_method:"eSewa Wallet",
      order_status:"OUT FOR DELIVERY",
      Customer: "Roman Rayamajhi",
      order_items:"Basmati (20kg) x 1",
      price:"3200",
      Address: "Bhadrapur,Aapgachi"
    },
     {
      id:"ORD-510203",
      placed_on:"8/17/2026,11:48:15 PM",
      payment_method:"eSewa Wallet",
      order_status:"CANCELED",
      Customer: "Roman Rayamajhi",
      order_items:"Honey (500gm) x 1",
      price:"550",
      Address: "Bhadrapur,Aapgachi"
    },
      {
      id:"ORD-510292",
      placed_on:"8/17/2026,11:48:15 PM",
      payment_method:"Cash on Delivery",
      order_status:"CANCELED",
      Customer: "Roman Rayamajhi",
      order_items:"Honey (500gm) x 1",
      price:"550",
      Address: "Bhadrapur,Aapgachi"
    }

  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* title */}
      <div className='flex gap-2 items-center mb-8'>
        <Package className='h-7 w-7 text-emerald-600'/>
        <h2 className='text-2xl font-bold '>
          My Orders
        </h2>
        
      </div>
      {orderDetails.map((order)=>{
        const isCanceled=order.order_status.toLowerCase()==="canceled"
        const iseSewa=order.payment_method.toLowerCase()==="esewa wallet"
        const isPending=order.order_status.toLowerCase()==="pending"
        return (
          <Card key={order.id} className='overflow-hidden mb-2'>
      
          <CardHeader className='flex flex-row items-center justify-between border-b border-gray-200/50'>
           <div>  <CardTitle className="text-xl font-bold text-gray-800">
            {order.id}
               </CardTitle>
            <CardDescription className='text-xs text-gray-500 mt-0.5 '>
              placed on: {order.placed_on} . paid via <span className="font-semibold text-gray-700 ">{order.payment_method}</span>
            </CardDescription>
            
           
         
          </div>
<div className="flex items-center gap-3">
           <Badge className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
            isCanceled?'bg-red-50 text-red-700 border-red-200'
                    :order.order_status ==='OUT FOR DELIVERY'
                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                   
                    : order.order_status === 'DELIVERED'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    
                    : 'bg-blue-50 text-blue-700 border-blue-200'


           }`}>
            {order.order_status}
            
           </Badge>
           
           
           {isPending &&(
            
              <Button variant="outline" size="sm" className="bg-red-50 text-red-500 text-xs font-bold border-red-300  px-2">
               Cancel Order
              </Button>
            )
           }
        
          </div>
           </CardHeader>
          
      
        <CardContent>

      <div>
<div className='text-sm text-gray-500'>
              <p>
              <strong>Customer:</strong>  {order.Customer}
              </p>
              <p>
             <strong> Address:</strong>   {order.Address}
              </p>
<div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">{order.order_items}</span>
                <span className="font-bold text-emerald-600 text-xl">Rs. {order.price}</span>
              </div>
      </div>
      </div>
            
          
            
    
          
            {isCanceled && iseSewa &&(
             <div className='flex items-center p-3 gap-2 border border-amber-100 bg-amber-50  text-sm text-red-500 rounded-2xl'> 
              <AlertCircle className="w-4 h-4  shrink-0 " />
              <p className="leading-relaxed">
                    This order has been paid via digital wallet <strong>(eSewa)</strong>. Please contact support for your refund process.
                  </p>
                </div>
            )

            }
        
          
          
        </CardContent>
        
      </Card>

        )})

      }

    

    

    </div>
  )
}

export default Order