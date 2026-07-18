import { formatCurrency } from "@repo/utils";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

function StarRating({ rate }: { rate: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.round(rate) ? "text-amber-400" : "text-zinc-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-zinc-400 ml-1">{rate}</span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const categoryColors: Record<string, string> = {
    "men's clothing": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "women's clothing": "bg-pink-500/10 text-pink-400 border-pink-500/20",
    "jewelery": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "electronics": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };
  const badgeClass =
    categoryColors[product.category] ??
    "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";

  return (
    <a
      href={`/product/${product.id}`}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative bg-white h-56 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <button className="w-8 h-8 bg-zinc-900/80 backdrop-blur rounded-full flex items-center justify-center border border-zinc-700 hover:border-pink-500 hover:text-pink-500 transition-colors text-zinc-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <span className={`self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeClass}`}>
          {product.category}
        </span>

        <h2 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-indigo-300 transition-colors">
          {product.title}
        </h2>

        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mt-auto">
          <StarRating rate={product.rating.rate} />
          <span className="text-xs text-zinc-500">({product.rating.count})</span>
        </div>

        <div className="flex items-center justify-between mt-1">
          <span className="text-xl font-bold text-white">{formatCurrency(product.price)}</span>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors duration-200">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </a>
  );
}

const CATEGORIES = ["all", "men's clothing", "women's clothing", "jewelery", "electronics"];

export default async function Shop() {
  let data: Product[] = [];
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("API response not ok");
    data = await response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    // Provide fallback mock data so the build doesn't completely fail
    data = [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack",
        price: 109.95,
        description: "Your perfect pack for everyday use.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 }
      }
    ];
  }

  const categoryCounts = CATEGORIES.slice(1).reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = data.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* SaaS Hero */}
      <div className="relative overflow-hidden bg-[#050510] border-b border-white/5">

        {/* Mesh gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">

          {/* Announcement pill */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur text-xs text-indigo-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Summer 2026 Collection is live
              <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.08] tracking-tight mb-6">
              <span className="text-white">The Future of</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Online Shopping
              </span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Discover <span className="text-white font-medium">{data.length} premium products</span> across{" "}
              <span className="text-white font-medium">4 curated categories</span> — delivered to your door with free shipping, always.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap mb-14">
              <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold px-7 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                Shop Now
              </button>
              <button className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-7 py-3.5 rounded-2xl backdrop-blur transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                Browse Categories
              </button>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { icon: "📦", label: "Products", value: `${data.length}+` },
              { icon: "🚀", label: "Free Shipping", value: "Always" },
              { icon: "⭐", label: "Avg. Rating", value: "4.2/5" },
              { icon: "🔒", label: "Secure Checkout", value: "256-bit SSL" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur px-5 py-3 rounded-2xl hover:border-indigo-500/40 hover:bg-white/8 transition-all duration-200"
              >
                <span className="text-xl">{stat.icon}</span>
                <div>
                  <div className="text-white font-bold text-sm">{stat.value}</div>
                  <div className="text-zinc-500 text-xs">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>


      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Category Filter Badges */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          <span className="text-sm text-zinc-500 mr-1">Filter:</span>
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-all duration-200 capitalize
                bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-indigo-500 hover:text-indigo-300"
            >
              {cat === "all" ? `All (${data.length})` : `${cat} (${categoryCounts[cat]})`}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
