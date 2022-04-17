/**
 * 
 */

$(function(){
	
	
	// 새로고침시 가장 위로 이동
	/*window.onbeforeunload = function() {
		window.scrollTo(0, 0);
	}*/
	
	
	// 구매수량 버튼 조절
	$("#cntPlus").click(function(){
		if(parseInt($(".cntBtn>input").val()) < 99) {
			let cnt = parseInt($(".cntBtn>input").val())+1;
			$(".cntBtn>input").val(cnt);
		}
	});
	
	$("#cntMinus").click(function(){
		if(parseInt($(".cntBtn>input").val()) > 0) {	
			let cnt = parseInt($(".cntBtn>input").val())-1;
			$(".cntBtn>input").val(cnt);
		} else {
			let cnt = 0;
			$(this).next().val(cnt);
		}
	});
	




		// 퀵메뉴 선택시 이동 기능
	$("#quickmenu li:first-child").click(function(){
		// 절대위치 계산
		const divId =document.getElementById('goods_contents');
		const clientRect = divId.getBoundingClientRect();
		const relativeTop = clientRect.top;
		
		const scrolledTopLength =window.pageYOffset; 
		const absoluteTop = scrolledTopLength + relativeTop;
		//alert(absoluteTop);
		// 이동효과
		window.scrollTo({
			left: 0,
			top: absoluteTop-30,
			behavior: 'smooth'
		});
		// 선택시 css 변경
		$("#quickmenu li:first-child").css({
			"background-color":"#fff",
			"border-bottom":"none",
			"color":"#741880"
		});
		$("#quickmenu li:not(:first-child)").css({
			"background-color":"#fafafa",
			"border":"1px solid #eee",
			"color":"rgba(102,102,102)"			
		});
	});

	$("#quickmenu li:nth-child(2)").click(function(){
		const divId =document.getElementById('topCen');
		const clientRect = divId.getBoundingClientRect();
		const relativeTop = clientRect.top;
		
		const scrolledTopLength =window.pageYOffset; 
		const absoluteTop = scrolledTopLength + relativeTop;
		//alert(absoluteTop);
		window.scrollTo({
			left: 0,
			top: absoluteTop-30,
			behavior: 'smooth'
		});
		$("#quickmenu li:nth-child(2)").css({
			"background-color":"#fff",
			"border-bottom":"none",
			"color":"#741880"
		});
		$("#quickmenu li:not(:nth-child(2))").css({
			"background-color":"#fafafa",
			"border":"1px solid #eee",
			"color":"rgba(102,102,102)"
		});
	});

	$("#quickmenu li:nth-child(3)").click(function(){
		const divId =document.getElementById('topRev');
		const clientRect = divId.getBoundingClientRect();
		const relativeTop = clientRect.top;
			
		const scrolledTopLength =window.pageYOffset; 
		const absoluteTop = scrolledTopLength + relativeTop;
		//alert(absoluteTop);
		window.scrollTo({
			left: 0,
			top: absoluteTop-30,
			behavior: 'smooth'
		});
		$("#quickmenu li:nth-child(3)").css({
			"background-color":"#fff",
			"border-bottom":"none",
			"color":"#741880"
		});
		$("#quickmenu li:not(:nth-child(3))").css({
			"background-color":"#fafafa",
			"border":"1px solid #eee",
			"color":"rgba(102,102,102)"
		});
	});

	$("#quickmenu li:nth-child(4)").click(function(){
		const divId =document.getElementById('topQna');
		const clientRect = divId.getBoundingClientRect();
		const relativeTop = clientRect.top;
			
		const scrolledTopLength =window.pageYOffset; 
		const absoluteTop = scrolledTopLength + relativeTop;
		//alert(absoluteTop);
		window.scrollTo({
			left: 0,
			top: absoluteTop-30,
			behavior: 'smooth'
		});
		$("#quickmenu li:nth-child(4)").css({
			"background-color":"#fff",
			"border-bottom":"none",
			"color":"#741880"
		});
		$("#quickmenu li:not(:nth-child(4))").css({
			"background-color":"#fafafa",
			"border":"1px solid #eee",
			"color":"rgba(102,102,102)"
		});
	});
	
	
	
	
		// 후기게시판 펼치기
	$("#review>tbody td").click(function(){
		if($(".hiddenRivew").css("display") == "none") {
			$(".hiddenRivew").show();
		} else {
			$(".hiddenRivew").hide();
		}
	});
	
	
	
		//후기게시판 CSS 적용
	$("#review tbody tr").mouseover(function(){
		$(this).css({
			"background-color":"#f7f7f7"
			});
	});
	$("#review tbody tr").mouseleave(function(){
		$(this).css({
			"background-color":"#fff"
			});
	});
		
		
	$("#reviewBtn").mouseover(function(){
		$(this).css({
			"color":"#5f0080",
			"background-color":"#fff"
			});
	});
	$("#reviewBtn").mouseleave(function(){
		$(this).css({
			"color":"#fff",
			"background-color":"#5f0080"
			});
	});	
		
		// QnA게시판 펼치기
	$("#qaTbl>tbody td").click(function(){
		if($(".hiddenRivew").css("display") == "none") {
			$(".hiddenRivew").show();
		} else {
			$(".hiddenRivew").hide();
		}
	});
	
		// 장바구니 버튼 기능 시작
		
	$("#basketBtn").click(function(){
		let uSession = $(this).next().val();
		//alert(uSession);
		let basketChk = $(this).next().next().val();
		//alert(basketChk);
		
		let chk = confirm("장바구니에 물건을 담으시겠습니까?");
		
		if (chk) {
			if(uSession == "null") {
			alert("로그인이 필요한 서비스입니다.");
			} else if(basketChk == "true") {
			$("#basketFrm").submit();
			} else {
			alert("이미 장바구니에담긴 상품입니다.");
			}			
		}

	});
	
	
		// 금액 기호 표시
	$(".price").each(function(i, v) { 
		let price = parseInt($(this).text());
		price = price.toLocaleString()+" 원";
		$(this).text(price);
	});
		
	
});
