<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	당신이 입력한 아이디는 ${param.userid} <br>
	당신이 입력한 아이디는 ${param.password} <br>
	<%=request.getParameter("userid") %> <br>
	<%=request.getParameter("password") %> <br>
	<hr>
	당신이 입력한 아이디는 ${param.userid2} <br>
	당신이 입력한 아이디는 ${param.password2} <br>
	<%=request.getParameter("userid2") %> <br>
	<%=request.getParameter("password2") %> <br>
	<%=request.getParameter("phone") %> <br>
	
</body>
</html>