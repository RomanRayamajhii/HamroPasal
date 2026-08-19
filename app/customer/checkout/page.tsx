import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/reui/number-field"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, MapPin, CircleCheck, Wallet, Banknote } from "lucide-react"

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <CreditCard className="h-7 w-7 text-emerald-600" />
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Checkout Details
        </h1>
      </div>

      {/* Main Grid: 2 Columns on Desktop (Form on left, Summary on right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Forms) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Card 1: Delivery Address */}
          <Card className="border border-gray-200 shadow-xs rounded-2xl">
            <CardHeader className="border-b border-gray-100 pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <MapPin className="text-emerald-600 h-5 w-5" />
                Delivery Address
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="full-name" className="text-xs font-semibold text-gray-700">Full Name</Label>
                  <Input
                    id="full-name"
                    name="full-name"
                    type="text"
                    placeholder="Prithivi Narayan Shah"
                    className="rounded-xl border-gray-200 focus-visible:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone-number" className="text-xs font-semibold text-gray-700">Phone Number</Label>
                  <Input
                    id="phone-number"
                    name="phone-number"
                    placeholder="98XXXXXXXXX"
                    className="rounded-xl border-gray-200 focus-visible:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Address Textarea */}
              <div className="space-y-1.5">
                <Label htmlFor="address" className="text-xs font-semibold text-gray-700">Full Address</Label>
                <Textarea
                  id="address"
                  placeholder="Bhadrapur-03, Aapgachi"
                  className="rounded-xl border-gray-200 focus-visible:ring-emerald-500 resize-none min-h-20"
                />
              </div>

              {/* Location Zone Dropdown */}
              <div className="space-y-1.5">
                <Label htmlFor="location-zone" className="text-xs font-semibold text-gray-700">
                  Select Nearby Location-Zone
                </Label>
                <select
                  name="location-zone"
                  id="location-zone"
                  className="w-full bg-white border border-gray-200 text-gray-800 text-sm rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  <option value="">Select Nearby Zone</option>
                  <option value="core">Bhadrapur Bazar (Rs. 50 Delivery)</option>
                  <option value="chandragadi">Chandragadi (Rs. 80 Delivery)</option>
                  <option value="ganyachowk">GanyaChowk (Rs. 80 Delivery)</option>
                  <option value="sagarmatha-07">Sagarmatha Chowk Bdp-07 (Rs. 70 Delivery)</option>
                  <option value="sagarmatha-03">Sagarmatha Chowk Bdp-03 (Rs. 80 Delivery)</option>
                  <option value="himali">Himali (Rs. 100 Delivery)</option>
                  <option value="garmentchowk">Garment Chowk (Rs. 90 Delivery)</option>
                  <option value="mantrichowk">Mantri Chowk (Rs. 90 Delivery)</option>
                </select>
              </div>

            </CardContent>
          </Card>

          {/* Card 2: Payment Method */}
          <Card className="border border-gray-200 shadow-xs rounded-2xl">
            <CardHeader className="border-b border-gray-100 pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <Wallet className="text-emerald-600 h-5 w-5" />
                Select Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <RadioGroup defaultValue="esewa" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* eSewa Option */}
                <label
                  htmlFor="esewa"
                  className="border border-gray-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/30 transition-all has-checked:border-emerald-600 has-checked:bg-emerald-50/50"
                >
                  <div className="space-y-1">
                    <p className="font-semibold text-sm text-gray-800">eSewa</p>
                    <p className="text-xs text-gray-500">Digital Wallet</p>
                  </div>
                  <RadioGroupItem value="esewa" id="esewa" />
                </label>

                {/* Khalti Option */}
                <label
                  htmlFor="khalti"
                  className="border border-gray-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/30 transition-all has-checked:border-emerald-600 has-checked:bg-emerald-50/50"
                >
                  <div className="space-y-1">
                    <p className="font-semibold text-sm text-gray-800">Khalti</p>
                    <p className="text-xs text-gray-500">Digital Gateway</p>
                  </div>
                  <RadioGroupItem value="khalti" id="khalti" />
                </label>

                {/* Cash on Delivery Option */}
                <label
                  htmlFor="cod"
                  className="border border-gray-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/30 transition-all has-checked:border-emerald-600 has-checked:bg-emerald-50/50"
                >
                  <div className="space-y-1">
                    <p className="font-semibold text-sm text-gray-800">Cash on Delivery</p>
                    <p className="text-xs text-gray-500">Pay at Doorstep</p>
                  </div>
                  <RadioGroupItem value="cod" id="cod" />
                </label>

              </RadioGroup>
            </CardContent>
          </Card>

        </div>

        {/* Right Column (Order Summary Sticky Sidebar) */}
        <div className="lg:col-span-1">
          <Card className="border border-gray-200 shadow-xs rounded-2xl sticky top-6">
            <CardHeader className="border-b border-gray-100 pb-4">
              <CardTitle className="text-lg font-semibold text-gray-800">Order Summary</CardTitle>
            </CardHeader>
            
            <CardContent className="pt-6 space-y-6">
              
              {/* Product Item 1 */}
              <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-sm font-medium text-gray-800">Basmati Fine Rice (20kg)</span>
                  <span className="text-sm font-bold text-emerald-700 shrink-0">Rs. 3,200</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs text-gray-500">Quantity</span>
                  <NumberField defaultValue={1} min={0} max={10} size="sm" className="w-28">
                    <NumberFieldGroup>
                      <NumberFieldDecrement />
                      <NumberFieldInput className="text-xs text-center" />
                      <NumberFieldIncrement />
                    </NumberFieldGroup>
                  </NumberField>
                </div>
              </div>

              {/* Product Item 2 */}
              <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-sm font-medium text-gray-800">Organic Honey (500g)</span>
                  <span className="text-sm font-bold text-emerald-700 shrink-0">Rs. 1,100</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs text-gray-500">Quantity</span>
                  <NumberField defaultValue={1} min={0} max={10} size="sm" className="w-28">
                    <NumberFieldGroup>
                      <NumberFieldDecrement />
                      <NumberFieldInput className="text-xs text-center" />
                      <NumberFieldIncrement />
                    </NumberFieldGroup>
                  </NumberField>
                </div>
              </div>

              {/* Price Calculation Breakdown */}
              <div className="space-y-2.5 pt-2 border-t border-gray-100 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-800">Rs. 4,300</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charge</span>
                  <span className="font-medium text-gray-800">Rs. 80</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Offer Discount</span>
                  <span className="font-medium text-red-500">- Rs. 100</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-200 text-base font-bold text-gray-900">
                  <span>Total Payable</span>
                  <span className="text-emerald-700 text-lg">Rs. 4,280</span>
                </div>
              </div>

              {/* Submit Button */}
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-6 font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors">
                <CircleCheck className="h-5 w-5" />
                Place Order Now
              </Button>

            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default Page