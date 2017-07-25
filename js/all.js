/**
 * Created by zhangxiaojun on 2017/6/8.
 */
window.onload = function(){
    search();
    seckill();
}

//search
var search = function(){
    //获取搜索盒子
    var headerBox = document.getElementsByClassName("header-box")[0];
    var bannerBox = document.getElementsByClassName("index-banner")[0];

    //获取banner的高度和页面滚动的高度
    var bannerHeight = bannerBox.offsetHeight;
    //console.log(scrollTop);
    window.onscroll = function() {
        var scrollTop = document.body.scrollTop;
        var db = scrollTop / bannerHeight
        //如果页面高度大于banner的高度，透明度为0.85，否则为页面高度/banner高度*0.85
        if(scrollTop > bannerHeight) {
            db = 0.85
        }else {
            db = scrollTop / bannerHeight * 0.85
        }
        headerBox.style.background = "rgba(201,21,35,"+db+")";
    }
}

//seckill
var seckill = function() {
    //获取span元素
    var seckillBox = document.getElementById("seckillBox");
    var spanList = seckillBox.getElementsByTagName("span");
    var timer = 06*60*60;
    //定义初始时间
    setInterval(function(){
        //加定时器，每一秒初始时间减1
        timer--;
        //换算成对应的小时，分钟，秒数
        var h = Math.floor(timer/3600);
        var m = Math.floor(timer/60%60) ;
        var s = Math.floor(timer%60);
        spanList[0].innerHTML = h>10?Math.floor(h/10):0;
        spanList[1].innerHTML = h%10;
        spanList[3].innerHTML = m>10?Math.floor(m/10):0;
        spanList[4].innerHTML = m%10;
        spanList[6].innerHTML = s>10?Math.floor(s/10):0;
        spanList[7].innerHTML = s%10;
    },1000)
}



















