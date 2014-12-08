<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="generator"
    content="HTML Tidy for HTML5 (experimental) for Windows https://github.com/w3c/tidy-html5/tree/c63cc39" />
    <meta charset="GB2312" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <link rel="icon" href="static/img/favicon.ico" />
    <title>EasyLink-外链专家</title>
    <!-- Bootstrap core CSS -->
    <link href="static/css/bootstrap.min.css" rel="stylesheet" />
    <!-- Custom styles for this template -->
    <link href="static/css/jumbotron.css" rel="stylesheet" />
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="static/js/ie-emulation-modes-warning.js"></script>
	<script src="static/js/holder.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
      aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
      </button> 
      <a class="navbar-brand" href="/">EasyLink</a></div>
      <!--/.navbar-collapse -->
    </div>
  </nav>
  <!-- Main jumbotron for a primary marketing message or call to action -->
  <div class="jumbotron">
    <div class="container">
      <div class="col-md-8 col-md-offset-3">
        <h1>EasyLink<small></small></h1>
        <br />
        <p>点击选择文件按钮，选择本地图片即可生成图片外链</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
	
		<div class="col-md-4 col-md-offset-4">
			<img id="thumbnail" src="holder.js/160x160" alt="..." style="width: 160px; height: 160px; clear: both; display: block; margin:auto;" class="img-thumbnail" >
		</div>
		
	</div>
	
		<br />
		
    <div class="row">
	
        <div class="col-md-5 col-md-offset-3">
          <div id="input-progress" class="progress">
            <div id="input-progress-bar" class="progress-bar progress-bar-black" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">0%
			</div>
          </div>
		</div>
		
		<div class="col-md-3" >
			<input id="input" multiple="multiple" type="file" accept="image/*" class="filestyle" data-input="false" data-badge="false" data-buttonText="选择文件" > 
		</div>		     
		
    </div>	
	
		  
	<br />
	
	<div class="row">	
        <div class="col-md-6 col-md-offset-3">
		  <div class="col-md-3" style="text-align:center;">
			  <h4 id="progresstext">外链地址</h4>  
		  </div>
          <div class="col-md-9">
            <input type="text" class="form-control" id="linkaddress" placeholder="" />
          </div>
		</div>
    </div>
    <hr />
    <footer>
      <p></p>
    </footer>
  </div>
  <!-- /container -->
  <!-- Bootstrap core JavaScript
    ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
  <script src="static/js/bootstrap.min.js"></script> 
  <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
   
  <script src="static/js/ie10-viewport-bug-workaround.js"></script> 
  <script type="text/javascript" src="static/js/jquery.js"></script> 
  <script type="text/javascript" src="static/js/main.js"></script> 
  <script type="text/javascript" src="static/js/bootstrap-filestyle.min.js"></script></body>
</html>
