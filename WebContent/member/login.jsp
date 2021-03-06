<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
request.setCharacterEncoding("UTF-8");
//메인페이지에서 장바구니 담기 버튼 클릭시 비로그인 상태일때 받는 값
String to = request.getParameter("to");
String with = request.getParameter("goodsCode");
%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>로그인</title>
<!-- favicon 설정 -->
<link rel="icon" type="image/x-icon" href="../images/favicon.png">
<!-- fontawesome 설정 -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="/style/style_member.css">
</head>
<body>
	<div id="wrap">
		<jsp:include page="/ind/headerTmp.jsp" />
		<main id="login">
			<form id="loginFrm" method="post" action="/member/loginProc.jsp">
				<table>
					<tbody>
						<tr id="title">
							<td>
								로그인
								<input type="hidden" name="to" value="<%=to %>">
								<input type="hidden" name="with" value="<%=with %>">
							</td>
						</tr>
						<tr>
							<td><input id="login_idInput" type="text" name="uId"
								placeholder="아이디를 입력해주세요"></td>
						</tr>
						<tr>
							<td><input id="pwInput" type="password" name="uPw"
								placeholder="비밀번호를 입력해주세요">
								<button class="pwBtn" type="button">
									<i class="fa fa-eye-slash"></i>
								</button></td>
						</tr>
						<tr>
							<td>
								<div id="util" class="dFlex">
									<div id="sec" class="dFlex">
										<input type="checkbox" id="secChk" checked> <label
											for="secChk">보안접속</label>
									</div>
									<ul id="findAccount" class="dFlex">
										<li class="findLi"><a href="/member/find_member.jsp?find=id">아이디 찾기</a></li>
										<li class="findLi">|</li>
										<li class="findLi"><a href="/member/find_member.jsp?find=pw">비밀번호 찾기</a></li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<button id="loginBtn" type="button">로그인</button>
							</td>
						</tr>
						<tr>
							<td>
								<a href="/member/member.jsp"><button id="memberBtn" type="button">회원가입</button></a>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</main>
		<jsp:include page="/ind/footerTmp.jsp" />
	</div>
	<!--div#wrap-->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="/script/script_member.js"></script>
</body>
</html>