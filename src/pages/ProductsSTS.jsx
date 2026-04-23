import PageHeader from '../components/PageHeader'
import { stsProducts } from '../data/products'

export default function ProductsSTS() {
  return (
    <>
      <PageHeader title="STS 제품소개" description="스테인리스 전 품목을 취급합니다" />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8">
          {stsProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{product.name}</h3>
                    <p className="text-navy-500 mb-4">{product.description}</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          {product.specs.map((spec) => (
                            <tr key={spec.label} className="border-b border-gray-50 last:border-0">
                              <td className="py-2 pr-4 text-navy-400 font-medium w-24">{spec.label}</td>
                              <td className="py-2 text-navy-700">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 문의 안내 */}
        <div className="mt-12 bg-navy-50 rounded-xl p-6 text-center">
          <p className="text-navy-700 font-medium">
            제품 재고 및 가격 문의는 전화로 연락 부탁드립니다.
          </p>
          <a href="tel:01023029204" className="inline-flex items-center gap-2 mt-3 text-accent font-semibold hover:text-accent-light">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            010-2302-9204
          </a>
        </div>
      </div>
    </>
  )
}
