export const stsProducts = [
  {
    id: 'sheet',
    name: 'STS 판재 (Sheet)',
    description: '스테인리스 판재(STS 304, 201, 430 등) 다양한 두께 및 사이즈 보유',
    specs: [
      { label: '재질', value: 'STS 304, 201, 430, 316L' },
      { label: '두께', value: '0.4t ~ 100t' },
      { label: '사이즈', value: '3×6, 4×8, 5×10 등' },
      { label: '표면처리', value: 'No.1, 2B, BA, HL, Mirror' },
    ],
  },
  {
    id: 'pipe',
    name: 'STS 파이프',
    description: '배관용, 구조용, 장식용 스테인리스 파이프 전종 취급',
    specs: [
      { label: '재질', value: 'STS 304, 201' },
      { label: '구분', value: '배관용, 구조용, 위생관' },
      { label: '사이즈', value: '6A ~ 300A' },
      { label: '스케줄', value: 'Sch5, 10, 20, 40' },
    ],
  },
  {
    id: 'flat',
    name: 'STS 각재 (평철)',
    description: '스테인리스 각재 및 평철, 다양한 규격 보유',
    specs: [
      { label: '재질', value: 'STS 304, 201' },
      { label: '규격', value: '3×20 ~ 25×100' },
      { label: '길이', value: '4M, 6M' },
    ],
  },
  {
    id: 'round',
    name: 'STS 봉재 (환봉)',
    description: '스테인리스 환봉, 정밀가공용 및 일반용',
    specs: [
      { label: '재질', value: 'STS 304, 303, 316' },
      { label: '직경', value: 'Ø3 ~ Ø300' },
      { label: '길이', value: '4M, 6M' },
    ],
  },
  {
    id: 'angle',
    name: 'STS 앵글',
    description: '스테인리스 앵글, 구조용 및 장식용',
    specs: [
      { label: '재질', value: 'STS 304, 201' },
      { label: '규격', value: '25×25 ~ 100×100' },
      { label: '두께', value: '3t ~ 10t' },
    ],
  },
  {
    id: 'fittings',
    name: 'STS 부속',
    description: '엘보, 티, 레듀서, 플랜지 등 각종 스텐 배관부속',
    specs: [
      { label: '재질', value: 'STS 304, 316' },
      { label: '종류', value: '엘보, 티, 레듀서, 니플, 유니온, 플랜지' },
      { label: '사이즈', value: '6A ~ 300A' },
    ],
  },
]

export const alProducts = [
  {
    id: 'al-sheet',
    name: 'AL 판재 (Sheet)',
    description: '알루미늄 판재, 다양한 합금 및 사이즈 보유',
    specs: [
      { label: '재질', value: 'AL 1050, 1100, 5052, 6061' },
      { label: '두께', value: '0.5t ~ 100t' },
      { label: '사이즈', value: '3×6, 4×8' },
    ],
  },
  {
    id: 'al-checker',
    name: 'AL 체크 무늬 판',
    description: '미끄럼 방지용 알루미늄 체크 플레이트',
    specs: [
      { label: '재질', value: 'AL 1050, 5052' },
      { label: '두께', value: '1.5t ~ 6.0t' },
      { label: '무늬', value: '2줄, 5줄 체크' },
    ],
  },
]

export const processingServices = [
  {
    id: 'laser',
    name: '레이저 가공 & 절곡',
    description: 'CNC 레이저 절단 및 정밀 절곡 가공',
    features: ['고정밀 CNC 레이저 커팅', '다양한 두께 절단 가능', '복잡한 형상 절단', '정밀 절곡 가공'],
  },
  {
    id: 'plasma',
    name: '대형 플라즈마 & 대형 절곡',
    description: '대형 플라즈마 절단 및 대형 절곡 가공',
    features: ['대형 판재 플라즈마 절단', '대형 절곡기 보유', '후판 가공 가능', '대량 생산 대응'],
  },
  {
    id: 'general',
    name: '판금 및 종합가공',
    description: '판금, 용접, 밴딩 등 종합 금속 가공',
    features: ['판금 가공', 'TIG / MIG 용접', '밴딩 가공', '조립 및 제작'],
  },
  {
    id: 'samples',
    name: '제작 제품사진 및 샘플',
    description: '씨에이치 테크에서 제작한 다양한 가공 제품 사례',
    features: ['맞춤 제작 사례', '산업용 구조물', '인테리어 시공물', '특수 주문 제작'],
  },
]
