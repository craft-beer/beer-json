export interface Beer {
  // 바코드
  code: string,
  // 제품명
  product: string,
  // 원산지
  country?: string,
  // 제조회사
  company?: string,
  // 수입원 및 판매원
  importation?: string,
  // 원재료명
  ingredients?: Array<string>,
  // 알코올 함량
  alcohol?: number,
  // 용량
  volume?: number,
  // 스타일
  style?: Array<string>,
  // 컬러
  rgb?: string,
  // 가격
  sales?: Array<{ place?: string, data?: Date, price: number }>
  // 리뷰
  reviews?: Array<string>,
  // 이미지
  images?: Array<string>,
}
