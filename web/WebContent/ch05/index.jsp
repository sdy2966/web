<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>ch05/inputTag.html</title>
</head>
<body>
	<% request.setCharacterEncoding("utf-8");
		
		
			
	
		String name = request.getParameter("name");
		String sex = request.getParameter("sex");
		String year = request.getParameter("year");
		String subject = request.getParameter("subject");
		String hobby = request.getParameter("hobby");
		
	%>
	<h2>�̸�:<%=name %></h2>
	<h2>����:<%=sex %></h2>
	<h2>��й�ȣ:<%=year %></h2>
	<h2>�̸�:<%=subject %></h2>
	<h2>�̸�:<%=hobby %></h2>
</body>
</html>