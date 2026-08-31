type PageHeroProps = {
  title: string
  description: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="border-b border-line">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  )
}
