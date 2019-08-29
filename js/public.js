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
};