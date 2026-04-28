import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { PRODUCT_CATEGORIES, mockProducts } from '../data/mockData'

export default function ProductDetail() {
  const { id } = useParams()
  const product = mockProducts.find((p) => p.id === id)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <>
        <PageHeader title="제품을 찾을 수 없습니다" />
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <p className="text-navy-500 mb-6">요청하신 제품이 존재하지 않거나 삭제되었습니다.</p>
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-lg transition-colors"
          >
            제품소개로 돌아가기
          </Link>
        </div>
      </>
    )
  }

  const category = PRODUCT_CATEGORIES.find((c) => c.id === product.category)

  return (
    <>
      <PageHeader title={product.title} description={category?.label} />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 이미지 갤러리 */}
          <div>
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-3">
              <img
                src={product.images[activeImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((url, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === i ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <img src={url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 상세 정보 */}
          <div>
            <span className="inline-block text-xs font-medium text-accent bg-red-50 px-2.5 py-1 rounded-full mb-3">
              {category?.label}
            </span>
            <h1 className="text-3xl font-bold text-navy-900 mb-5">{product.title}</h1>
            <p className="text-navy-600 leading-relaxed mb-8 whitespace-pre-line">
              {product.description}
            </p>

            {product.specs && product.specs.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-navy-900 mb-3">제품 사양</h2>
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-gray-100">
                        <td className="py-2.5 px-3 bg-navy-50 font-medium text-navy-700 w-32">
                          {spec.label}
                        </td>
                        <td className="py-2.5 px-3 text-navy-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
              <a
                href="tel:01023029204"
                className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors"
              >
                견적 문의 (010-2302-9204)
              </a>
              <Link
                to="/products"
                className="px-6 py-3 bg-navy-50 hover:bg-navy-100 text-navy-700 font-medium rounded-lg transition-colors"
              >
                목록으로
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
