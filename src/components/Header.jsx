import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { img } from '../utils/assets'

const navItems = [
  { label: '회사소개', path: '/about' },
  { label: '제품소개', path: '/products' },
  { label: '제작사진', path: '/gallery' },
  { label: '견적문의', path: '/contact' },
  { label: '공지사항', path: '/notices' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* 1단: 상단 연락처 바 */}
      <div className="bg-navy-900 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span>프리미엄 용접 전문 제작 기업</span>
          <div className="flex items-center gap-4">
            <a href="tel:01023029204" className="hover:text-accent-light flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              010-2302-9204
            </a>
            <span className="hidden sm:inline text-navy-300">FAX 070-7760-0423</span>
          </div>
        </div>
      </div>

      {/* 2단: 로고 + 네비게이션 */}
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* 로고 */}
          <Link to="/" className="flex items-center gap-3">
            <img src={img('logo/tasung_logo.png')} alt="씨에이치 테크 로고" className="h-14 md:h-16 w-auto" />
            <div>
              <span className="text-xl md:text-2xl font-bold text-navy-900 block leading-tight">씨에이치 테크</span>
              <span className="text-xs text-navy-400 hidden sm:block">CH Tech</span>
            </div>
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2.5 text-[15px] font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-accent bg-red-50'
                    : 'text-navy-700 hover:text-accent hover:bg-navy-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden p-2 text-navy-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 text-sm ${
                  isActive(item.path) ? 'text-accent font-semibold' : 'text-navy-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
