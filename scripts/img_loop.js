function start() {
    var rotator = document.getElementById('rotator');  
    var imageDir = '../assets/img/cycles/';                          
    var delayInSeconds = 1;                            

    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

    var num = 0;
    var changeImage = function() {
        var len = images.length;
        rotator.src = imageDir + images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);
};
window.onload=function(){
start();
}