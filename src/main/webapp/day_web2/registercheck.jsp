<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
    request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
    <h1>회원가입 정보 받아오기  </h1>
    <p>${param.userid},${param.password},${param.password2},
        ${param.name},${param.tel},
        ${param.email},${param.url}</p>
</body>
</html>