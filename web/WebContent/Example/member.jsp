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
	String email1 = request.getParameter("email1");
	String password = request.getParameter("passwd");
	String name = request.getParameter("name");

	String birthyy = request.getParameter("year");
	String birthmm = request.getParameter("m");
	String birthdd = request.getParameter("d");
	 
	String gender = request.getParameter("sex");
	String[] hobby = request.getParameterValues("hobby");
	
	
%>
 <div id="id01">
 	<br><br>
 	<b><font size="5" color="gray">입력정보를 확인하세요.</font></b>
 	<br><br>
 	<font color="blue"><%=name %></font>님 가입을 축하드립니다.
	<br><br>
        
	<table border="1">
		<tr>
			<th>아이디(이메일)</th>
			<td><%=id %>@<%=email1 %> </td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td><%=password %></td>
		</tr>
		<tr>
			<th >이름</th>
			<td><%=name %></td>
		</tr>
		<tr>
			<th>생년월일</th>
			<td><%=birthyy%>
					<%=birthmm%>
					<%=birthdd%>
			</td>
		</tr>
		<tr>
			<th>성별</th>
			<td><%=gender
			%></td>
		</tr>
		<tr>
			<th>취미</th>
			<td><%
			for(int i=0; i < hobby.length; i++) {
				String selectHobby = hobby[i]; %>
					<%=selectHobby %>,
			<%}%>
			</td>
		</tr>
	</table>	
	<br>
	<input type="button" value="Checked">
	</div>
</body>
</html>