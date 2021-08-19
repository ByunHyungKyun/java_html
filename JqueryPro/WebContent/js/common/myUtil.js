/**
 * 
 */

/*핸드폰 번호 포맷*/
	function formatHp(val){
		//val : 01012341234 , 010-1234-1234, 0101234-1234
		//		010 1234 1234, 010 12341234, 0101234 1234
		val = val.replaceAll("-","").replaceAll(" ","");
		
		//010-1234-1234,010-123-1234
		val = val.replace(/(\d{3})(\d{3,4})(\d{4})/,"$1-$2-$3");
		
		return val;
	}
		
$(document).ready(function(){
	
});


//[중복검사] 버튼에 클릭 이벤트
function chkId(){
	var memId = $("#memId").val();
	
	// 빈 값 확인     
	if(isEmpty(memId)) {
		alert("ID 값이 입력되지 않았습니다.");
		$("#memId").focus();
		$("#spMemId").show();
		return;
	}
	
	// 유효성 검사 - 영어소문자와 숫자로 구성. 3글자 이상 10글자 이하 
	var regExp = /^[a-z0-9]{3,10}$/;
	if(!regExp.test(memId)) {
		alert("ID 값이 유효하지 않습니다.");
		$("#memId").focus();
		$("#spMemId").show();
		return;
	}
	
	// DB에서 중복검사 수행
	$.ajax({
		url : "/JqueryPro/MemberServlet"
		,type : "post"
		,data : {"memId" : memId, "flag" : "CHKID"}
		,dataType : "json"
		,success : function(data){
			console.log(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("ID 중복 검사 중 오류가 발생했습니다.");
		}
			
	});
	
}























































