// company_title.onmouseenter = function(event) {
//     let target = event.target;
//     target.style.background = 'pink';
//   };

// company_title.onmouseleave = function(event) {
//     let target = event.target;
//     target.style.background = '';
// }

// Хэдер
let header = document.querySelector("header");
let header_size = header.offsetHeight;
let last_pageYOffset = pageYOffset;
console.log("header height: " + header_size);
document.querySelector("main").style.top = header_size + "px";

// function isVisible(elem){
//     let window_h = document.documentElement.clientHeight;
// 
//     let elemRect = elem.getBoundingClientRect();
// 
//     let isTopVisible = elemRect.top > 0 && elemRect.top < window_h;
//     let isBottomVivsibe = elemRect.bottom > 0 && elemRect.bottom < window_h;
// 
//     return isTopVisible || isBottomVivsibe;
// }

// Скролл
// window.addEventListener('scroll', function() {
//     let c_f = document.querySelector(".company_features");
//     c_f.style.left = pageYOffset + "px";
//     // if (isVisible(c_f)){
//     //     c_f.style.left = pageYOffset + "px";
//     // }
//   });

// Скролл хэдера
window.addEventListener('scroll', function(){
    header_size = header_size - (pageYOffset - last_pageYOffset);
    header.style.height = header_size + "px";

    last_pageYOffset = pageYOffset;
    // console.log("header height: " + header_size)
});


// Кнопка меню
let nav_table = document.getElementById("nav_container");
document.getElementById("menu_icon").onclick = () => {
    nav_table.classList.toggle("invisible");
}

// Изменение размера названия компании
let company_title = document.querySelector(".company_title");
let big_text_size = company_title.offsetHeight;
window.addEventListener('scroll', function() {
    if (header_size <= big_text_size * 1.4){
        company_title.classList.add("smaller_title");
    }
    else{
        company_title.classList.remove("smaller_title");
    }
  });