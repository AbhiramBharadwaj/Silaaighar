"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

type Props = {
  product: {
    id: string
    title: string
    subtitle?: string
    price?: string
    tags?: string[]
    images: string[]
    description?: string
  }
  className?: string
}

export function ProductCard({ product, className }: Props) {
  const [index, setIndex] = React.useState(0)
  const trackRef = React.useRef<HTMLDivElement>(null)

  const total = product.images.length
  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  React.useEffect(() => {
    if (!trackRef.current) return
    const el = trackRef.current
    const width = el.clientWidth
    el.scrollTo({ left: width * index, behavior: "smooth" })
  }, [index])

  const whatsappHref = `https://wa.me/917977707877?text=${encodeURIComponent(
    `Hi Silaaighar, I'm interested in ${product.title}. Could you help me with details?`,
  )}`

  return (
    <div className={cn("rounded-xl border bg-card text-card-foreground shadow-sm", className)}>
      <div className="relative">
        <div ref={trackRef} className="w-full h-60 overflow-hidden rounded-t-xl scroll-smooth">
          <div className="flex h-full w-full">
            {product.images.map((src, i) => (
              <div key={i} className="min-w-full h-60 shrink-0">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`${product.title} image ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-2 top-2 flex items-center justify-between gap-2">
          <button
            aria-label="Previous image"
            onClick={prev}
            className="rounded-full bg-background/80 px-3 py-1 text-sm shadow hover:bg-background"
          >
            {"‹"}
          </button>
          <div className="rounded-full bg-background/80 px-2 py-1 text-xs shadow">
            {index + 1} / {total}
          </div>
          <button
            aria-label="Next image"
            onClick={next}
            className="rounded-full bg-background/80 px-3 py-1 text-sm shadow hover:bg-background"
          >
            {"›"}
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-pretty">{product.title}</h3>
            {product.subtitle && <p className="text-sm text-muted-foreground">{product.subtitle}</p>}
          </div>
          {product.price && (
            <span className="rounded-full bg-rose-100 px-2 py-1 text-xs text-rose-700">{product.price}</span>
          )}
        </div>

        {product.tags && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {product.tags.map((t) => (
              <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        )}

        {product.description && <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>}

        <div className="mt-4 flex items-center justify-between">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700"
            aria-label={`Enquire on WhatsApp about ${product.title}`}
          >
            Enquire on WhatsApp
          </a>
          <div className="flex items-center gap-1">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                className={cn("h-2 w-2 rounded-full", i === index ? "bg-rose-600" : "bg-muted")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
