<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<%
	 String name = requset.getParameter("name");
	%>
	<h1><%=name %></h1>
	<a href='event.html'>event</a>
	
</body>
</html>