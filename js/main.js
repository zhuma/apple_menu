/**
 * Created by hanshaojie-pc on 2017/3/8.
 */
window.onload = function () {
    var oDiv = document.getElementById("div1");
    var oImg = oDiv.getElementsByTagName("img");
    oDiv.onmousemove = function (e) {
        var ev = e || event;
        for (var i = 0; i < oImg.length; i++) {
            var x = oImg[i].offsetLeft + oImg[i].offsetWidth / 2;
            var y = oImg[i].offsetTop + oDiv.offsetTop + oImg[i].offsetHeight / 2;

            var mx = ev.clientX;
            var my = ev.clientY;

            var a = mx - x;
            var b = my - y;

            var dis = Math.sqrt(a * a + b * b);
            var scale = 1 - dis / 300;
            if (scale < 0.5) {
                scale = 0.5;
            }
            oImg[i].width = scale * 128;
        }
    };
    oDiv.onmouseleave = function () {
        for (var i = 0; i < oImg.length; i++) {
            oImg[i].width = 64;
        }
    }

};