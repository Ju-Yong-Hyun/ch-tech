export default function PageHeader({ title, description }) {
  return (
    <section className="bg-navy-800 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {description && (
          <p className="mt-3 text-navy-200 text-lg">{description}</p>
        )}
      </div>
    </section>
  )
}
