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
<%
String name = request.getParameter("name");
String[] hobby = request.getParameterValues("hobby2");
for(String s : hobby) {
    System.out.println(s);
    out.println("<h3>" + s + "</h3>");
}

%>

</body>
</html>