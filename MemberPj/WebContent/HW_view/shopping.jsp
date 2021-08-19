<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src='js/jquery.js'></script>
<link rel='stylesheet' href='css/woocommerce-layout.css' type='text/css' media='all'/>
<link rel='stylesheet' href='css/woocommerce-smallscreen.css' type='text/css' media='only screen and (max-width: 768px)'/>
<link rel='stylesheet' href='css/woocommerce.css' type='text/css' media='all'/>
<link rel='stylesheet' href='css/font-awesome.min.css' type='text/css' media='all'/>
<link rel='stylesheet' href='style.css' type='text/css' media='all'/>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Oswald:400,500,700%7CRoboto:400,500,700%7CHerr+Von+Muellerhoff:400,500,700%7CQuattrocento+Sans:400,500,700' type='text/css' media='all'/>
<link rel='stylesheet' href='css/easy-responsive-shortcodes.css' type='text/css' media='all'/>
<script type="text/javascript">
jQuery(document).ready( function($) {
	$(window).resize(function(){
		change();
	});
	  function change(){
		  var windowWidth = $(window).width();
		  if(windowWidth < 980) {
			  $('#byun').hide();
			} else {
				$('#byun').show();
			}
	  }
} );
</script>
<style type="text/css">
.aa {
	font-size: x-large;
	padding: 40px;
}
</style>
</head>
<body class="archive post-type-archive post-type-archive-product woocommerce woocommerce-page">

<div class="container-fluid">
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
      </ul>
      <ul class="nav navbar-nav navbar-right">
      	<li><a href="#"></a></li>
        <li><a href="login_view.jsp" style="font-size: x-large;"><span class="glyphicon glyphicon-log-in" ></span> Login</a></li>
      </ul>
    </div>
  </div>

