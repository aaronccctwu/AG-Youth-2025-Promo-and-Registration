import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MerchandiseRegister() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container px-4 md:px-6 max-w-2xl mx-auto">
        <Link 
          href="/#merchandise" 
          className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Merchandise
        </Link>
        
        <h1 className="text-3xl font-bold mb-8">T-Shirt Registration</h1>
        
        <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
            />
          </div>
          
          <div>
            <label htmlFor="church" className="block text-sm font-medium mb-2">Church</label>
            <input
              type="text"
              id="church"
              name="church"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
            />
          </div>
          
          <div>
            <label htmlFor="size" className="block text-sm font-medium mb-2">Size</label>
            <select
              id="size"
              name="size"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
            >
              <option value="">Select a size</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="2XL">2XL</option>
              <option value="3XL">3XL</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold hover:from-yellow-600 hover:to-red-600 h-12"
          >
            Submit Order
          </Button>
        </form>
      </div>
    </div>
  )
}