/** 
 * pagenation을 위한 시작 및 끝 인덱스를 계산
 * 
 * @param {number} limit - 페이지당 항목 수
 * @param {number} page - 현재 페이지 번호 (1부터 시작하는 인덱스)
 * @returns {Object} 페이지에 대한 시작 및 끝 인덱스를 포함하는 객체
 * @returns {number} return.pageStart - 현재 페이지의 첫 번째 항목 인덱스 
 * @returns {number} return.pageEnd - 현재 페이지의 마지막 항목 인덱스
 * 
 * @example
 * 
 * const {pageStart, pageEnd} = getPageStartEnd(limit, page) {
 *  const pageStart = (page - 1) * limit;
 *  const pageEnd = pageStart + limit;
 *  return {pageStart, pageEnd};
 * }
 */

// 쿼리 파라미터로 오는 limit이랑 page를 prisma문법으로 사용할 수 있도록 변경하는 기능을 만들어 준 것
export default function getPageStartEnd(limit, page) {
  const pageStart = (page - 1) * limit;
  const pageEnd = pageStart + limit;
  return {pageStart, pageEnd};
}

