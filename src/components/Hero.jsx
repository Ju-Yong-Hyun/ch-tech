import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { img } from '../utils/assets'

const slides = [
  {
    image: img('image1.jpg'),
    title: '스테인리스·알루미늄',
    highlight: '가공 전문기업',
    desc: '절단, 절곡, 레이저커팅, 밴딩작업 전문',
  },
  {
    image: img('image2.jpg'),
    title: '배관·구조물',
    highlight: '맞춤 제작',
    desc: 'STS 파이프, 앵글, 환봉 등 전 품목 취급',
  },
  {
    image: img('image3.jpg'),
    title: '정밀 레이저 커팅',
    highlight: '& 가공 서비스',
    desc: '최신 장비로 고품질 가공을 약속합니다',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[calc(100vh-7.5rem)] min-h-[400px] max-h-[700px] overflow-hidden bg-navy-900">
      {/* 슬라이드 이미지 */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* 블러 배경 (저해상도 이미지 보완) */}
          <div
            className="absolute inset-0 scale-110 blur-sm"
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <img
            src={slide.image}
            alt={slide.title}
            className="relative w-full h-full object-cover object-center"
          />
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/40" />
        </div>
      ))}

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-20 h-full max-w-6xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <p className="text-accent-light text-sm font-semibold tracking-widest uppercase mb-4">
            CH Tech &middot; STS / AL 전문기업
          </p>
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-in-out ${
                i === current
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute pointer-events-none'
              }`}
            >
              {i === current && (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
                    {slide.title}<br />
                    <span className="text-accent-light">{slide.highlight}</span>
                  </h1>
                  <p className="text-navy-100 text-lg md:text-xl leading-relaxed mb-8">
                    {slide.desc}
                  </p>
                </>
              )}
            </div>
          ))}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products/sts"
              className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors"
            >
              제품 보기
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors backdrop-blur-sm"
            >
              문의 안내
            </Link>
          </div>
        </div>
      </div>

      {/* 좌우 화살표 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
      </button>

      {/* 하단 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-accent' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
