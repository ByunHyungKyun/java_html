/**
 * 
 */

$(document).ready(function(){
	// 화면 초기화 작업들 진행
	
	// 1. '직업코드' 세팅
	initJobSelect();
	// 2. '기념일코드' 세팅
	initMemorialSelect();
	// 3. '광고메일 수신 여부' 기본값 세팅- 미수신
//	$("[name=recvEmailYn]")
	$("#recvEmailYnN").prop("checked", true);
	// 4. '취미코드' 세팅 (체크박스)
	initHobbyCheck();
	
	// 5. '우편번호찾기 화면-시' 세팅
	initCitySelect();
	
	/*$("#tbZipResult tbody").click(function(){
		프로그램 세팅시 클릭이라 테이블이 없으면 클릭이 안된다
	});*/
	
	//그래서 on을 써서 클릭이벤트를 줘야 상시 줄수있다.
	/*$("#tbZipResult tbody tr").on("dblclick",function(){
		
	});*/
	
	$("#tbZipResult").on("dblclick","tbody tr",function(){
		//this ==> tr
		
		var zipcode = $(this).children("td:eq(0)").text();
		var addr = $(this).children("td:eq(1)").text();
		
		//메인화면(부모창)의 우편번호,주소 input에 데이터 세팅
		$("#memZip").val(zipcode);
		$("#memAdd1").val(addr);
		
		$("#zipModal").modal("hide");
		
	});
});

