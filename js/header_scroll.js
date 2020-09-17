// Хэдер
let header = document.querySelector("header");
let header_size = header.offsetHeight;
let last_pageYOffset = pageYOffset;
// Отступ main-а
document.querySelector("main").style.top = header_size + "px";
document.querySelector("footer").style.top = header_size + "px";

// Первоначальная установка высоты
set_header_height()

function set_header_height(){
    header_size = header_size - (pageYOffset - last_pageYOffset);
    
    _header_height = ((header_size < 0) ? 0 : header_size)

    header.style.height = _header_height + "px";

    last_pageYOffset = pageYOffset;
    // console.log("header height: " + _header_height)
}

// Скролл хэдера
window.addEventListener('scroll', set_header_height);

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

  // Кнопка меню
let nav_table = document.getElementById("nav_container");
document.getElementById("menu_icon").onclick = () => {
    nav_table.classList.toggle("invisible");
}