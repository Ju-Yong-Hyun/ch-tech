import PageHeader from '../components/PageHeader'

export default function About() {
  return (
    <>
      <PageHeader title="회사소개" description="용접 기술로 만드는 정확한 제작 — 씨에이치 테크" />

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
              저희 씨에이치 테크는 용접 기술을 기반으로 금속 구조물과 산업용 설비를 제작하는
              종합 금속가공 전문업체입니다. 단순한 용접 작업에 머무르지 않고, 도면과 요구사항에
              맞춘 정확한 설계·제작·마감까지 일괄 책임지는 것을 원칙으로 삼고 있습니다.
            </p>
            <p className="text-navy-600 leading-relaxed mt-4">
              산업 현장의 점검 사다리·구조물 프레임부터 사각·원형 저장 탱크,
              산업용 설비와 함체에 이르기까지, 다양한 분야에서 쌓아온 제작 경험으로
              고객의 요구를 충실히 구현해 드립니다.
            </p>
            <p className="text-navy-600 leading-relaxed mt-4">
              "정확한 제작"이라는 약속을 무엇보다 소중히 여기며,
              납품 이후에도 끝까지 책임지는 자세로 신뢰받는 기업이 되겠습니다.
              앞으로도 변함없는 관심과 성원 부탁드립니다.
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
                  ['업종', '용접 기반 금속 구조물·산업용 설비 제작'],
                  ['주요 제작', '점검 사다리·프레임 / 사각·원형 탱크 / 산업용 설비·함체'],
                  ['보유 기술', 'TIG·MIG 용접, 정밀 절단, 절곡, 마감 처리'],
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
              {['영업·견적', '설계', '제작·용접', '관리'].map((dept) => (
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
