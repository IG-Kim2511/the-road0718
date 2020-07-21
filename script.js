// JS 2 <pupular tours> 버튼누르면 앞뒤 화면전환
// item 부모의 부모의 태그에 추가 toggle 'change '

//T: Array.from(a, function)
// => a가 string이고 함수에 아무것도 적지않으면 a를 배열형식으로 만듬
// => a가 배열이면, 배열안의 요소를 복사해서 배열로 만듬
// => a가 배열이고, function이 있으면 패러미터가 각각의 배열이 되고 이걸 return시킨 값으로 배열을 만듬

const navBtn = document.querySelectorAll(".navigation-button");

Array.from(navBtn).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

// JS 4 . Put colors on 'close-navbar-icon'
// nav-link를 가져와서, array목록의 색을 1개씩  가져와서, background-color 넣음
// T: array.from , style.cssText

const colors = ["red", "blue", "green", "yellow", "orange"];

let i = 0;

const navLink = document.querySelectorAll(".nav-link");

Array.from(navLink).forEach((item) => {
  item.style.cssText = `background-color:${colors[i++]}`;
});

// JS 6 navbar icon click - navbar wrapper coming out
//navbar-icon클릭할때 .change추가

const container = document.querySelector(".container");

const openNavbar = document.querySelector(".open-navbar-icon");
const closeNavbar = document.querySelector(".close-navbar-icon");

openNavbar.addEventListener("click", () => {
  container.classList.add("change");
});
closeNavbar.addEventListener("click", () => {
  container.classList.remove("change");
});
