import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { img } from '../utils/assets'
import { PRODUCT_CATEGORIES, mockProducts } from '../data/mockData'

const categoryDescriptions = {
  frame: '점검 사다리·산업용 프레임 등 용접 기반 구조물',
  tank: '내용물에 맞춘 사양으로 제작하는 사각·원형 탱크',
  equipment: '롤러베드·제어 함체 등 산업용 설비 일괄 제작',
}

const strengths = [
  { number: '정밀', label: '치수와 마감', desc: '도면대로 흔들림 없이' },
  { number: '다양', label: '제작 경험', desc: '구조물·탱크·설비 폭넓게' },
  { number: '신속', label: '견적·납기', desc: '문의 즉시 견적 회신' },
  { number: '책임', label: '사후관리', desc: '납품 이후에도 끝까지' },
]

const galleryImages = [
  { src: img('acting/image1.jpg'), label: 'TIG 용접' },
  { src: img('acting/image3.jpg'), label: '정밀 절단' },
  { src: img('acting/image5.jpg'), label: '마감 작업' },
  { src: img('acting/image2.jpg'), label: '배관 용접' },
  { src: img('acting/image4.jpg'), label: '현장 시공' },
  { src: img('items/KakaoTalk_20260428_203432554_07.jpg'), label: '제작 완료품' },
]

export default function Home() {
  const featured = mockProducts.filter((p) => p.featured)

  return (
    <>
      <Hero />

      {/* 제작 분야 카드 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">제작 분야</h2>
            <p className="mt-3 text-navy-500">용접 기술을 기반으로 다양한 산업 분야의 제작품을 만듭니다</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((cat) => {
              const sample = mockProducts.find((p) => p.category === cat.id && p.featured) || mockProducts.find((p) => p.category === cat.id)
              return (
                <Link
                  key={cat.id}
                  to="/products"
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-accent/30 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    {sample && (
                      <img
                        src={sample.mainImage}
                        alt={cat.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-accent transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      {categoryDescriptions[cat.id]}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 대표 제작품 */}
      {featured.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900">대표 제작품</h2>
                <p className="mt-3 text-navy-500">최근 제작·납품한 사례</p>
              </div>
              <Link to="/products" className="text-sm font-medium text-accent hover:text-accent-light">
                전체 보기 →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={product.mainImage}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-navy-900 mb-1.5">{product.title}</h3>
                    <p className="text-sm text-navy-500 leading-relaxed line-clamp-2">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 작업 현장 갤러리 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900">작업 현장</h2>
              <p className="mt-3 text-navy-500">정확한 제작은 단단한 작업에서 시작됩니다</p>
            </div>
            <Link to="/gallery" className="text-sm font-medium text-accent hover:text-accent-light">
              제작사진 더 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((item, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 강점 */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={img('acting/image5.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">씨에이치 테크의 강점</h2>
            <p className="mt-3 text-navy-200">기술과 책임감으로 답합니다</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s) => (
              <div key={s.label} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-accent-light mb-2">{s.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{s.label}</div>
                <div className="text-sm text-navy-200">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">제작 의뢰·견적 문의</h2>
          <p className="text-navy-200 mb-6">도면이나 요구사항을 알려주시면 빠르게 견적을 드리겠습니다.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01023029204"
              className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              010-2302-9204
            </a>
            <a
              href="mailto:nam9292@hanmail.net"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              이메일 문의
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
