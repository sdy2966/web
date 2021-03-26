<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ch05/01_get.html</title>
</head>
<body>
	<% request.setCharacterEncoding("utf-8");
		String name = request.getParameter("name");
		String major = request.getParameter("major");
		String passwd = request.getParameter("passwd");
		String school = request.getParameter("school");
	%>
	<h2>이름:<%=name %></h2>
	<h2>전공:<%=major %></h2>
	<h2>비밀번호:<%=passwd %></h2>
</body>
</html>
