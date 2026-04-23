import PageHeader from '../components/PageHeader'

export default function Contact() {
  return (
    <>
      <PageHeader title="문의 안내" description="전화 또는 이메일로 편하게 문의해 주세요" />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          {/* 연락 수단 카드 */}
          <div className="grid gap-6">
            {/* 전화 */}
            <a
              href="tel:01023029204"
              className="flex items-center gap-5 bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-accent/30 transition-all group"
            >
              <div className="w-16 h-16 bg-navy-100 group-hover:bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                <svg className="w-8 h-8 text-navy-600 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">대표전화</h3>
                <p className="text-2xl font-bold text-accent mt-1">010-2302-9204</p>
              </div>
            </a>

            {/* 이메일 */}
            <a
              href="mailto:nam9292@hanmail.net"
              className="flex items-center gap-5 bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-accent/30 transition-all group"
            >
              <div className="w-16 h-16 bg-navy-100 group-hover:bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                <svg className="w-8 h-8 text-navy-600 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">이메일</h3>
                <p className="text-xl font-bold text-accent mt-1">nam9292@hanmail.net</p>
              </div>
            </a>

            {/* FAX */}
            <div className="flex items-center gap-5 bg-white rounded-xl border border-gray-100 p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">FAX</h3>
                <p className="text-2xl font-bold text-navy-700 mt-1">070-7760-0423</p>
              </div>
            </div>

            {/* 주소 */}
            <div className="flex items-center gap-5 bg-white rounded-xl border border-gray-100 p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-navy-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">주소</h3>
                <p className="text-navy-600 mt-1">경기도 광주시 곤지암읍 광여로 404</p>
              </div>
            </div>
          </div>

          {/* 영업시간 */}
          <div className="mt-10 bg-navy-50 rounded-xl p-6">
            <h3 className="font-semibold text-navy-900 mb-3">영업시간 안내</h3>
            <ul className="text-sm text-navy-600 space-y-1.5">
              <li className="flex justify-between">
                <span>평일 (월~금)</span>
                <span className="font-medium">08:00 ~ 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>토요일</span>
                <span className="font-medium">08:00 ~ 13:00</span>
              </li>
              <li className="flex justify-between text-navy-400">
                <span>일요일 · 공휴일</span>
                <span>휴무</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
