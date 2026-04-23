import PageHeader from '../components/PageHeader'

export default function Privacy() {
  return (
    <>
      <PageHeader title="개인정보 처리방침" />
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="prose prose-navy max-w-none text-navy-700 text-sm leading-relaxed space-y-6">
          <h3 className="text-lg font-semibold text-navy-900">1. 개인정보의 수집 및 이용 목적</h3>
          <p>씨에이치 테크(이하 "회사")은 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>고객 상담 및 문의 응대</li>
            <li>서비스 제공 및 계약 이행</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900">2. 수집하는 개인정보 항목</h3>
          <p>회사는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>필수항목: 이름, 연락처</li>
            <li>선택항목: 이메일, 회사명</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900">3. 개인정보의 보유 및 이용 기간</h3>
          <p>회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>

          <h3 className="text-lg font-semibold text-navy-900">4. 개인정보의 제3자 제공</h3>
          <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 법령의 규정에 의거하거나 이용자의 동의가 있는 경우에는 예외로 합니다.</p>

          <h3 className="text-lg font-semibold text-navy-900">5. 개인정보 보호책임자</h3>
          <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 관련 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>담당부서: 관리부</li>
            <li>연락처: 010-2302-9204</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900">6. 개인정보 처리방침의 변경</h3>
          <p>이 개인정보 처리방침은 시행일로부터 적용되며, 변경사항이 있을 경우 웹사이트를 통해 공지합니다.</p>
        </div>
      </div>
    </>
  )
}
