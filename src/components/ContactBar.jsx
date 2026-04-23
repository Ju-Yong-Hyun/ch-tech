export default function ContactBar() {
  return (
    <>
      {/* 모바일 하단 고정 바 */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-navy-900 text-white z-50 safe-area-bottom">
        <div className="grid grid-cols-2 divide-x divide-navy-700">
          <a
            href="tel:01023029204"
            className="flex items-center justify-center gap-2 py-3.5 hover:bg-navy-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            <span className="text-sm font-medium">전화문의</span>
          </a>
          <a
            href="mailto:nam9292@hanmail.net"
            className="flex items-center justify-center gap-2 py-3.5 hover:bg-navy-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
            <span className="text-sm font-medium">이메일문의</span>
          </a>
        </div>
      </div>

      {/* 데스크탑 우측 플로팅 */}
      <div className="hidden md:flex fixed right-6 bottom-8 flex-col gap-3 z-50">
        <a
          href="tel:01023029204"
          className="w-14 h-14 bg-navy-800 hover:bg-navy-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
          title="전화문의 010-2302-9204"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
        </a>
        <a
          href="mailto:nam9292@hanmail.net"
          className="w-14 h-14 bg-accent hover:bg-accent-light text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
          title="이메일문의"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
        </a>
      </div>

      {/* 모바일 하단 바 높이만큼 패딩 */}
      <div className="h-14 md:hidden" />
    </>
  )
}
