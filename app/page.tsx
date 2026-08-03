export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-bold">🐐 Goat RWA</div>

        <button className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10">
          Connect Wallet
        </button>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-12 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            REAL WORLD ASSET • GOAT NFT
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Own a Real Goat.
            <span className="block text-emerald-400">
              Own the Asset.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Goat RWA connects real-world goat assets with blockchain
            ownership. Each digital asset represents a tracked goat in the
            real world.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-300">
              Explore Goats
            </button>

            <button className="rounded-xl border border-white/20 px-6 py-3 font-bold hover:bg-white/10">
              How It Works
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
          <div className="flex h-80 items-center justify-center bg-gradient-to-br from-emerald-900 via-slate-800 to-slate-950 text-9xl">
            🐐
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Asset ID</p>
                <h2 className="text-2xl font-bold">GOAT #001</h2>
              </div>

              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                Verified
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-black/20 p-4">
                <p className="text-xs text-slate-400">RWA Value</p>
                <p className="mt-1 text-xl font-bold">$500</p>
              </div>

              <div className="rounded-xl bg-black/20 p-4">
                <p className="text-xs text-slate-400">Status</p>
                <p className="mt-1 text-xl font-bold text-emerald-300">
                  Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          {[
            ["100+", "Goats Tracked"],
            ["100%", "Asset Records"],
            ["24/7", "On-chain Visibility"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 p-6 text-center"
            >
              <div className="text-4xl font-black text-emerald-400">
                {value}
              </div>

              <div className="mt-2 text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">How Goat RWA Works</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Real Asset", "A real goat is registered and tracked."],
            [
              "02",
              "Digital Asset",
              "Its information is represented by a digital asset.",
            ],
            [
              "03",
              "Ownership",
              "Ownership and asset data can be verified on-chain.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm font-bold text-emerald-400">
                {number}
              </div>

              <h3 className="mt-3 text-xl font-bold">{title}</h3>

              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 Goat RWA. Real-world assets, represented digitally.
      </footer>
    </main>
  );
}

