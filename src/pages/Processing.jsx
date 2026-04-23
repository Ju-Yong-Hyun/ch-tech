import PageHeader from '../components/PageHeader'
import { img } from '../utils/assets'

const services = [
  {
    name: '레이저 가공 & 절곡',
    description: 'CNC 레이저 절단 및 정밀 절곡 가공',
    image: img('image3.jpg'),
    features: ['고정밀 CNC 레이저 커팅', '다양한 두께 절단 가능', '복잡한 형상 절단', '정밀 절곡 가공'],
  },
  {
    name: '대형 플라즈마 & 대형 절곡',
    description: '대형 플라즈마 절단 및 대형 절곡 가공',
    image: img('image1.jpg'),
    features: ['대형 판재 플라즈마 절단', '대형 절곡기 보유', '후판 가공 가능', '대량 생산 대응'],
  },
  {
    name: '판금 및 종합가공',
    description: '판금, 용접, 밴딩 등 종합 금속 가공',
    image: img('image4.jpg'),
    features: ['판금 가공', 'TIG / MIG 용접', '밴딩 가공', '조립 및 제작'],
  },
  {
    name: '제작 제품 및 샘플',
    description: '씨에이치 테크에서 제작한 다양한 가공 제품 사례',
    image: img('image5.jpg'),
    features: ['맞춤 제작 사례', '산업용 구조물', '인테리어 시공물', '특수 주문 제작'],
  },
]

export default function Processing() {
  return (
    <>
      <PageHeader title="가공안내 · 장비소개" description="레이저, 플라즈마, 절곡, 판금 등 종합 가공 서비스" />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 items-center`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-navy-900 mb-2">{service.name}</h3>
                <p className="text-navy-500 mb-5">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-navy-600">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-navy-50 rounded-xl p-6 text-center">
          <p className="text-navy-700 font-medium">
            가공 문의 및 견적 상담은 전화로 연락 부탁드립니다.
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
