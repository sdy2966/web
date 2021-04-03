<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Member</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8"); 
	
	String id = request.getParameter("id");
	String password = request.getParameter("passwd");
	String name = request.getParameter("name");

	String birthyy = request.getParameter("brt_yy");
	String birthmm = request.getParameter("brt_mm");
	String birthdd = request.getParameter("brt_dd");
	 
	String gender = request.getParameter("gender");
	
	
%>
 <div id="id01">
 	<br><br>
 	<b><font size="5" color="gray">입력정보를 확인하세요.</font></b>
 	<br><br>
 	<font color="blue"><%=name %></font>님 가입을 축하드립니다.
	<br><br>
        
	<table border="1">
		<tr>
			<th>아이디</th>
			<td><%=id %></td>
		</tr>
		<tr>
			<th id="title">비밀번호</th>
			<td><%=password %></td>
		</tr>
		<tr>
			<th id="title">이름</th>
			<td><%=name %></td>
		</tr>
		<tr>
			<th id="title">생년월일</th>
			<td><%=
			
			
			%></td>
		</tr>
		<tr>
			<th id="title">성별</th>
			<td><%=
		
			
			
			%></td>
		</tr>
	</table>
	</div>
</body>
</html>