// JS 2 <pupular tours> 버튼누르면 앞뒤 화면전환
// item 부모의 부모의 태그에 추가 toggle 'change '
// T: Array.from
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
