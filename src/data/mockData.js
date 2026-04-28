import { img } from '../utils/assets'

export const PRODUCT_CATEGORIES = [
  { id: 'frame', label: '구조물 / 프레임' },
  { id: 'tank', label: '탱크 / 저장용기' },
  { id: 'equipment', label: '산업용 설비 / 함체' },
]

export const mockProducts = [
  {
    id: 'sten-grating-stair',
    title: '스테인레스 그레이팅 사다리',
    category: 'frame',
    description: '점검·작업 통로용 스테인레스 사다리. 미끄럼 방지 그레이팅 발판과 양측 안전 난간을 일체형으로 제작합니다.',
    mainImage: img('items/KakaoTalk_20260428_203432554.jpg'),
    images: [
      img('items/KakaoTalk_20260428_203432554.jpg'),
      img('items/KakaoTalk_20260428_203432554_01.jpg'),
    ],
    specs: [
      { label: '재질', value: 'STS304' },
      { label: '용도', value: '점검·작업 통로' },
    ],
    featured: true,
    order: 1,
  },
  {
    id: 'sten-frame',
    title: '스텐 프레임 구조물',
    category: 'frame',
    description: '용도에 맞춘 맞춤 설계로 제작하는 스테인레스 프레임 구조물. 정밀 절단·용접·연마까지 일괄 처리합니다.',
    mainImage: img('items/KakaoTalk_20260428_203432554_02.jpg'),
    images: [
      img('items/KakaoTalk_20260428_203432554_02.jpg'),
      img('items/KakaoTalk_20260428_203432554_03.jpg'),
    ],
    specs: [
      { label: '재질', value: 'STS304 / STS316' },
      { label: '용도', value: '산업용 구조물' },
    ],
    featured: true,
    order: 2,
  },
  {
    id: 'steel-frame',
    title: '철 구조 프레임',
    category: 'frame',
    description: '하중·내구성을 고려한 철 구조 프레임. 도장 마감까지 가능합니다.',
    mainImage: img('items/KakaoTalk_20260428_203432554_04.jpg'),
    images: [img('items/KakaoTalk_20260428_203432554_04.jpg')],
    specs: [
      { label: '재질', value: 'SS400' },
      { label: '마감', value: '분체 도장 가능' },
    ],
    order: 3,
  },
  {
    id: 'square-tank',
    title: '사각 저장용기',
    category: 'tank',
    description: '내용물에 맞춘 두께·강성으로 제작하는 사각 저장용기. 내부 용접부 위생 마감 처리합니다.',
    mainImage: img('items/KakaoTalk_20260428_203432554_10.jpg'),
    images: [
      img('items/KakaoTalk_20260428_203432554_10.jpg'),
      img('items/KakaoTalk_20260428_203432554_11.jpg'),
    ],
    specs: [
      { label: '재질', value: 'STS304' },
      { label: '용도', value: '액체·분체 저장' },
    ],
    featured: true,
    order: 1,
  },
  {
    id: 'round-tank',
    title: '원형 탱크',
    category: 'tank',
    description: '용량·압력 조건에 맞춘 원형 탱크. 식품·산업용 사양 모두 대응 가능합니다.',
    mainImage: img('items/KakaoTalk_20260428_203432554_20.jpg'),
    images: [
      img('items/KakaoTalk_20260428_203432554_20.jpg'),
      img('items/KakaoTalk_20260428_203432554_21.jpg'),
    ],
    specs: [
      { label: '재질', value: 'STS304 / STS316L' },
      { label: '용도', value: '저장·혼합·반응' },
    ],
    order: 2,
  },
  {
    id: 'roller-bed',
    title: '산업용 롤러베드',
    category: 'equipment',
    description: '운반·이송 라인용 스테인레스 롤러베드. 캐스터 일체형으로 이동성 확보.',
    mainImage: img('items/KakaoTalk_20260428_203432554_05.jpg'),
    images: [
      img('items/KakaoTalk_20260428_203432554_05.jpg'),
      img('items/KakaoTalk_20260428_203432554_06.jpg'),
    ],
    specs: [
      { label: '재질', value: 'STS304' },
      { label: '용도', value: '제품 이송 라인' },
    ],
    featured: true,
    order: 1,
  },
  {
    id: 'industrial-equipment',
    title: '산업용 설비 함체',
    category: 'equipment',
    description: '핸드휠·플랜지·구동부 일체형 산업 설비. 도장·표면처리까지 일괄 제작.',
    mainImage: img('items/KakaoTalk_20260428_203432554_15.jpg'),
    images: [
      img('items/KakaoTalk_20260428_203432554_15.jpg'),
      img('items/KakaoTalk_20260428_203432554_16.jpg'),
    ],
    specs: [
      { label: '재질', value: '강재 + 도장' },
      { label: '용도', value: '산업용 가공·이송 장비' },
    ],
    order: 2,
  },
  {
    id: 'control-housing',
    title: '제어용 함체',
    category: 'equipment',
    description: '교통정보·제어반 등에 사용되는 함체. 외부 환경 대응 마감.',
    mainImage: img('items/KakaoTalk_20260428_203432554_25.jpg'),
    images: [img('items/KakaoTalk_20260428_203432554_25.jpg')],
    specs: [
      { label: '재질', value: '강판 + 분체 도장' },
      { label: '용도', value: '제어반·계측함' },
    ],
    order: 3,
  },
]

export const mockGallery = [
  { id: 'g1', url: img('acting/image1.jpg'), caption: 'TIG 용접 작업', order: 1 },
  { id: 'g2', url: img('acting/image2.jpg'), caption: '배관 용접', order: 2 },
  { id: 'g3', url: img('acting/image3.jpg'), caption: '레이저 절단', order: 3 },
  { id: 'g4', url: img('acting/image4.jpg'), caption: '현장 시공', order: 4 },
  { id: 'g5', url: img('acting/image5.jpg'), caption: '정밀 마감', order: 5 },
  { id: 'g6', url: img('items/KakaoTalk_20260428_203432554_07.jpg'), caption: '제작 완료품', order: 6 },
  { id: 'g7', url: img('items/KakaoTalk_20260428_203432554_08.jpg'), caption: '검수 단계', order: 7 },
  { id: 'g8', url: img('items/KakaoTalk_20260428_203432554_09.jpg'), caption: '출하 전 점검', order: 8 },
]

export const mockNotices = [
  {
    id: 'welcome',
    title: '씨에이치 테크 홈페이지가 새롭게 단장되었습니다.',
    content:
      '안녕하세요. 씨에이치 테크입니다.\n\n저희 홈페이지가 새롭게 개편되었습니다. 제작 제품 갤러리, 작업 현장 사진, 공지사항 등 다양한 정보를 보다 편리하게 확인하실 수 있습니다.\n\n많은 관심 부탁드립니다.',
    pinned: true,
    createdAt: '2026-04-28',
  },
  {
    id: 'estimate-guide',
    title: '견적 문의 안내',
    content:
      '제작 의뢰는 전화(010-2302-9204) 또는 이메일(nam9292@hanmail.net)로 문의 주시면, 도면·요구사항을 확인 후 견적서를 송부해 드립니다.',
    pinned: false,
    createdAt: '2026-04-20',
  },
]
