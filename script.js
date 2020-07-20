// JS 4 .
// nav-link를 가져와서, array목록의 색을 1개씩  가져와서, background-color 넣음
// T: array.from , style.cssText

const colors = ["red", "blue", "green", "yellow", "orange"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color:${colors[i++]}`;
});

// JS 2 <pupular tours> 버튼누르면 앞뒤 화면전환
// item 부모의 부모의 태그에 추가 toggle 'change '
// T: Array.from
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
