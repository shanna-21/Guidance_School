window.addEventListener("scroll", Header_effect);
function Header_effect() 
{
    var left_header_Bg2 = document.querySelector("left_header_Bg2");
    var textset1_1 = document.querySelector("textset1_1");
    var textset1 = document.querySelector("textset1");
    var textset2 = document.querySelector("textset2");
    var textset3 = document.querySelector("textset3");
    var textset4 = document.querySelector("textset4");
    var textset5 = document.querySelector("textset5");
    var header = document.querySelector("header");
    var logo = document.querySelector("logo");
    var WA_Logo = document.querySelector("WhatsApp_logo")
    var FB_Logo = document.querySelector("Facebook_logo")
    var IG_Logo = document.querySelector("Instagram_logo")
    var YT_Logo =  document.querySelector("Youtube_logo")
    var right_block =document.querySelector(".right_block")
    var logo1_1 =document.querySelector(".logo1_1")

    left_header_Bg2.classList.toggle("animation", window.scrollY > 0);
    textset1.classList.toggle("animation", window.scrollY > 0);
    textset2.classList.toggle("animation", window.scrollY > 0);
    textset3.classList.toggle("animation", window.scrollY > 0);
    textset4.classList.toggle("animation", window.scrollY > 0);
    textset5.classList.toggle("animation", window.scrollY > 0);
    header.classList.toggle("animation", window.scrollY > 0);
    logo.classList.toggle("animation", window.scrollY > 0); 
    WA_Logo.classList.toggle("animation", window.scrollY > 0);   
    FB_Logo.classList.toggle("animation", window.scrollY > 0);   
    IG_Logo.classList.toggle("animation", window.scrollY > 0);   
    YT_Logo.classList.toggle("animation", window.scrollY > 0);   
    right_block.classList.toggle("animation", window.scrollY > 0);
    logo1_1.classList.toggle("animation", window.scrollY > 0);
};