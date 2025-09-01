import Link from "next/link"
import { fashionPicks } from "@/data/fashion-picks"
import { ProductCard } from "./product-card"

export function FashionPicks() {
  return (
    <section id="fashion-picks" className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-rose-600">Curated Looks</p>
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Fashion Picks</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore 4 handpicked styles. Swipe images inside each card.
          </p>
        </div>
        <Link
          href="/fashion"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {fashionPicks.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
