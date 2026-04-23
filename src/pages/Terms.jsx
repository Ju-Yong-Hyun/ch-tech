import PageHeader from '../components/PageHeader'

export default function Terms() {
  return (
    <>
      <PageHeader title="서비스 이용약관" />
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="prose prose-navy max-w-none text-navy-700 text-sm leading-relaxed space-y-6">
          <h3 className="text-lg font-semibold text-navy-900">제1조 (목적)</h3>
          <p>본 약관은 씨에이치 테크(이하 "회사")이 제공하는 웹사이트 서비스의 이용조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>

          <h3 className="text-lg font-semibold text-navy-900">제2조 (용어의 정의)</h3>
          <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>"서비스"라 함은 회사가 웹사이트를 통해 제공하는 모든 서비스를 말합니다.</li>
            <li>"이용자"라 함은 회사의 웹사이트에 접속하여 본 약관에 따라 서비스를 이용하는 자를 말합니다.</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900">제3조 (약관의 효력과 변경)</h3>
          <p>본 약관은 웹사이트에 공시함으로써 효력을 발생합니다. 회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 공시함으로써 효력을 발생합니다.</p>

          <h3 className="text-lg font-semibold text-navy-900">제4조 (서비스의 제공)</h3>
          <p>회사는 다음과 같은 서비스를 제공합니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>제품 정보 제공</li>
            <li>가공 서비스 안내</li>
            <li>기타 회사가 정하는 서비스</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900">제5조 (면책조항)</h3>
          <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우 서비스 제공에 관한 책임을 지지 않습니다.</p>
        </div>
      </div>
    </>
  )
}
