<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>ch05/inputTag.html</title>
</head>
<body>
	<% request.setCharacterEncoding("utf-8");
		String name = request.getParameter("name");
		%>	<h2>이름: <%=name %></h2> <%
	
	String sex = request.getParameter("sex");
			%> <h2> 성별:<%=sex %></h2> <% 
	String year = request.getParameter("year");
			%><h2>학년:<%=year %></h2><%


	%><h2>관심:<% 
	String[] subject = request.getParameterValues("subject"); 
		for(int i=0; i<subject.length; i++) {
		String selectSubject=subject[i];%> 
	 	<%=selectSubject %>/
		<%}
	%><h2>취미:<% 
	String[] hobby = request.getParameterValues("hobby");
		for(int i=0; i<hobby.length; i++) {
			String selectHobby = hobby[i]; %> 
			<%=selectHobby %>/
		<%}
	%>
	
	
	
	<!-- 
	
	<h2>관심:<%=subject %></h2>
	<h2>취미:<%=hobby %></h2>
	 -->
</body>
</html>