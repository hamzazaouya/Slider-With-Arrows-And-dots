/*global document*/

var slideIndex = 1;
slideShow(slideIndex);

function plusClick(n) {
    slideIndex += n;
    slideShow(slideIndex);
}

function circle(n) {
    slideIndex = n;
    slideShow(slideIndex);
}

function slideShow(n) {
    
    'use strict';
    
    var i,
        slides = document.getElementsByClassName("slide"),
        dots = document.getElementsByClassName("dot");
    
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if(n < 1) {
        slideIndex = slides.length;
    }else if(n > slides.length){
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}