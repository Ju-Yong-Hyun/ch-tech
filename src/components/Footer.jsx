import { Link } from 'react-router-dom'
import { img } from '../utils/assets'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={img('logo/tasung_logo.png')} alt="씨에이치 테크 로고" className="h-8 w-auto brightness-200" />
              <h3 className="text-white text-lg font-bold">씨에이치 테크</h3>
            </div>
            <p className="text-sm leading-relaxed">
              프리미엄 용접 전문 제작 기업<br />
              금속 구조물·산업용 설비<br />
              종합 금속가공 전문업체
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">연락처</h3>
            <ul className="text-sm space-y-1.5">
              <li>
                <span className="text-navy-400">대표전화</span>{' '}
                <a href="tel:01023029204" className="text-white hover:text-accent-light">010-2302-9204</a>
              </li>
              <li>
                <span className="text-navy-400">FAX</span>{' '}
                <span>070-7760-0423</span>
              </li>
              <li>
                <span className="text-navy-400">이메일</span>{' '}
                <a href="mailto:nam9292@hanmail.net" className="text-white hover:text-accent-light">nam9292@hanmail.net</a>
              </li>
              <li className="pt-1">
                <span className="text-navy-400">주소</span>{' '}
                <span>경기도 광주시 곤지암읍 광여로 404</span>
              </li>
            </ul>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">바로가기</h3>
            <ul className="text-sm space-y-1.5">
              <li><Link to="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">제품소개</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">제작사진</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">견적문의</Link></li>
              <li><Link to="/notices" className="hover:text-white transition-colors">공지사항</Link></li>
            </ul>
          </div>
        </div>

        {/* 하단 */}
        <div className="border-t border-navy-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-navy-400">
          <p>&copy; {new Date().getFullYear()} 씨에이치 테크. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to="/terms" className="hover:text-white transition-colors">이용약관</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
