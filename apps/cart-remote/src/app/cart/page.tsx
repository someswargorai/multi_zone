import { formatCurrency } from "@repo/utils";

export default function CartPage() {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      category: "men's clothing",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.30,
      quantity: 2,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      category: "men's clothing",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Page Header */}
      <div className="border-b border-zinc-800 bg-[#050510]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-zinc-400 mt-3 text-lg">
            Review your items and proceed to checkout.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                  {/* Image */}
                  <div className="w-32 h-32 bg-white rounded-xl p-4 flex items-center justify-center shrink-0">
                    <img src={item.image} alt={item.title} className="max-h-full object-contain" />
                  </div>
                  
                  {/* Details */}
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-zinc-500/10 text-zinc-400 border-zinc-500/20">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-3 line-clamp-2">{item.title}</h3>
                      </div>
                      <span className="text-xl font-bold text-white whitespace-nowrap">
                        {formatCurrency(item.price)}
                      </span>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-0 bg-zinc-950 border border-zinc-700 rounded-xl overflow-hidden">
                        <button className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors text-lg font-bold">−</button>
                        <span className="px-4 py-1.5 text-white text-sm font-semibold border-x border-zinc-700">{item.quantity}</span>
                        <button className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors text-lg font-bold">+</button>
                      </div>

                      {/* Remove Button */}
                      <button className="text-sm text-red-400 hover:text-red-300 transition-colors font-medium flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Your cart is empty</h3>
                <p className="text-zinc-500 mb-6">Looks like you haven&apos;t added anything yet.</p>
                <a href="/shop" className="inline-flex bg-white text-zinc-950 font-bold px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors">
                  Start Shopping
                </a>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Shipping</span>
                  <span className="text-green-400 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Estimated Tax</span>
                  <span className="text-white font-medium">{formatCurrency(tax)}</span>
                </div>
                
                <div className="pt-4 mt-4 border-t border-zinc-800">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-white">Total</span>
                    <span className="text-3xl font-black text-white">{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200">
                Checkout Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              
              <p className="text-center text-xs text-zinc-500 mt-4 flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Secure 256-bit SSL checkout
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
