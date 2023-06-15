var menu = document.querySelector(".header .mega-menu") ;
var item = document.getElementById("item") ;
item.addEventListener("click" , ()=> {
    if(menu.style.opacity === "0") {
        menu.style.opacity = "1" ;
        menu.style.top   = "100%" ;
        menu.style.zIndex = "1000" ;
    } else {
        menu.style.opacity = "0" ;
        menu.style.top   = "calc(100% + 50px)" ;
        menu.style.zIndex = "-1" ;
    }
})


