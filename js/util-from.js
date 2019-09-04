/**
 * 判断指定名称的复选框是否被选中
 * chname复选框名称
 */
function chkCheckCha(chname) {
    var obj = jQuery("[name='" + chname + "']");
    var isCheck = false;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked == true) {
            isCheck = true;
            break;
        }
    }
    return isCheck;
}
/**
 * 得到指定名称的复选框被选中个数
 */
function checkChangedOnly(chname) {
    var obj = jQuery("[name='" + chname + "']");
    var count = 0;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked == true) {
            count++;
        }
    }
    return count;
}
/**
 * 得到指定名称的单个被选中的复选择框的值
 */
function getValueCheckOnly(chname) {
    var str = "";
    jQuery("[name='" + chname + "'][checked]").each(function () {
        str += jQuery(this).val();
    });
    return str;
}
/**
 * 得到多个复选框的值
 */
function getCheckVals(chname) {
    var str = "";
    jQuery("[name='" + chname + "'][checked]").each(function () {
        str += jQuery(this).val() + "@";
    });
    return str.substring(0, str.length - 1);
}
function getCheckHidden(chname, tagId) {
    var strval = getCheckVals(chname);
    var arr = "";
    var temp = strval.split("@");
    for (var i = 0; i < temp.length; i++) {
        var val = temp[i];
        var id = tagId + val;
        var tag = $("#" + id).val();
        arr += tag + "@";
    }
    return arr;
}
/**
 * 得到一些复选框的值 复选框的值中是否包含有","若无则用","将多个值组合 若有则先将值用","隔开再用","组合
 */
function getSomeChVals(chname) {
    var str = "";
    jQuery("[name='" + chname + "'][checked]").each(function () {
        var temp = jQuery(this).val();
        if (temp.indexOf(",") == -1) {
            str += temp + ",";
        } else {
            var tempValue = temp.split(",");
            str += tempValue[0] + ",";
        }
    });
    return str.substring(0, str.length - 1);
}
function getAnyCheckValue(chname) {
    var str = getCheckVals(chname);
    var tstr = str.split("@");
    var result = "";
    for (var i = 0; i < tstr.length; i++) {
        var temp = tstr[i].split(",");
        result += temp[0] + ",";
    }
    return result.substring(0, result.length - 1);
}
/**
 * 得到指定名称的有多个值的多个复选框的值
 */
function getCheckValues(chname) {
    var str = "";
    var sids = "";
    var snames = "";
    jQuery("[name='checkbox'][checked]").each(function () {
        var strval = jQuery(this).val();
        var temp = strval.split(",");
        var sid = temp[0];
        var sname = temp[1];
        sids += sid + ",";
        snames += sname + ", ";
    });
    str = sids.substring(0, sids.length - 1) + "|"
        + snames.substring(0, snames.length - 2);
    return str;
}
/**
 * 判断复选框的状态
 */
function decideCheckState(chname) {
    var str = getCheckVals(chname);
    var tstr = str.split("@");
    var temp = "";
    for (var i = 0; i < tstr.length; i++) {
        var tval = tstr[i];
        var tem = tval.substring(tval.length - 1, tval.length);
        temp += tem;
    }
    return temp;
}
// 复选框的值是否全为0
function checkStringz(chname) {
    var regex = /^[0]*$/g;
    var source = decideCheckState(chname);
    return regex.test(source);
}
// 复选框的值是否全为1
function checkStringO(chname) {
    var regex = /^[1]*$/g;
    var source = decideCheckState(chname);
    return regex.test(source);
}
function decideStrallz(source) {
    var regex = /^[0]*$/g;
    return regex.test(source);
}
function decideStrallO(source) {
    var regex = /^[1]*$/g;
    return regex.test(source);
}
/**
 * 复选框全选
 */
function checkboxAll(chname) {
    jQuery("[name='" + chname + "']").each(function () {
        jQuery(this).attr("checked", true);
    });
}
/**
 * 复选框反选
 */
function inverSelect(chname) {
    jQuery("[name='" + chname + "']").each(function () {
        if (jQuery(this).attr("checked")) {
            jQuery(this).attr("checked", false);
        } else {
            jQuery(this).attr("checked", true);
        }
    });
}
function selects(all_id, chname) {
    $("#" + all_id).click(function () {
        if ($(this).attr("checked")) {
            checkboxAll(chname);
        } else {
            clearSelect(chname);
        }
    });
}
function mouseHover(obj) {
    alert($(obj).attr("style"));
}
/**
 * 取消全选或反选
 * chname
 */
function clearSelect(chname) {
    jQuery("[name='" + chname + "']").each(function () {
        jQuery(this).attr("checked", false);
    });
}

/**
 * 点击删除按钮时使用
 */
function dele(chname) {
    var b = chkCheckCha(chname);
    if (!b) {
        alert("请选择要删除的记录");
        return false;
    } else if (confirm("删除后无法恢复，确定删除吗?")) {
        jQuery("[name='form1']").submit();
    } else {
        return false;
    }
}

