const goats = [
  {
    id: "GRT-0001",
    name: "Emas Putra",
    breed: "Etawa (Jamnapari)",
    age: "2 Tahun 4 Bulan",
    weight: "78 kg",
    price: "4.5 SOL",
    image:
      "https://images.pexels.com/photos/1459311/pexels-photo-1459311.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "GRT-0002",
    name: "Sri Kencana",
    breed: "Saanen",
    age: "1 Tahun 8 Bulan",
    weight: "62 kg",
    price: "3.8 SOL",
    image:
      "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "GRT-0003",
    name: "Bima Sakti",
    breed: "Boer",
    age: "2 Tahun",
    weight: "95 kg",
    price: "6.2 SOL",
    image:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "GRT-0004",
    name: "Citra Dewi",
    breed: "Kacang",
    age: "1 Tahun 2 Bulan",
    weight: "38 kg",
    price: "1.8 SOL",
    image:
      "https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const stats = [
  ["248", "Total Goats"],
  ["1,847", "Total Investors"],
  ["$1.2M", "Total Asset Value"],
  ["3,920", "Total NFTs"],
];

const benefits = [
  [
    "🛡️",
    "Insured Assets",
    "Every goat is protected by a decentralized insurance fund.",
  ],
  [
    "💧",
    "High Liquidity",
    "Sell your NFT anytime on the secondary marketplace.",
  ],
  [
    "📈",
    "Competitive Returns",
    "Target returns can come from dividends and asset appreciation.",
  ],
];

const steps = [
  [
    "01",
    "Tokenization",
    "Each goat is photographed, documented, then tokenized into an NFT on the blockchain.",
  ],
  [
    "02",
    "Choose & Buy",
    "Pick a goat on the marketplace and choose the ownership percentage you want.",
  ],
  [
    "03",
    "Monitor & Profit",
    "Track health and asset value in real-time and manage your digital ownership.",
  ],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07130e] text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07130e]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="#" className="flex items-center gap-2 text-xl font-black">
            <span className="text-2xl">🐐</span>
            <span>
              Goat<span className="text-emerald-400">RWA</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#why" className="hover:text-white">
              Why GoatRWA
            </a>
            <a href="#how" className="hover:text-white">
              How It Works
            </a>
            <a href="#marketplace" className="hover:text-white">
              Marketplace
            </a>
          </div>

          <button className="rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-emerald-300">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:grid-cols-2 md:items-center md:pb-28 md:pt-24">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Real World Asset · Solana Blockchain
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Goat Investment
              <span className="block text-emerald-400">
                Powered by NFT
              </span>
              & Real World Assets
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Fractional ownership of verified physical goats, documented
              on-chain and monitored in real-time. Full transparency, high
              liquidity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#marketplace"
                className="rounded-xl bg-emerald-400 px-6 py-3.5 font-bold text-black transition hover:bg-emerald-300"
              >
                Explore NFTs →
              </a>

              <a
                href="#how"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-bold transition hover:bg-white/10"
              >
                Learn How It Works
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1459311/pexels-photo-1459311.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern goat farm"
              className="h-[440px] w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-7 pt-28">
              <div className="text-sm text-emerald-300">
                VERIFIED REAL ASSET
              </div>
              <div className="mt-1 text-2xl font-bold">
                Physical Goat → NFT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="border-white/10 px-5 py-9 text-center md:border-r last:border-r-0"
            >
              <div className="text-3xl font-black md:text-4xl">{value}</div>
              <div className="mt-2 text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="mx-auto max-w-7xl px-5 py-24">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-widest text-emerald-400">
            Why GoatRWA
          </div>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Real Asset Investment,
            <span className="block text-slate-400">
              Without the Hassle
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            Combining blockchain transparency with the power of real
            agriculture.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-400">
              How It Works
            </div>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Three Steps, One Investment
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              From a goat on the farm to an NFT in your wallet — the process
              is simple.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="relative rounded-3xl border border-white/10 bg-[#07130e] p-8"
              >
                <div className="text-5xl font-black text-emerald-400/30">
                  {number}
                </div>

                <h3 className="mt-6 text-2xl font-bold">{title}</h3>

                <p className="mt-4 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACE */}
      <section id="marketplace" className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-400">
              Marketplace
            </div>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Featured Goats
            </h2>

            <p className="mt-4 text-slate-400">
              Some of the best assets currently available.
            </p>
          </div>

          <button className="w-fit rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/10">
            View All →
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goats.map((goat) => (
            <article
              key={goat.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <div className="relative">
                <img
                  src={goat.image}
                  alt={goat.name}
                  className="h-56 w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-black">
                  Available
                </span>
              </div>

              <div className="p-5">
                <div className="text-xs text-slate-500">{goat.id}</div>

                <h3 className="mt-1 text-xl font-bold">{goat.name}</h3>

                <div className="mt-1 text-sm text-emerald-300">
                  {goat.breed}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-slate-500">Age</div>
                    <div className="mt-1 font-medium">{goat.age}</div>
                  </div>

                  <div>
                    <div className="text-slate-500">Weight</div>
                    <div className="mt-1 font-medium">{goat.weight}</div>
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <div className="text-xs text-slate-500">NFT Price</div>
                    <div className="mt-1 text-xl font-black">
                      {goat.price}
                    </div>
                  </div>

                  <button className="rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold hover:bg-white/10">
                    Detail
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/20 to-white/[0.03] px-6 py-20 text-center">
          <h2 className="text-4xl font-black md:text-6xl">
            Start Investing Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Join investors who are exploring real goat assets represented on
            the blockchain.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-emerald-400 px-7 py-3.5 font-bold text-black hover:bg-emerald-300">
              Explore Marketplace
            </button>

            <button className="rounded-xl border border-white/15 px-7 py-3.5 font-bold hover:bg-white/10">
              View Dashboard
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span>✓ No minimum</span>
            <span>✓ Verified assets</span>
            <span>✓ Insured</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-xl font-black">
              🐐 Goat<span className="text-emerald-400">RWA</span>
            </div>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              A real-world asset concept that represents physical goats
              digitally through blockchain technology.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Platform</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div>Marketplace</div>
              <div>Dashboard</div>
              <div>Roadmap</div>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Resources</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div>FAQ</div>
              <div>About</div>
              <div>How It Works</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
          © 2026 GoatRWA · Built on Solana · Powered by Real World Assets
        </div>
      </footer>
    </main>
  );
}
