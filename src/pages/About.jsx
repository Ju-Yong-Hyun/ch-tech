import PageHeader from '../components/PageHeader'

export default function About() {
  return (
    <>
      <PageHeader title="회사소개" description="STS / AL 전문기업 씨에이치 테크를 소개합니다" />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* 인사말 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-3 border-b-2 border-accent">인사말</h2>
          <div className="bg-navy-50 rounded-xl p-8 md:p-10">
            <p className="text-navy-700 leading-relaxed text-lg">
              안녕하십니까.<br />
              <strong>씨에이치 테크</strong>를 방문해 주셔서 감사합니다.
            </p>
            <p className="text-navy-600 leading-relaxed mt-4">
              저희 씨에이치 테크는 스테인리스(STS) 및 알루미늄(AL) 소재의 공급과 가공을 전문으로 하는 기업입니다.
              오랜 경험과 노하우를 바탕으로 고객 여러분께 최상의 제품과 서비스를 제공하고자 항상 노력하고 있습니다.
            </p>
            <p className="text-navy-600 leading-relaxed mt-4">
              판재, 파이프, 앵글, 환봉, 부속 등 다양한 STS/AL 제품을 보유하고 있으며,
              레이저 커팅, 절곡, 플라즈마 절단, 판금 가공 등 종합 가공 서비스를 제공합니다.
            </p>
            <p className="text-navy-600 leading-relaxed mt-4">
              앞으로도 고객 만족을 최우선으로 생각하며, 신뢰받는 기업이 되겠습니다.
            </p>
            <p className="text-right text-navy-700 font-semibold mt-6">
              씨에이치 테크 대표이사 남국의
            </p>
          </div>
        </section>

        {/* 회사개요 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-3 border-b-2 border-accent">회사개요</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['회사명', '씨에이치 테크 (CH Tech)'],
                  ['대표이사', '남국의'],
                  ['업종', 'STS / AL 소재 공급 및 가공'],
                  ['주요 제품', '스테인리스 판재, 파이프, 앵글, 환봉, 부속 / 알루미늄 판재'],
                  ['주요 서비스', '레이저 커팅, 절곡, 플라즈마 절단, 판금 가공'],
                  ['전화', '010-2302-9204'],
                  ['FAX', '070-7760-0423'],
                  ['이메일', 'nam9292@hanmail.net'],
                  ['주소', '경기도 광주시 곤지암읍 광여로 404'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100">
                    <td className="py-3 px-4 bg-navy-50 font-medium text-navy-700 w-36">{label}</td>
                    <td className="py-3 px-4 text-navy-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 조직도 */}
        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-3 border-b-2 border-accent">조직도</h2>
          <div className="flex flex-col items-center py-8">
            <div className="bg-navy-800 text-white px-8 py-3 rounded-lg font-semibold text-lg">
              대표이사
            </div>
            <div className="w-px h-8 bg-navy-300" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {['영업부', '생산부', '가공부', '관리부'].map((dept) => (
                <div key={dept} className="relative">
                  <div className="w-px h-4 bg-navy-300 mx-auto" />
                  <div className="bg-navy-100 text-navy-700 px-6 py-2.5 rounded-lg text-center font-medium">
                    {dept}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