/**
 * 校验Ip地址格式
 *
 * @param {}
 *            ipvale
 */
function checkIp(ipvale) {
    var regex = /^([1-9]|[1-9]\d|1\d{2}|2[0-1]\d|22[0-3])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/;
    var b = regex.test(ipvale);
    return b;
}

/**
 * 是否是由字母或数字组成的字符串
 *
 * @param {}
 *            letVale
 */
function checkLetOrNum(letVale) {
    var regex = /^([a-zA-Z_]{1})([\w]*)$/g;
    var b = regex.test(letVale);
    return b;
}

/**
 * 取字符串的第index的字符
 *
 * @param {}
 *            source
 * @param {}
 *            index
 */
function interceptStr(source, index) {
    var temp = source.charAt(index);
    return parseInt(temp);
}

/**
 * 检查字符串中beindex位置到endindex位置之间是否全由targer组成
 *
 * @param {}
 *            source
 * @param {}
 *            targer
 * @param {}
 *            beindex
 * @param {}
 *            endindex
 */
function checkStr(source, targer, beindex, endindex) {
    var flag = false;
    for (var i = beindex; i <= endindex; i++) {
        var temp = source.charAt(i);
        if (targer == temp) {
            flag = true;
        }
    }
    return flag;
}

/**
 * 验证字符串中的某一段是否全为0
 *
 * @param {}
 *            source
 * @param {}
 *            begin
 * @param {}
 *            end
 * @return {}
 */
function checkString(source, begin, end) {
    var regex = /^[0]*$/g;
    var temp = source.substring(begin, end + 1);
    //alert("###temp=="+temp);
    return regex.test(temp);
}

/**
 * 判断两个字符串是否想等 相等返回true否则返回false
 *
 * @param {}
 *            source
 * @param {}
 *            target
 */
function decideString(source, target) {
    return (source == target) ? true : false;
}

/**
 * 将字符串转换成数字
 * @param val
 * @return
 */
function stringToNumber(val) {
    return Number(val);
}

/**
 * 验证是否是整数或小数
 * @param source
 * @return
 */
function checkIntAndFloat(source) {
    var regex = /^[0-9]+(\.[0-9]+)?$/g;
    return regex.test(source);
}

/**
 * 验证是否是整数或只有一位小数点的小数
 *
 * @param {}
 *            source
 * @return {}
 */
function checkFloat(source) {
    // var regex=/^[1-9]d*.d{1}|0.d{1}[1-9]d{1}$/g;
    var regex = /^[0-9]+\d*[\.\d]?\d{0,1}$/g;
    return regex.test(source);
}

/**
 * 验证是否两位数以内的正整数
 *
 * @param {}
 *            source
 * @return {}
 */
function checkTwoInt(source) {
    var regex = /^[1-9][0-9]?$/g;  //两位数以内的正整数
    return regex.test(source);
}

/**
 * 验证数字
 *
 * @param {}
 *            source
 * @return {}
 */
function checkNumber(source) {
    var regex = /^(\-|\+)?\d+(\.\d+)?$/;
    return regex.test(source);
}

/**
 * 验证是否是两位小数的正实数
 *
 * @param {}
 *            source
 * @return {}
 */
function checkTowLenFloat(source) {
    var regex = /^[0-9]+(.[0-9]{2})?$/g;//只能输入有两位小数的正实数
    return regex.test(source);
}

/**
 * 验证是否是两位或一位小数的正实数
 *
 * @param {}
 *            source
 * @return {}
 */
function checkTowLenFloatt(source) {
    var regex = /^[0-9]+(.[0-9]{1,2})?$/g;//只能输入有两位小数的正实数
    return regex.test(source);
}

/**
 * 验证是否是整数或只有2位小数的数
 *
 * @param {}
 *            source
 */
function checkTowFloat(source) {
    var regex = /^[1-9]+\d*[\.\d]?\d{0,2}$/g;
    return regex.test(source);
}

/**
 * 验证是否有空格
 *
 * @param {}
 *            source
 */
function checkSpace(source) {
    var regex = /\s/g;
    return regex.test(source);
}

/**
 * 检查一个数是否是整数则位数在8以内
 *
 * @param {}
 *            source
 */
function checkIntLeng(source) {
    var regex = /^[1-9]{1}[0-9]{1,7}$/g
    return regex.test(source);
}

/**
 * 检查一个数是否是整数则位数在2以内
 *
 * @param {}
 *            source
 */
function checkIntTwoLeng(source) {
    var regex = /^[1-9]{1}[0-9]{1,2}$/g
    return regex.test(source);
}

/**
 * 验证正整数
 *
 * @param {}
 *            source
 */
function checkInt(source) {
    // var regex=/^[1-9]d*$/g
    var regex = /^[0-9]*[1-9][0-9]*$/g
    return regex.test(source);
}

/**
 * 验证非负数
 *
 * @param {}
 *            source
 */
function checkNegative(source) {
    var regex = /^[1-9]\d*|0$/g
    return regex.test(source);
}

