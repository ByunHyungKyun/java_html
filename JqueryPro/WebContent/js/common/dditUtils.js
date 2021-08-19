/**
 * 
 */
//document.write('<script src="../../js/jquery-3.5.1.js"></script>');

function isEmpty(val) {
	if(val == undefined) return true;
	if(val == null) return true;
	if(val == "null") return true;
	val = jQuery.trim(val);
	if(val.length == 0) return true;
	return false;
}


function changeEmptyVal(val) {
	if(isEmpty(val)) return "";
	else return val;
}


function chkRegExp(val, type){
	if(isEmpty(val)) return false;
	var tmp = val;
	var regExp = "";
	if(type == "MEMBERID") {
		//영어소문자와 숫자로 구성. 3글자 이상 10글자 이하 
		regExp = /^[a-z0-9]{3,10}$/;
		if(regExp.test(tmp)) {
			return true;
		} else {
			return false;
		}
	} else if(type == "MEMBERNAME") {
		//영어대문자, 한글. 2글자 이상 20글자 이하
		regExp = /^[A-Z가-힣]{2,20}$/;
		if(regExp.test(tmp)) {
			return true;
		} else {
			return false;
		}
	} else if(type == "MEMBERPASSWORD") {
		//영어소문자 또는 대문자를 1개 이상 포함. 숫자 1개이상 포함. 8~15자리 
		regExp = /(?=.*\d)(?=.*[a-zA-Z]).{8,15}/;
		if(regExp.test(tmp)) {
			return true;
		} else {
			return false;
		}
	} else if(type == "EMAIL") {
		regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		if(regExp.test(tmp)) {
			return true;
		} else {
			return false;
		}
	} else if(type == "ZIPCODE") {
		regExp = /^\d{5,6}$/;
		if(regExp.test(tmp.replaceAll("-", ""))) {
			return true;
		} else {
			return false;
		}
	} else if(type == "DATE") {
		regExp = /^\d{8}$/;
		if(regExp.test(tmp.replaceAll("-", "").replaceAll("/", "").replaceAll(".", ""))) {
			return true;
		} else {
			return false;
		}
	} else if(type == "HP") {
		//영어소문자 또는 대문자를 1개 이상 포함. 숫자 1개이상 포함. 8~15자리 
		regExp = /^\d{3}\d{3,4}\d{4}$/;
		if(regExp.test(tmp)) {
			return true;
		} else {
			return false;
		}
	} else if(type == "TEL") {
		//영어소문자 또는 대문자를 1개 이상 포함. 숫자 1개이상 포함. 8~15자리 
		regExp = /^\d{2,3}\d{3,4}\d{4}$/;
		if(regExp.test(tmp)) {
			return true;
		} else {
			return false;
		}
	}
}



function format(type, val) {
	console.log(">>>>>>>>>>>>>>format ::: [type, val] : "+ type +"," + val);
	if(isEmpty(val)) return "";
	
	var regExp = "";
	var tmp = "";
	
	if(type == "hpno") {
		tmp = val.replaceAll("-", "");
		
		regExp = /^\d{3}\d{3,4}\d{4}$/;
		if( regExp.test(tmp) ) {
			tmp = tmp.replace( /(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3" );
			console.log(">>>>>>>>>>>>>>format ::: [hpno, val] : "+ tmp);
			return tmp;
			
		} else return val;
		
	}else if(type == "telno") {
		tmp = val.replaceAll("-", "");
		
		regExp = /^\d{2,3}\d{3,4}\d{4}$/;
		if( regExp.test(tmp) ) {
			tmp = tmp.replace( /(\d{2,3})(\d{3,4})(\d{4})/, "$1-$2-$3" );
			console.log(">>>>>>>>>>>>>>format ::: [telno, val] : "+ tmp);
			return tmp;
			
		} else return val;
	}
	return val;
}


function formatDate(type, val) {
	if(isEmpty(val)) return "";
	
	var regExp = "";
	var tmp = "";
	
	if(/^(y|Y){4}-(m|M){2}-(d|D){2}$/.test(type)) { // YYYY-MM-DD형식
		tmp = val.replaceAll("-", "").replaceAll("/", "");
		
		regExp = /^\d{8}$/;
		if( regExp.test(tmp) ) {
			tmp = tmp.replace( /(\d{4})(\d{2})(\d{2})/, "$1-$2-$3" );
			return tmp;
			
		} else return val;
		
	} else if(/^(y|Y){4}\/(m|M){2}\/(d|D){2}$/.test(type)) { // YYYY/MM/DD형식
		tmp = val.replaceAll("-", "").replaceAll("/", "");
		
		regExp = /^\d{8}$/;
		if( regExp.test(tmp) ) {
			tmp = tmp.replace( /(\d{4})(\d{2})(\d{2})/, "$1/$2/$3" );
			return tmp;
			
		} else return val;
		
	} else if(/^(y|Y){4}년(m|M){2}월(d|D){2}일$/.test(type)) { // YYYY/MM/DD형식
		tmp = val.replaceAll("-", "").replaceAll("/", "");
		
		regExp = /^\d{8}$/;
		if( regExp.test(tmp) ) {
			tmp = tmp.replace( /(\d{4})(\d{2})(\d{2})/, "$1년$2월$3일" );
			return tmp;
			
		} else return val;
		
	}
		
	return val;
}