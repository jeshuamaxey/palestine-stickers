"use client"

const BuyButton = () => {
  const stripeCheckoutPageURL = "https://buy.stripe.com/cN28xN4Av3eK2pqcMN"

  return <button onClick={() => window.location.href = stripeCheckoutPageURL} className="text-xl font-black my-4 p-4 relative top-0 transition-all cursor-pointer hover:-top-1 border-4 border-black shadow-none hover:shadow-2xl hover:bg-red-500">
  Buy now
</button>
}

export default BuyButton