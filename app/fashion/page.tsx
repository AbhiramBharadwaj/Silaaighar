import { fashionPicks } from "@/data/fashion-picks"
import { ProductCard } from "@/components/product-card"
import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Fashion Picks — Silaaighar",
  description: "Explore all curated products from Silaaighar.",
}

export default function FashionAllPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="mb-6">
          <Button asChild variant="outline" className="rounded-full bg-transparent">
            <Link href="/" aria-label="Back to homepage">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <header className="mb-8">
          <h1 className="text-pretty text-3xl font-semibold">All Fashion Picks</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Duplicate entries in data/fashion-picks.ts to add more items. Each product supports 3–4 carousel images.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fashionPicks.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </>
  )
}