function initJobSelect(){
	// 직업코드 조회해서 세팅하기
	$.ajax({
		url : "/MemberPj/CodeServlet"
		,type : "post"
		,data : {"groupCode" : 'A02'} // 직업코드 조회
		,dataType : "json"
		,success : function(data){
//			console.log(data);
			makeJobSelect(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});
}

function initMemorialSelect(){
	$.ajax({
		url : "/MemberPj/CodeServlet"
		,type : "post"
		,data : {"groupCode" : 'A03'} // 직업코드 조회
		,dataType : "json"
		,success : function(data){
//			console.log(data);
			makeMemorialSelect(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});
}
function initHobbyCheck(){
	
}
function initCitySelect(){
	var param = {
			'flag' : 'SI'
	};
	
	$.ajax({
		url : "/MemberPj/ZipServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success : function(data){
//			console.log(data);
			makeCitySelect(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});
}


function makeJobSelect(data){
	var strHtml = "";
	for(var i=0 ; i<data.length ; i++){
		strHtml += '<option value="' + data[i].value +'">' + data[i].name + '</option>';
	}
	$("#memJob").html(strHtml);
	
}

function makeMemorialSelect(data){
	var strHtml = "";
	for(var i=0 ; i<data.length ; i++){
		strHtml += '<option value="' + data[i].value +'">' + data[i].name + '</option>';
	}
	$("#memMemorial").html(strHtml);
}

function makeCitySelect(data){
	// 방법1)
	var strHtml = '<option value="">선택하세요</option>';
//	var strHtml = '';
	for(var i=0 ; i<data.length ; i++){
		strHtml += '<option value="' + data[i].sido +'">' + data[i].sido + '</option>';
	}
	$("#city").html(strHtml);
	
	setGu();
	
	// 방법2)
	//setGu();
	
	// 방법3)
	//trigger로 change 이벤트 호출
}


function setGu(){
	var param = {
			'sido' : $("#city").val()
			,'flag' : 'GU'
	};
	
	$.ajax({
		url : "/MemberPj/ZipServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success : function(data){
//			console.log(data);
			makeGugunSelect(data);
			
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});	
}

function makeGugunSelect(data){
	var strHtml = '<option value="">선택하세요</option>';
	for(var i=0 ; i<data.length ; i++){
		strHtml += '<option value="' + data[i].gugun +'">' + data[i].gugun + '</option>';
	}
	$("#gu").html(strHtml);
	$("#gu").prop("disabled", false);
	
	 setDong();
}


function setDong(){
	var param = {
			'sido' : $("#city").val()
			,'gugun' : $("#gu").val()
			,'flag' : 'DONG'
	};
	
	$.ajax({
		url : "/MemberPj/ZipServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success : function(data){
//			console.log(data);
			makeDongSelect(data);
			
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});
	
}

function makeDongSelect(data){
	var strHtml = '<option value="">선택하세요</option>';
	for(var i=0 ; i<data.length ; i++){
		strHtml += '<option value="' + data[i].dong +'">' + data[i].dong + '</option>';
	}
	$("#dong").html(strHtml);
	$("#dong").prop("disabled", false);
}

function searchZipCode(){
	var sido = $("#city").val();
	var gu = $("#gu").val();
	var dong= $("#dong").val();
	
	if(isEmpty(sido) || isEmpty(gu) || isEmpty(dong)) {
		alert("시, 구, 동을 선택하고 검색 버튼을 누르세요.");
		return;
	}
	
	var param = {
			'sido' : sido
			,'gugun' : gu
			,'dong' : dong
	};
	
	$.ajax({
		url : "/MemberPj/ZipServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success : function(data){
//			console.log(data);
			makeZipTable(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});
}

function makeZipTable(data){
	$("#divZipResult").show();
	$("#tbZipResult tbody").empty();
	
	var strHtml = "";
	for(var i=0 ; i<data.length ; i++) {
					//<tr onclick='alert("300-801","대전","중구","문화1동","1번지");'>
		//strHtml += "<tr onclick='fntest(\""+ data[i].zipcode+"\",\""+ data[i].sido+"\"" +
		//",\""+data[i].gugun +"\",\""+data[i].dong +"\",\""+changeEmptyVal(data[i].bunji) +"\");'>"
		//strHtml += "<tr onclick='fntest(\""+ data[i].zipcode+"\");'>"
		strHtml += "<tr onclick='fntest("+ data[i]+");'>"
				+ "<td>" + data[i].zipcode + "</td>"
				+ "<td>" + data[i].sido + " "
				+ data[i].gugun + " "
				+ data[i].dong + " " 
				+ changeEmptyVal(data[i].bunji) + "</td>"
				+ "</tr>";
	}
	
	
	$("#tbZipResult tbody").html(strHtml);
}




function fntest(obj){
	
	console.log(obj);
	
}


function isEmpty(val) {
	if(val == undefined) return true;
	if(val == null) return true;
	if(val == "null") return true;
	
	val = jQuery.trim(val);
	if(val.length == 0) return true;
	
	return false;
}



// [중복검사] 버튼에 클릭 이벤트
function chkId1(){
	var memId = $("#memId").val();
	
	// 빈 값 확인     
	if(isEmpty(memId)) {
		alert("ID 값이 입력되지 않았습니다.");
		$("#memId").focus();
		$("#spMemId").show();
		return;
	}
	
	// 유효성 검사 - 영어소문자와 숫자로 구성. 3글자 이상 10글자 이하 
	var regExp = /^(?=.*?[a-z])[a-z0-9]{3,10}$/;
	if(!regExp.test(memId)) {
		$("#spMemId").text("영어 소문자와 숫자 사용가능.3~10자리");
		$("#memId").focus();
		$("#spMemId").show();
		return;
	}
	
	// DB에서 중복검사 수행
	$.ajax({
		url : "/MemberPj/MemberServlet"
		,type : "post"
		,data : {"memId" : memId, "flag" : "CHKID"}
		,dataType : "json"
		,success : function(data){
			if(data.resultCnt == 0) {
				$("#checkedMemId").val(memId);
				$("#spMemId").text(memId+" 사용가능");
				$("#spMemId").show();
			} else {
				$("#spMemId").text("중복된 ID가 존재합니다.");
				$("#spMemId").show();
			}
		}
		,error : function(xhr){
			console.log(xhr);
			alert("ID 중복 검사 중 오류가 발생했습니다.");
		}
	});
}



function openZip() {
	//셀렉트 박스를 조회해서 초기화
	initCitySelect();
	
	//테이블 초기화
	$("#tbZipResult tbody").empty();
	$("#divZipResult").hide();
	
	
	//주소창(모달창 열기)열기-부트스트랩의 모달 메서드를 호출한것
	$("#zipModal").modal();
}




//회원정보 저장하기
function save(){
	//회원정보 유효성 체크
	var result = validate();
	
	if(!result){
		
		return;//false일때 리턴
	}
	
	//사용자 컨펌
	if(!confirm("저장하시겠습니까?")){
		return; //false일때 리턴
	}
	
	//DB에 저장하는 ajax 호출
	
	$("#formFlag").val("C");
	
	$.ajax({
		url : "/MemberPj/MemberServlet"
			,type : "post"
			,data : $("#fm").serialize() //폼형태로 값을 가져오는 메서드,파라미터에 일일이 값을 저장하지 않아도 된다
			,dataType : "json"
			,success : function(data){
				console.log(data);
				alert("저장되었습니다.");
				//페이지 이동 
				changePage();
			}
			,error : function(xhr){
				console.log(xhr);
				alert("실패하였습니다.\n관리자에게 문의하세요");
			}
	});
	
}





function searchZipCode2(){
	var param = {
			'dong' : $("#dong").val()
			,'flag' : 'REDONG'
	};
	
	
	$.ajax({
		url : "/JqueryPro/ZipServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success : function(data){
			console.log(data);
			makeZipTable2(data);
						
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});	
}


function makeZipTable2(data){
	$("#divZipResult").show();
	$("#tbZipResult tbody").empty();
	
	var strHtml = "";
	for(var i=0 ; i<data.length ; i++) {
		//<tr onclick='alert("300-801","대전","중구","문화1동","1번지");'>
		//strHtml += "<tr onclick='fntest(\""+ data[i].zipcode+"\",\""+ data[i].sido+"\"" +
		//",\""+data[i].gugun +"\",\""+data[i].dong +"\",\""+changeEmptyVal(data[i].bunji) +"\");'>"
		//strHtml += "<tr onclick='fntest(\""+ data[i].zipcode+"\");'>"
		strHtml += "<tr onclick='fntest("+ data[i]+");'>"
		+ "<td>" + data[i].zipcode + "</td>"
		+ "<td>" + data[i].sido + " "
		+ data[i].gugun + " "
		+ data[i].dong + " " 
		+ changeEmptyVal(data[i].bunji) + "</td>"
		+ "</tr>";
	}
	
	
	$("#tbZipResult tbody").html(strHtml);
}



function changeEmptyVal(val) {
	if(isEmpty(val)) return "";
	else return val;
}



function changePage() {
	//방법1.
	window.location.href = "/MemberPj/html/member/memberList2.html";
/*	
	//방법2.
	var fm = document.getElementById("#fm");
	fm.action = "/MemberPj/html/member/memberList2.html";//서블릿을 호출하기도함
	fm.method = "post";
	fm.submit();
	*/
}



function validate(){
	
	//...
	//return false;
	
	
	var memId = $("#memId").val();
	if(isEmpty(memId)) {
		alert("아이디는 필수 입력 입니다.");
		$("#spMemId").show();
		$("#memId").focus();
		return false;
	}
	
	
	
	
	var memName = $("#memName").val();
	if(isEmpty(memName)) {
		alert("이름은 필수 입력 입니다.");
		$("#spMemName").show();
		$("#memName").focus();
		return false;
	}
	
	
	var regName = /^[가-힣]{2,5}$/;
	if(!regName.test(memName)) {
		$("#spMemName").text("한글사용가능,2~5글자 입력가능합니다");
		$("#memPass").focus();
		$("#spMemName").show();
		return false;
	}
	
	
	var memPass = $("#memPass").val();
	if(isEmpty(memPass)) {
		alert("비밀번호는  필수 입력 입니다.");
		$("#spMemPass").show();
		$("#memName").focus();
		return false;
	}
	
	
	var regPass = /^(?=.*?[a-z])(?=.*?[0-9]).{8,12}$/;
	if(!regPass.test(memPass)) {
		$("#spMemPass").text("영어 소문자와 숫자 사용가능.8~12자리");
		$("#memPass").focus();
		$("#spMemPass").show();
		return false;
	}
	
	
	var memEmail = $("#memMail").val();
	if(isEmpty(memEmail)) {
		alert("이메일은 필수 입력 입니다.");
		$("#spMemMail").show();
		$("#memMail").focus();
		return false;
	}
	
	
	var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
	if(!regEmail.test(memEmail)) {
		$("#spMemMail").text("올바른 메일을 입력해주세요");
		$("#memMail").focus();
		$("#spMemMail").show();
		return false;
	}
	
	
	var memBir = $("#memBir").val();
	if(isEmpty(memBir)) {
		alert("생일은 필수 입력 입니다.");
		$("#spMemBir").show();
		$("#memBir").focus();
		return false;
	}
	
	
	var regBir = /^\d{6}$/;
	if(!regBir.test(memBir)) {
		$("#spMemBir").text("10살이상만 회원가입가능");
		$("#memBir").focus();
		$("#spMemBir").show();
		return false;
	}else if(21-memBir.substring(0,2)<10){
		$("#spMemBir").text("10살이상만 회원가입가능");
		$("#memBir").focus();
		$("#spMemBir").show();
		return false;
	}
	
	
	var memHp = $("#memHp").val();
	if(isEmpty(memHp)) {
		alert("휴대폰번호는 필수 입력 입니다.");
		$("#spMemHp").show();
		$("#memHp").focus();
		return false;
	}
	
	
	var regpH = /^\d{3}\d{3,4}\d{4}$/;
	if(!regpH.test(memHp)) {
		$("#spMemHp").text("올바른 휴대폰 번호를 입력하세요,-제외");
		$("#memHp").focus();
		$("#spMemHp").show();
		return false;
	}
	
	
	//체크가 끝나면
	return true;
}

















































