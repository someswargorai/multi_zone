export default function Home() {
  return (
    <div className="flex-1 bg-black flex flex-col selection:bg-indigo-500/30">
      
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Glowing orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          {/* Version/Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8 hover:bg-white/[0.05] transition-colors cursor-pointer">
            <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">New</span>
            <span className="text-sm text-zinc-300">Multi-Zone Routing v2.0 is now live</span>
            <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-8">
            Composable commerce, <br className="hidden md:block" />
            engineered for scale.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Deploy decoupled storefronts with infinite scalability. A true micro-frontend architecture powered by Next.js and Vercel Edge.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/shop" className="w-full sm:w-auto h-12 px-8 rounded-lg bg-white text-black font-medium flex items-center justify-center hover:bg-zinc-200 transition-colors">
              Explore Storefront
            </a>
            <a href="https://github.com/someswargorai/multi_zone" target="_blank" rel="noreferrer" className="w-full sm:w-auto h-12 px-8 rounded-lg bg-white/5 text-white font-medium flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* SaaS Bento Grid Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Shop */}
          <a href="/shop" className="block w-full group md:col-span-2 relative h-[320px] rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all p-8 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 mb-4">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Storefront Zone</h3>
              <p className="text-zinc-400 text-sm max-w-sm">Isolated React application running on port 3001. Handles product catalog, filtering, and high-traffic static generation.</p>
            </div>
            
            {/* Mock Code block graphic */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-80 h-48 bg-[#0a0a0a] rounded-tl-xl border-t border-l border-white/10 p-6 shadow-2xl group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <pre className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                <span className="text-pink-400">export default</span> <span className="text-blue-400">async function</span> <span className="text-yellow-200">Shop</span>() {'{\n'}
                {'  '}<span className="text-blue-400">const</span> res = <span className="text-pink-400">await</span> <span className="text-yellow-200">fetch</span>(<span className="text-green-400">'/api/products'</span>);{'\n'}
                {'  '}<span className="text-blue-400">const</span> data = <span className="text-pink-400">await</span> res.<span className="text-yellow-200">json</span>();{'\n\n'}
                {'  '}<span className="text-pink-400">return</span> <span className="text-zinc-300">&lt;ProductGrid data=</span>{'{data}'} <span className="text-zinc-300">/&gt;</span>;{'\n'}
                {'}'}
              </pre>
            </div>
          </a>

          {/* Card 2: Account */}
          <a href="/account" className="block w-full group md:col-span-1 relative h-[320px] rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all p-8 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center border border-pink-500/30 mb-4">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Auth & Account</h3>
              <p className="text-zinc-400 text-sm">Secure, isolated authentication boundary running on port 3002.</p>
            </div>
          </a>

          {/* Card 3: Cart */}
          <a href="/cart" className="block w-full group md:col-span-1 relative h-[320px] rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all p-8 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 mb-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Checkout Logic</h3>
              <p className="text-zinc-400 text-sm">Distributed cart management decoupled from the main storefront.</p>
            </div>
          </a>

          {/* Card 4: Architecture */}
          <div className="w-full group md:col-span-2 relative h-[320px] rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all p-8 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-800 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10 max-w-sm">
              <h3 className="text-xl font-medium text-white mb-2">Seamless Proxy</h3>
              <p className="text-zinc-400 text-sm">The host-shell transparently routes traffic to independent applications using Next.js Edge rewrites.</p>
            </div>

            {/* Architecture Diagram */}
            <div className="relative z-10 w-full ml-auto md:w-3/4 self-end mt-4">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-2 px-2">
                <span>host-shell</span>
                <span>rewrite</span>
                <span>remote-zone</span>
              </div>
              <div className="flex flex-col gap-3">
                {['/shop', '/account', '/cart'].map((route, i) => (
                  <div key={route} className="flex items-center gap-4">
                    <div className="flex-1 h-10 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center px-4 text-zinc-300 font-mono text-sm">
                      {route}
                    </div>
                    <div className="flex items-center gap-1 opacity-30 group-hover:opacity-100 transition-opacity" style={{ transitionDelay: `${i * 100}ms`}}>
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                    </div>
                    <div className="flex-1 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center px-4 text-indigo-300 font-mono text-sm shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                      port {3001 + i}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
