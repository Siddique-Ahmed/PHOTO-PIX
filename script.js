var sideNav = document.getElementById('side-nav');
var hamburgerMenu = document.getElementById('hamburger-menu');
sideNav.style.width='0px';
hamburgerMenu.addEventListener("click", ()=>{
    if(sideNav.style.width=="0px"){
        sideNav.style.width="250px";
    }else{
        sideNav.style.width="0px"
    }
})