/**
 * 分割IP地址
 *
 * @param {}
 *            ipAddress
 */
function getIpNum(ipAddress) {
    var ip = ipAddress.split(".");
    var a = parseInt(ip[0]);
    var b = parseInt(ip[1]);
    var c = parseInt(ip[2]);
    var d = parseInt(ip[3]);
    var ipNum = a * 256 * 256 * 256 + b * 256 * 256 + c * 256 + d;
    return ipNum;
}

/**
 * 判断IP大小
 */
function decideIp(startIp, endIp) {
    var ip1 = getIpNum(startIp);
    var ip2 = getIpNum(endIp);
    return (ip2 > ip1) ? true : false;
}

/**
 * 验证是否全是空格
 *
 * @param {}
 *            source
 * @return {}
 */
function checkAllSpace(source) {
    var regex = /^\s+$/g
    return regex.test(source);
}

/**
 验证身份证号是否正确
 **/
function isCardNo(num){
	if(isNaN(num)){
		alert("输入的身份证号不是数字！");
		return false;
	}
	var len = num.length;
	if(len<15 || len>18){
		alert("输入的身份证号码长度不正确定！应为15位或18位");
		return false;
	}
	var re15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
	var re18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
	var res = (re15.test(num) || re18.test(num));
	if(res==false){
		alert("输入的身份证号格式不正确！");
		return false;
	}
	return res;
}
 
/**
 * 判断字符串是否为空，若为空则返回true否则返回false
 * @param source
 * @return true或者false
 **/
function isEmpty(source){
	var str = source.replace(/(^\s*)|(\s*$)/g,"");
	if(str=="" || str.toLowerCase()=="null" || str.length<=0){
		return true;
	}else{
		return false;
	}
}
 
/**
 * 验证是否为电话号码（座机）
 *
 * @param {}
 *            source
 */
 
function isTelephone(source) {
	var regex = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/
	return regex.test(source);  //search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1
}
 
/**
 * 验证是否为手机号码（移动手机）
 *
 * @param {}
 *            source
 */
 
function isMobilePhone(source) {
	var regex = /^((\(\d{3}\))|(\d{3}\-))?1\d{10}/;
	return regex.test(source);
}
 
/**
 * 验证是否为电子邮箱
 *
 * @param {}
 *            source
 */
function isEmail(source) {
	var regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(source.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){
		return true;
	}else{
		alert("电子邮箱格式不正确");
		return false;
	}
}
 
/**
 *
 *验证是否为邮编
 * @param
 *      source
 */
function isZip(source){
	var regex=/^[1-9]\d{5}$/;
	return regex.test(source);
}
 
/**
 *
 *验证字符串是否是中文
 *
 **/
function isChines(source){
	var regex = /^[\u4E00-\u9FA5]+$/;
	return regex.test(source);
}
 
/**
 生成指定位数的随机整数
 **/
function getRandomNum(count){
	var arr = new Array;
	var reNum = "";
	for(var i=0;i<count;i++){
		arr[i] = parseInt(Math.random()*10);
		reNum += String(arr[i]);
	}
	return reNum;
}
function random(min,max){
	return Math.floor(min+Math.random()*(max-min));
}
/*
 *判断包含关系
 *string:原始字符串
 *substr:子字符串
 *isIgnoreCase:忽略大小写
 */
 
 
function jsContains(string,substr,isIgnoreCase)
{
	if(isIgnoreCase)
	{
		string=string.toLowerCase();
		substr=substr.toLowerCase();
	}
	var startChar=substr.substring(0,1);
	var strLen=substr.length;
	for(var j=0;j<string.length-strLen+1;j++)
	{
		if(string.charAt(j)==startChar)//如果匹配起始字符,开始查找
		{
			if(string.substring(j,j+strLen)==substr)//如果从j开始的字符与str匹配，那ok
			{
				return true;
			}
		}
	}
	return false;
}
 
/**
 * 随机数UUID
 * @return
 */
function makeUUID() {
	var S4 = function () {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	//return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
}
 
/**
 * 得到项目的基地址
 * @return {}
 */
function getContextPath() {
	var strFullPath = window.document.location.href;
	var strPath = window.document.location.pathname;
	var pos = strFullPath.indexOf(strPath);
	var prePath = strFullPath.substring(0, pos);
	var path = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
	return path;
}
 
/**
 *  显示提示信息
 * @param {Object} msg
 */
function showInfoMessage(msg) {
	Ext.MessageBox.show({
		width:320,
		buttons:Ext.Msg.OK,
		msg:msg,
		icon:Ext.MessageBox.INFO,
		title:"系统提示"
	});
}

/**
 * 判断是否为空
 * @param val
 * @returns
 */
function isNull(val) {
    if (val == undefined || val == null || val == "" || val == ''
        || val == "undefined" || val == "null" || val == "NULL") {
        return true;
    }
    return false;
}

/**
 *    变量是否为数字
 */
this.isNumber = function (str) {
    var regExp = /^\d+$/g;
    return regExp.test(str);
}