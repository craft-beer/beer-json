# Beer JSON

```ts
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
  // 알코올 함량 (%)
  alcohol?: number,
  // 용량 (ml)
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
```


folder 구조
```
/src
  /국가코드
    /제조회사
  /kr
    /hite
    /lotte
  /jp
    /suntory
    /kirin
```


| 국가     | 코드 |
| ------- | --- |
| 오스트리아 | AT  |
| 벨기에    | BE  |
| 캐나다    | CA  |
| 체코     | CZ  |
| 독일     | DE  |
| 덴마크    | DK  |
| 프랑스    | FR  |
| 영국     | GB  |
| 아일랜드  | IE  |
| 일본     | JP  |
| 대한민국  | KR  |
| 네덜란드  | NL  |
| 뉴질랜드  | NZ  |
| 폴란드    | PL  |
| 미국     | US  |
