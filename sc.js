ham = document.querySelector('.burgur');
nav = document.querySelector('.navbar');
rnav = document.querySelector('.rightnav');
ham.addEventListener("click",function(){
    nav.classList.toggle('h-nav-resp');
    rnav.classList.toggle('v-class-resp');
    document.querySelector(".nav-list").classList.toggle('v-class-resp');
})