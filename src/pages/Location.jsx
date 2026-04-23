import PageHeader from '../components/PageHeader'

export default function Location() {
  return (
    <>
      <PageHeader title="오시는 길" description="씨에이치 테크 찾아오시는 방법을 안내합니다" />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* 지도 이미지 */}
        <div className="rounded-xl overflow-hidden mb-8 border border-gray-200">
          <img
            src="/images/address_image.png"
            alt="씨에이치 테크 위치 - 경기도 광주시 곤지암읍 광여로 404"
            className="w-full h-auto"
          />
        </div>

        {/* 주소 및 연락처 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
              주소
            </h3>
            <p className="text-navy-600 leading-relaxed">
              경기도 광주시 곤지암읍 광여로 404
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              연락처
            </h3>
            <ul className="text-navy-600 space-y-2">
              <li><span className="text-navy-400 text-sm">대표전화</span> <a href="tel:01023029204" className="font-medium hover:text-accent">010-2302-9204</a></li>
              <li><span className="text-navy-400 text-sm">FAX</span> 070-7760-0423</li>
              <li><span className="text-navy-400 text-sm">이메일</span> <a href="mailto:nam9292@hanmail.net" className="font-medium hover:text-accent">nam9292@hanmail.net</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
