// JS 6 navbar icon click - navbar wrapper coming out
const container = document.querySelector(".container");

// 1-1. const 지정없이 그냥 함수안에 넣어서 코드짜는 방식
// document.querySelector('.open-navbar-icon').addEventListener(
//   'click',()={
//     container.classList.add('change');
//   }
// );
// document.querySelector('.close-navbar-icon').addEventListener(
//   'click',()={
//     container.classList.remove('change');
//   }
// );

// 1-2. const 지정해서 코드 짜는 방식
const openNavbar = document.querySelector(".open-navbar-icon");
const closeNavbar = document.querySelector(".close-navbar-icon");

openNavbar.addEventListener("click", () => {
  container.classList.add("change");
});
closeNavbar.addEventListener("click", () => {
  container.classList.remove("change");
});

// JS 4 . Put colors on 'close-navbar-icon'
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
