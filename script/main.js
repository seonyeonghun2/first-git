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


// 모달 창 닫기 버튼 스크립트
// 1. 닫기 버튼 선택
// 1.1 닫기 버튼 변수
let closeBTN = document.querySelector("#close_modal");
let modalBOX = document.querySelector(".modal");


// modal 창의 마지막 상태값을 저장하는 변수를 생성하고 그 값을 기록해 두었다가,
// 브라우저가 index.html 보여줄때 그 변수를 검사하고 닫은 상태라면,
// 더이상 modal 창을 보여주지 않게 프로그래밍 ==> 지금은 생략 (문법이 더 필요해요!)

//console.log(closeBTN); // 확인후 주석처리 합시다.
// 2. 이 버튼에 click을 감지하는 이벤트리스너 등록
closeBTN.addEventListener("click", () => { // click하면 {..}사이 실행해~!
    // 3. click이 되면, 처리할 일 등록 : 현재 모달 ==> 숨김 처리
    // console.log(modalBOX.style); // modalBOX의 style 보여줘
    // 3.1 값을 변수에 저장 하는 문법 ==> 변수명(또는 속성명) = 새 값;
    modalBOX.style.display = "none";
});

