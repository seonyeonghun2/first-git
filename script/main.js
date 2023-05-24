//  산, 바다 각각의 내용 컨텐츠 하단에
// 자세히보기 버튼을 삽입하고,
// 이것을 클릭하면 해당 컨텐츠에 대한 자세한 검색결과:정보
// 페이지로 화면을 이동시키는 기능
// (,) : 소괄호,     {,} : 중괄호    ,     [,] : 대괄호

// DOM 조작 : 순서? 방법!
// 1.#btn01 대상을 선택하고 (브라우저가 알수 있게)
/* document.querySelector(선택자) : 선택해~! */
// 2. 대상에 조작/제어 지시 : click 하면 할일을 처리해!
/* addEventListener("click", ()=>{...code...}) : click하면 code를 실행해! */
/* location.href : 웹브라우저의 주소창에 이동할 주소값 작성하는 코드 */
document.querySelector("#btn01").addEventListener("click", () => {
    //무등산 상세페이지로 이동합니다.
    location.href="https://seorak.knps.or.kr/front/portal/visit/visitCourseSubMain.do?parkId=122000&parkNavGb=park&menuNo=7020090"
});
document.querySelector("#btn02").addEventListener("click", () => {
    //지리산 상세페이지로 이동합니다.
    location.href="https://www.knps.or.kr/front/portal/visit/visitCourseSubMain.do?parkId=120100&menuNo=7020100"
});

