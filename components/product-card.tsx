"use client"

import Image from "next/image"
import { useState } from "react"
import { FashionProduct } from "@/data/fashion-picks"

type Props = {
  product: FashionProduct
}

export function ProductCard({ product }: Props) {
  const [current, setCurrent] = useState(0)

  const nextImage = () => setCurrent((prev) => (prev + 1) % product.images.length)
  const prevImage = () => setCurrent((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))

  return (
    <div className="group relative flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
      {/* --- Image Carousel --- */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-xl">
        <Image
          src={product.images[current]}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-top"
          priority={current === 0}
        />

        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-lg text-gray-700 shadow hover:bg-white"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-lg text-gray-700 shadow hover:bg-white"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
              {current + 1} / {product.images.length}
            </div>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {product.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition ${
                    i === current ? "bg-rose-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* --- Content --- */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold">{product.title}</h3>
        {product.subtitle && <p className="text-sm text-gray-500">{product.subtitle}</p>}
        {product.price && <p className="mt-1 font-semibold text-rose-600">{product.price}</p>}

        {product.tags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border bg-gray-50 px-2 py-0.5 text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {product.description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-4">{product.description}</p>
        )}

        <div className="mt-4">
          <a
            href={`https://wa.me/919999999999?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(
              product.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
