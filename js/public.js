window.onload = function () {
    let show = document.getElementById("todayTime");
    setInterval(function () {
        let time = new Date();   // 程序计时的月从0开始取值后+1   
        let m = time.getMonth() + 1;
        let hours = time.getHours();
        let text = ``;
        if (hours >= 0 && hours <= 8) {
            text = `早上`;
        } else if (hours > 8 && hours <= 12) {
            text = `上午`;
        } else if (hours > 12 && hours <= 14) {
            text = `中午`;
        } else if (hours > 14 && hours <= 18) {
            text = `下午`;
        } else if (hours > 18 && hours <= 24) {
            text = `晚上`;
        }
        let t = "今天是: &nbsp;&nbsp;" + time.getFullYear() + "年" + m + "月" + time.getDate() + "日"
            + " 星期" + "日一二三四五六".charAt(time.getDay()) + "&nbsp;" + text + "&nbsp;&nbsp;"
            + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        show.innerHTML = t;
    }, 1000);

    //js实现tab选项卡交互
    //方法一：
    function clickTab_01() {
        var aList=document.getElementsByClassName("list_nav"),
            aTab=document.getElementsByClassName("tab_nav"),
            index=0; //用来存储上一次的值
        for(var i=0;i<aList.length;i++){
            //闭包加函数自执行
            (function(i){
                aList[i].onclick=function(){
                    aList[index].classList.remove("active");
                    aTab[index].classList.remove("on");
                    index=i;
                    aList[index].classList.add("active");
                    aTab[index].classList.add("on");
                }
            })(i);
        }
    }
    //方法二：
    function clickTab_02() {
        var aList = document.getElementsByClassName("list_nav"),
            aTab = document.getElementsByClassName("tab_nav");
        for (var i = 0; i < aList.length; i++) {
            aList[i].index = i;
            //清除所有li的class
            aList[i].onclick = function () {
                for (var i = 0; i < aList.length; i++) {
                    aList[i].classList.remove("active");
                    aTab[i].classList.remove("on");
                }
                //给当前li添加样式
                aList[this.index].classList.add("active");
                aTab[this.index].classList.add("on");
            }
        }
    }
    clickTab_02();
};

