import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { PRODUCT_CATEGORIES, mockProducts } from '../data/mockData'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? mockProducts
      : mockProducts.filter((p) => p.category === activeCategory)

  return (
    <>
      <PageHeader
        title="제품소개"
        description="용접 기술로 만드는 정확한 제작품 — 구조물·탱크·설비"
      />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-navy-900 text-white'
                : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
            }`}
          >
            전체
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-navy-900 text-white'
                  : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 제품 카드 그리드 */}
        {filtered.length === 0 ? (
          <div className="text-center text-navy-400 py-16">
            등록된 제품이 없습니다.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => {
              const category = PRODUCT_CATEGORIES.find((c) => c.id === product.category)
              return (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-accent/30 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={product.mainImage}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-medium text-accent bg-red-50 px-2.5 py-1 rounded-full mb-2">
                      {category?.label}
                    </span>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1.5">{product.title}</h3>
                    <p className="text-sm text-navy-500 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
