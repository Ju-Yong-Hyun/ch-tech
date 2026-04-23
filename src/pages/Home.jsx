import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { img } from '../utils/assets'

const services = [
  {
    title: 'STS 제품',
    desc: '판재, 파이프, 앵글, 환봉, 부속 등 스테인리스 전 품목',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
    ),
    link: '/products/sts',
  },
  {
    title: 'AL 제품',
    desc: '알루미늄 판재, 체크 무늬 판 등 AL 제품',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
    ),
    link: '/products/al',
  },
  {
    title: '가공 서비스',
    desc: '레이저커팅, 절곡, 플라즈마, 판금 종합가공',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
    link: '/processing',
  },
  {
    title: '문의 안내',
    desc: '전화, 이메일로 빠르게 상담받으세요',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    ),
    link: '/contact',
  },
]

const strengths = [
  { number: '20+', label: '년 업력', desc: '오랜 경험과 노하우' },
  { number: '100+', label: '종 제품', desc: 'STS/AL 전 품목 보유' },
  { number: '5+', label: '대 장비', desc: '레이저, 절곡기 등 보유' },
  { number: '1일', label: '빠른 납기', desc: '재고 보유 즉시 출고' },
]

const gallery = [
  { src: img('image1.jpg'), label: '용접 가공' },
  { src: img('image3.jpg'), label: '레이저 커팅' },
  { src: img('image5.jpg'), label: '정밀 용접' },
  { src: img('image4.jpg'), label: '현장 작업' },
  { src: img('image2.jpg'), label: '배관 용접' },
  { src: img('image1.jpg'), label: '스파크 용접' },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* 서비스 카드 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">주요 서비스</h2>
            <p className="mt-3 text-navy-500">스테인리스·알루미늄 소재 공급부터 가공까지 원스톱 서비스</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-accent/30 transition-all group"
              >
                <div className="w-14 h-14 bg-navy-50 group-hover:bg-accent/10 rounded-lg flex items-center justify-center text-navy-600 group-hover:text-accent transition-colors mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 작업 현장 갤러리 */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">작업 현장</h2>
            <p className="mt-3 text-navy-500">숙련된 기술력으로 고품질 가공을 제공합니다</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden"
              >
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

      {/* 강점 - 이미지 배경 */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={img('image5.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">씨에이치 테크의 강점</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s) => (
              <div key={s.label} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-accent-light mb-1">{s.number}</div>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">제품 문의 및 견적 상담</h2>
          <p className="text-navy-200 mb-6">전화 또는 이메일로 빠르게 상담받으실 수 있습니다.</p>
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
