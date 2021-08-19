<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>중급 프로젝트 과제</title>
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
<body class="home page page-template page-template-template-portfolio page-template-template-portfolio-php">
  
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
				<main id="main" class="site-main">
				<div class="grid portfoliogrid">
				
					<!-- <article class="hentry">
					<header class="entry-header">
					<div class="entry-thumbnail">
						<a href="portfolio-item.html"><img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2015/09/30162427/p1.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1"/></a>
					</div>
					<h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">Sunset Beach</a></h2>
					<a class='portfoliotype' href='portfolio-category.html'>summer</a>
					<a class='portfoliotype' href='portfolio-category.html'>woman</a>
					<a class='portfoliotype' href='portfolio-category.html'>yellow</a>
					</header>
					</article> -->
					
				
				<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/1.jpg">
					</article>

					<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/2.JPG">
					</article>
					
					<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/3.JPG">
					</article>

					<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/4.JPG">
					</article>

					<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/5.JPG">
					</article>
					
					<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/6.JPG">
					</article>
					
					<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/7.JPG">
					</article>
					
					<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/8.JPG">
					</article>
					
					<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/9.JPG">
					</article>
					
					<article class="hentry">
					<header class="entry-header">
					<img alt="" src="IMG/10.JPG">
					</article>
					
				</div>
				<!-- .grid -->
				<!-- <nav class="pagination">
				<span class="page-numbers current">1</span>
				<a class="page-numbers" href="#">2</a>
				<a class="next page-numbers" href="#">Next »</a>
				</nav> -->
				<br/>
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