<div id="page">
	<div class="container">
		<header id="masthead" class="site-header">
		<div class="site-branding">
			<h1 class="site-title"><a href="index.html" rel="home"></a></h1>
			<h2 class="site-description"></h2>
		</div>
		<nav id="site-navigation" class="main-navigation">
		<button class="menu-toggle"><img alt="안나와.." src="IMG/logo.jpg"></button>
		<a class="skip-link screen-reader-text" href="#content">Skip to content</a>
		<div class="menu-menu-1-container" onchange="dis()">
			<ul id="menu-menu-1" class="menu">
				<li>
				<a href="index.html" class="aa">PT</a>
				<ul class="sub-menu">
					<li><a href="portfolio-item.html">BMI 계산기</a></li>
					<li><a href="blog-single.html">운동 게시판</a></li>
					<li><a href="shop-single.html">운동 동영상</a></li>
					<li><a href="portfolio-category.html">운동/식단</a></li>
				</ul>
				</li>
				<li>
				<a href="about.html" class="aa">쇼핑몰</a>
				<ul class="sub-menu">
					<li><a href="portfolio-item.html">운동 기구</a></li>
					<li><a href="blog-single.html">보조 식품</a></li>
					<li><a href="shop-single.html">배송 문의</a></li>
					<li><a href="portfolio-category.html">상품 문의</a></li>
				</ul>
				</li>
				<li id="byun"><a href="index.html"><img alt="안나와.." src="IMG/logo.jpg" width="150" height="150"></a></li>
				<li>
				<a href="blog.html" class="aa">게시판</a>
				<ul class="sub-menu">
					<li><a href="portfolio-item.html">공지 사항</a></li>
					<li><a href="blog-single.html">Q & A</a></li>
				</ul>
				</li>
				<li>
				<a href="#" class="aa">멤버쉽</a>
				<ul class="sub-menu">
					<li><a href="portfolio-item.html">멤버쉽 소개</a></li>
					<li><a href="blog-single.html">멤버쉽 결제</a></li>
				</ul>
				</li>
			</ul>
		</div>
		</nav>
		</header>
		<!-- #masthead -->
		<div id="content" class="site-content">
			<div id="primary" class="content-area column full">
				<main id="main" class="site-main" role="main">
				<form class="woocommerce-ordering" method="get">
					<select name="orderby" class="orderby">
						<option value="운동기구" selected="selected">운동기구</option>
						<option value="보조식품">보조식품</option>
						<option value="제로콜라맛없음">제로콜라맛없음</option>
						<option value="제로펩시맛있음">제로펩시맛있음</option>
						<option value="햄버거먹고싶음">햄버거먹고싶음</option>
					</select>
				</form>
				<div style="float: left; width: 280px;">
				<ul class="products">
				
					<li class="first product">
					<a href="shop-single.html">
					<h3>운동기구</h3>
					</a>
					</li>
					
					<li class="first product">
					<a href="shop-single.html">
					<h3>보조식품</h3>
					</a>
					</li>
					
					<li class="first product">
					<a href="shop-single.html">
					<h3>제로콜라맛없음</h3>
					</a>
					</li>
					
					<li class="first product">
					<a href="shop-single.html">
					<h3>제로펩시맛있음</h3>
					</a>
					</li>
					
					<li class="first product">
					<!-- <li class="first product"> -->
					<a href="shop-single.html">
					<h3>햄버거먹고싶음</h3>
					</a>
					</li>
				</ul>
				</div>
				<div style="float:left;" >
				<ul class="products">
					
					<li class="product">
					<a href="shop-single.html">
					<img alt="안나와.." src="IMG/logo.jpg">
					<h3>상품</h3>
					<span class="price"><span class="amount">5000원</span></span>
					</a>
					<a href="#" class="button">장바구니</a>
					<a href="#" class="button">찜</a>
					</li>
					
					<li class="product">
					<a href="shop-single.html">
					<h3>상품</h3>
					<span class="price"><span class="amount">5000원</span></span>
					</a>
					<a href="#" class="button">장바구니</a>
					<a href="#" class="button">찜</a>
					</li>
					
					<li class="product">
					<a href="shop-single.html">
					<h3>상품</h3>
					<span class="price"><span class="amount">5000원</span></span>
					</a>
					<a href="#" class="button">장바구니</a>
					<a href="#" class="button">찜</a>
					</li>
					
					<li class="product">
					<a href="shop-single.html">
					<h3>상품</h3>
					<span class="price"><span class="amount">5000원</span></span>
					</a>
					<a href="#" class="button">장바구니</a>
					<a href="#" class="button">찜</a>
					</li>
					
					<li class="product">
					<a href="shop-single.html">
					<h3>상품</h3>
					<span class="price"><span class="amount">5000원</span></span>
					</a>
					<a href="#" class="button">장바구니</a>
					<a href="#" class="button">찜</a>
					</li>
					
					<li class="product">
					<a href="shop-single.html">
					<h3>상품</h3>
					<span class="price"><span class="amount">5000원</span></span>
					</a>
					<a href="#" class="button">장바구니</a>
					<a href="#" class="button">찜</a>
					</li>
				
				</ul>
				</div>
				
				<div style="clear: both;">
			 	<nav class="woocommerce-pagination">
				<ul class="page-numbers">
					<li><span class="page-numbers current">1</span></li>
					<li><a class="page-numbers" href="#">2</a></li>
					<li><a class="next page-numbers" href="#">→</a></li>
				</ul>
				</nav>
				</div> 
				</main>
				<!-- #main -->
			</div>
			<!-- #primary -->
		</div>
		<!-- #content -->
	</div>
	<!-- .container -->
	<footer id="colophon" class="site-footer">
	<div class="container">
		<div class="site-info">
			<h1 style="font-family: 'Herr Von Muellerhoff';color: #ccc;font-weight:300;text-align: center;margin-bottom:0;margin-top:0;line-height:1.4;font-size: 46px;">밑에</h1>
			밑에<i class="fa fa-love"></i>
		</div>
	</div>	
	</footer>
	<a href="#top" class="smoothup" title="Back to top"><span class="genericon genericon-collapse"></span></a>
</div>

</body>
<!-- #page -->
<script src='js/plugins.js'></script>
<script src='js/scripts.js'></script>
<script src='js/masonry.pkgd.min.js'></script>

 <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</html>