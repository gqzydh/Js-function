//阻止冒泡
function stopBubble(e) {
    //如果提供了事件对象，则这是一个非IE浏览器
    if (e && e.stopPropagation) {
        //因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    }
    else {
        //否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
    }
}

//阻止浏览器的默认行为
function stopDefault(e) {
    //防止浏览器默认行为(W3C)
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    //IE中组织浏览器行为
    else {
        window.event.returnValue = false;
        return false;
    }
}

// 文件下载
function downloadFile(url) {
    var $form = $('<form method="GET"></form>');
    $form.attr('action', url);
    $form.appendTo($('body'));
    $form.submit();
    $form.remove();
}


// js 根据文件大小换算合适单位，并保留两位小数
function getFileSize(fileByte) {
    var fileSizeByte = fileByte;
    var fileSizeMsg = "";
    if (fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + "KB";
    else if (fileSizeByte == 1048576) fileSizeMsg = "1MB";
    else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + "MB";
    return fileSizeMsg;
}

//用正则表达式实现html转码
function htmlEncodeByRegExp(str) {
    if (!str) return "";
    var s = "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    return s;
}

//用正则表达式实现title换行
function titleBrByRegExp(str) {
    if (!str) return "";
    var s = "";
    s = str.replace(/<br>/g, "&#13");
    s = s.replace(/<br\/>/g, "&#13;");
    s = s.replace(/<br \/>/g, "&#13;");
    return s;
}

/**
 * 获取光标位置函数
 * @param obj   input或者textarea对象
 * @returns {number}  获取到的光标位置
 */
function getCursortPosition(obj) {
    var CaretPos = 0; // IE Support
    if (document.selection) {
        obj.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -obj.value.length);
        CaretPos = Sel.text.length;
    }
    // Firefox support
    else if (obj.selectionStart || obj.selectionStart == '0')
        CaretPos = obj.selectionStart;
    return (CaretPos);
}

/**
 * 设置光标位置函数
 * @param obj   input或者textarea对象
 * @param pos   光标要移动到的位置
 */
function setCaretPosition(obj, pos) {
    if (obj.setSelectionRange) {
        obj.focus();
        obj.setSelectionRange(pos, pos);
    }
    else if (obj.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
/**
 * 字符串固定位置插入字符
 * @soure       原字符串
 * @start       要插入字符的位置
 * @newStr      要插入的字符
 * @returns {string}
 */
function insertStr(soure, start, newStr) {
    return soure.slice(0, start) + newStr + soure.slice(start);
}

/*******************************************************************************
 * openWindow(url)函数：弹出窗口 * url：路径 * left:左边的距离 * top：上边的距离 * width：窗口宽度 *
 * height：窗口高度 * resize：yes时可调整窗口大小，no则不可调 *
 ******************************************************************************/
function openWindow(url, width, height, resize) {
    var mleft = (screen.width - width) / 2;
    var mtop = (screen.height - height) / 2;
    window.open(url, "", "height=" + height + ",width=" + width
        + ",location=no,menubar=no,resizable=" + resize
        + ",scrollbars=yes,status=no,toolbar=no,left=" + mleft
        + ",top=" + mtop + "");
}

function openWindow(url, width, height, resize, scrollbars) {
    var mleft = (screen.width - width) / 2;
    var mtop = (screen.height - height) / 2;
    window.open(url, "", "height=" + height + ",width=" + width
        + ",location=no,menubar=no,resizable=" + resize
        + ",scrollbars=" + scrollbars + ",status=no,toolbar=no,left=" + mleft
        + ",top=" + mtop + "");
}
/**
 *
 * @param {} url
 * @param {} width
 * @param {} height
 */
function showNewWind(url, width, height) {
    //alert(url);
    var showresult = window.showModalDialog(url, window, "dialogWidth=" + width + "px;dialogHeight=" + height + "px;location=no;status=no;scroll=yes");
    return showresult;
}

/**
 *
 * @param {} url
 * @param {} width
 * @param {} height
 */
function showNewLessWind(url, width, height) {
    //alert(url);
    var showresult = window.showModelessDialog(url, window, "dialogWidth:" + width + "px;location=no;status:no;dialogHeight:" + height + "px");
    return showresult;
}

function decideLeve(source) {
    var regex = /^[a-zA-Z]{1}$/g;
    return regex.test(source);
}

function openBlankWindow(url) {
    openWindow(url, "650", "400", "yes");
}

/**
 * 给URL追加参数
 * @param {} url
 * @param {} parameter 参数名
 * @param {} value  参数值
 */
function urlAddParmert(url, parameter, value) {
    var buf = new StringBuffer();
    if (!isEmpty(url)) {
        buf.append(url);
        if (url.indexOf("?") > -1) {  //已经有参数
            buf.append("&");
        } else {
            buf.append("?");
        }
        buf.append(parameter);
        buf.append("=");
        buf.append(value);
    }
    return buf.toString();
}

/**
 * 得到文件的扩展名
 * @param {} filename
 */
function getFileExt(filename) {
    var d = /\.[^\.]+$/.exec(filename);
    var ext = new String(d);
    var s = ext.toLowerCase();
    return s;
}

//字符串编码
function strEncode(source) {
    return encodeURIComponent(source);
}
//字符串解码
function strDencode(source) {
    return decodeURIComponent(source);
}
/**
 * 字符串转正形
 * @param source
 * @returns
 */
function strParseInt(source) {
    if (isEmpty(source) || isNaN(source)) {
        return 0;
    }
    return parseInt(source);
}
/**
 * 字符串转Float形
 * @param source
 * @returns
 */
function strParseFloat(source) {
    if (isEmpty(source) || isNaN(source)) {
        return 0;
    }
    return parseFloat(source);
}
