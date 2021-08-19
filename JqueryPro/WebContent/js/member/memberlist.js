/**
 * 
 */

$(document).ready(function(){
			$("#btnSearch").click(function(){
				//서버로 전달할 데이터 만들기
				var userId = $("#userId").val();
				var userName = $("#userName").val();
				var param={
						memId : userId
						,memName : userName
						,flag : "L"
						};
				$.ajax({
					url : "/JqueryPro/MemberServlet"
					,type : "post"
					,data : param
					,dataType : "json"
					,success : function(data){
						alert("성공");
						makeTable(data);
						
					}
				
					,error : function(xhr){
						console.log(xhr);
						alert("오류발생");
					}
				});
				
			});
			
		});
		
/* 		function makeTable(data){
			var str = "<table border='1' style='border-collapse: collapse;"
				+"text-align: center;' width='700' >";
			for(var obj of data){
			str += "<tr>";
			str += "<td>"+obj.id+"</td>"
			+"<td>"+obj.name+"</td>" 			
			+"<td>"+obj.pass+"</td>" 
			+"</tr>";
			}
			
			 str +="</table>";
			$("#divResult").html(str);
			
		}
		  */
		
		function makeTable(data){
		var str = "";
		for(var i = 0 ;i<data.length;i++){
			str +=  "<tr>"
				+  "<td>"+(i+1)+"</td>"
				+  "<td>"+data[i].memId+"</td>"
				+  "<td>"+data[i].memName+"</td>"
				+  "<td>"+data[i].memPass+"</td>"
				+  "<td>"+data[i].memBir+"</td>"
				//+  "<td>"+data[i].memHp+"</td>"
				+  "<td>"+formatHp(data[i].memHp)+"</td>"
				+  "<td>"+data[i].memMail+"</td>"
				+  "<td>"+data[i].memJobName+"</td>"
				+  "</tr>";
			}
		
			$("#tbResult tbody").html(str);
			
		}
		

		
		
		
		
