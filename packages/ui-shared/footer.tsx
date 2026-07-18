export const Footer = () => {
  return (
    <footer className="bg-[#050510] border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-white mb-4">
            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold tracking-tight">MicroStore</span>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed">
            The future of composable commerce. Built with Next.js Multi-Zones and React.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Shop</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="/shop" className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors">All Products</a></li>
            <li><a href="#" className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors">New Arrivals</a></li>
            <li><a href="#" className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors">Categories</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Account</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="/account" className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors">My Profile</a></li>
            <li><a href="#" className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors">Order History</a></li>
            <li><a href="#" className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors">Wishlist</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-500">© 2026 MicroStore Inc. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <div className="w-8 h-5 rounded bg-white/10 flex items-center justify-center text-[8px] text-zinc-400 font-bold">VISA</div>
          <div className="w-8 h-5 rounded bg-white/10 flex items-center justify-center text-[8px] text-zinc-400 font-bold">MC</div>
          <div className="w-8 h-5 rounded bg-white/10 flex items-center justify-center text-[8px] text-zinc-400 font-bold">AMEX</div>
        </div>
      </div>
    </footer>
  );
};
