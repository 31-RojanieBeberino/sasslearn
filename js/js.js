$(document).ready(function(){
    $('.hum-burger').on('click', function(){
        $('.nav-list').toggleClass('nav-append');
    }); 

    $(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('nav').addClass('shrink');
        }else{
            $('nav').removeClass('shrink');
        }
    });
});








// function navAppend() {
//     const humB = document.querySelector(".hum-burger");
//     const navApp = document.querySelector(".nav-list");

//     humB.addEventListener('click', () => {
//         navApp.classList.toggle("nav-append");
//     });
// }
// navAppend();

// function scrlNa() {
//     const navhead = document.querySelector("nav");

//     window.addEventListener('scroll', () => {
//         console.log("hey======>");
//         window.scroll() < 80 {
//             navhead.classList.add();
//         }
//         if (window.scroll() < 80){
//             navhead.classList.add('shrink');
//         }else{
//             navhead.classList.remove('shrink');
//         }
//     })
// }
// scrlNa();