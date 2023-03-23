//array contain img
//function slide show

var i = 0;
var slideImage = ["img/gallery-01.png" , "img/gallery-02.png" , "img/gallery-04.png" ];

//expression function
var slideShow = function(){

    document.slideshow.src = slideImage[i];

    if (i < slideImage.length - 1){
       i++;
    } else {
        i = 0 ;
    }

    setTimeout("slideShow()", 2000) ;
}

slideShow();