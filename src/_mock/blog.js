import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------
const POST_TITLES = [
  '성공적인 매장 운영을 위한 화이트보드 템플릿',
  '소상공인을 위한 혁신적인 캠퍼 트레일러 아이디어',
  '고객을 끌어들이는 매력적인 홈페이지 디자인',
  '✨완벽한 정리, 매출은 오르는 중✨',
  '신선한 아이디어로 가득한 프린스',
  '성공적인 상점을 위한 식스 삭스 스튜디오',
  '실험적인 디자인으로 매출 상승 연구',
  '매장 홍보에 효과적인 간단한 애니메이션 제작 튜토리얼',
  '소상공인을 위한 무료 폰트 40가지',
  '소상공인 고객의 트렌드 변화 분석',
  '따뜻한 감성을 전하는 홈아트 디자인',
  '중세 철도 그래픽을 통한 스토리텔링 마케팅',
  '매력적인 일러스트레이션 시스템 디자인',
  '배달 서비스 앱으로 매출 극대화하기',
  '간편하게 만드는 서버리스 웹 애플리케이션',
  '매장 정리의 달인, 3D 및 모션 디자인 활용법',
  '시각 예술 축제로 매장 분위기 업그레이드',
  '매거진 커버 디자인으로 브랜드 이미지 강화하기',
  '성공적인 사장의 마음가짐',
  '창의적인 포트폴리오로 고객의 마음 사로잡기',
  '마케팅을 위한 그라데이션 티켓 아이콘',
  '매장 분위기를 바꿀 독창적인 오토바이 컨셉',
  'SVG 애니메이션으로 시각적 효과 극대화하기',
];

export const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.number.int(99999),
  comment: faker.number.int(99999),
  share: faker.number.int(99999),
  favorite: faker.number.int(99999),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
