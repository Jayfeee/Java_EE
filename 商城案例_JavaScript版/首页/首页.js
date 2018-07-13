//轮播方法
var x = 1;
function changeImg() {
    if(x == 6){
        x=1;
    }
    x++;
    document.getElementById("img").src = "../image/轮播图"+x+".png"
}
//定时
function init() {
    setInterval("changeImg()",1000);
    setTimeout("showAd()",3000);
    setTimeout("hiddenAd()",8000);
}
//广告图片显示
function showAd() {
    document.getElementById("adImg").style.display="block";
}
//广告图片隐藏
function hiddenAd() {
    document.getElementById("adImg").style.display="none";
}