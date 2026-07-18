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

function StarRating({ rate, count }: { rate: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= Math.round(rate) ? "text-amber-400" : "text-zinc-700"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-amber-400 font-semibold">{rate}</span>
      <span className="text-zinc-500 text-sm">({count} reviews)</span>
    </div>
  );
}

const categoryColors: Record<string, { badge: string; glow: string }> = {
  "men's clothing":    { badge: "bg-blue-500/10 text-blue-400 border-blue-500/30",   glow: "from-blue-900/30" },
  "women's clothing":  { badge: "bg-pink-500/10 text-pink-400 border-pink-500/30",   glow: "from-pink-900/30" },
  "jewelery":          { badge: "bg-amber-500/10 text-amber-400 border-amber-500/30", glow: "from-amber-900/30" },
  "electronics":       { badge: "bg-purple-500/10 text-purple-400 border-purple-500/30", glow: "from-purple-900/30" },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [productRes, allRes] = await Promise.all([
    fetch(`https://fakestoreapi.com/products/${id}`),
    fetch("https://fakestoreapi.com/products?limit=4"),
  ]);

  const product: Product = await productRes.json();
  const related: Product[] = await allRes.json();
  const filtered = related.filter((p) => p.id !== product.id).slice(0, 3);

  const colors = categoryColors[product.category] ?? {
    badge: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30",
    glow: "from-zinc-900/30",
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Breadcrumb */}
      <div className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-zinc-500">
          <a href="/shop" className="hover:text-white transition-colors">Shop</a>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <span className="capitalize text-zinc-400">{product.category}</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <span className="text-white line-clamp-1 max-w-xs">{product.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main product section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Image Panel */}
          <div className={`relative rounded-3xl bg-gradient-to-br ${colors.glow} via-zinc-900 to-zinc-900 border border-zinc-800 p-10 flex items-center justify-center min-h-[420px] overflow-hidden`}>
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
            <img
              src={product.image}
              alt={product.title}
              className="relative z-10 max-h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-zinc-800/80 backdrop-blur border border-zinc-700 rounded-full flex items-center justify-center hover:border-pink-500 hover:text-pink-400 text-zinc-400 transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-center gap-3">
              <span className={`text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border ${colors.badge}`}>
                {product.category}
              </span>
              <span className="text-zinc-600 text-xs">#{product.id}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {product.title}
            </h1>

            <StarRating rate={product.rating.rate} count={product.rating.count} />

            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-black text-white">{formatCurrency(product.price)}</span>
              <span className="text-zinc-500 line-through text-lg">{formatCurrency(product.price * 1.3)}</span>
              <span className="text-green-400 text-sm font-semibold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">23% off</span>
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm border-t border-zinc-800 pt-5">
              {product.description}
            </p>

            <div className="flex gap-3 flex-wrap">
              {["Free Shipping", "Easy Returns", "Secure Payment"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl">
                  <span className="text-green-400">✓</span> {badge}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-0 bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden">
                <button className="px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors text-lg font-bold">−</button>
                <span className="px-5 py-3 text-white font-semibold border-x border-zinc-700">1</span>
                <button className="px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors text-lg font-bold">+</button>
              </div>
              <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {filtered.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl font-bold text-white">You might also like</h2>
              <div className="flex-1 h-px bg-zinc-800" />
              <a href="/shop" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">View all →</a>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <a
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:border-zinc-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300"
                >
                  <div className="bg-white h-44 flex items-center justify-center p-5">
                    <img src={p.image} alt={p.title} className="h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <p className="text-sm font-semibold text-white line-clamp-2 group-hover:text-indigo-300 transition-colors">{p.title}</p>
                    <span className="text-lg font-bold text-white">{formatCurrency(p.price)}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}