import { NumberField ,NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput, NumberFieldScrubArea } from "@/components/reui/number-field"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


import { CreditCard, Wallet,MapPin } from "lucide-react"



const page = () => {
  return (
    <div className="max-h-screen w-full ">
   <div className="p-3 m-5  flex gap-2 items-center ">
     <CreditCard size={25} className=" text-emerald-600/90  /> "  />
   <h2 className=" text-2xl font-bold font-sans  text-gray-800/90">
    
      Checkout Details
    
   </h2>
   </div>
   <div >
   <div className="grid grid-cols-1 md:grid-cols-2" >
    <Card className="m-4 w-full">
      <CardTitle className="flex gap-2 px-2 text-lg items-center font-semibold">
        <MapPin className="text-emerald-600 " size={20}/>
        Delivery Address
      </CardTitle>

      <CardContent >
        <div className="grid max-w-auto grid-cols-2 gap-4">

        <div>
           <Label className="">
        Full Name  
        </Label>
        <Input name="full-name" type="text" placeholder="Prithivi Narayan Shah" className="w-full border border-gray-300 rounded-xl focus-visible:ring-gray-200/30">
        </Input>
        </div>

       <div>
         <Label >
        Phone Number
        </Label>
        <Input name="phone-number" placeholder="98XXXXXXXXX" className="w-full border border-gray-300 rounded-xl focus-visible:ring-gray-200/30 ">
        </Input>

       </div>
         </div>
       <div>
        <Label>
          Address
        </Label>
        <Textarea placeholder="Bhadrapur-03,Aapgachi">
          
        </Textarea>

       </div>
       <div className="grid grid-cols-1 max-w-auto md:grid-cols-2">
        <div className="">
          <Label>Select the nearby Location-Zone</Label>
          <select name="location-zone" id="location-zone" className="border border-gray-500 rounded-xl px-2 py-2 ">
            <option value="">Select Nearby</option>
            <option value="core">Bhadrapur Bazar(Rs. 50 Delivery) </option>
            <option value="chandragadi">Chandragadi (Rs. 80 Delivery)</option>
            <option value="ganyachowk">GanyaChowk  (Rs. 80 Delivery)</option>
            <option value="sagarmatha-07">Sagarmatha Chowk Bdp-07 (Rs. 70 Delivery)</option>
            <option value="sagarmatha-03">Sagarmatha Chowk Bdp-03  (Rs. 80 Delivery)</option>
            <option value="himali">Himali (Rs. 100 Delivery)</option>
            <option value="garmentchowk">Garment Chowk (Rs.90 Delivery)</option>
            <option value="mantrichowk">Mantri Chowk (Rs.90 Delivery)</option>
          </select>
        </div>

       </div>
       

      </CardContent>
      
    </Card>

    <Card className="w-fit">
<CardTitle>
  Order Summary

</CardTitle>
<CardContent>
  <div className="bg-gray-300 px-2 py-4 border rounded-xl border-gray-500/50 flex justify-between">
    <p>Basmati Fine Rice (20kg) x 1
        <div className="w-fit">
      <NumberField defaultValue={5} min={0} max={100} size="lg">
        <NumberFieldScrubArea label="Large" />
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
    </p>
   
    <span className="text-emerald-600 font-bold">Rs. 3200</span>
  </div>
  <div>
    <span>Organic Honey (500g) x 2</span>
     <div className="w-fit">
      <NumberField defaultValue={5} min={0} max={100} size="lg">
        <NumberFieldScrubArea label="Large" />
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
    <span className="text-emerald-600 font-semibold">Rs. 1100</span>
  </div>
  <div className="border-t-2 border-gray-200 ">
    <div>
      <span>Subtotal </span>  <span className="text-gray-400">Rs</span>
      </div>
      <div>
         <span>Delivery Charge</span> <span>Rs.</span>
      </div>
      <div>
       
        

     
   
    <span>Offer Discount</span> <span className="text-red-500">-Rs.</span>
 </div>
   
 <span className="font-semibold">Total Payable</span> <span className="text-emerald-600">Rs. </span>

  </div>

</CardContent>
    </Card>

   </div>
   </div>
    


</div>
    
  )
}

export default page