# xiaomi
prictice  of xiaonmi program
/*html 部分代码*/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>小米商城</title>
    <link rel="stylesheet" href="css/3.css">
    <link rel="stylesheet" href="./小米商城素材/img/seckill-head.jpg"/>
    <link rel="stylesheet" href="../个人项目/小米商城素材/css/iconfont.css"/>
   <link rel="shortcut icon" href="G:\个人项目\小米商城素材\favicon.ico" type="image/x-icon"/>
</head>
<body>
    <div class="topbar">
        <div class="toprig">
            <div class="nav">
         <a href="">小米商城</a><span>|</span>
         <a href="">MIUI</a><span>|</span>
         <a href="">IoT</a><span>|</span>
         <a href="">云服务</a><span>|</span>
         <a href="">金融</a><span>|</span>
         <a href="">有品</a><span>|</span>
         <a href="">小爱开放平台</a><span>|</span>
         <a href="">政企服务</a><span>|</span>
         <a href="">资质证照</a><span>|</span>
         <a href="">协议规则</a><span>|</span>
         <a href="">下载app</a><span>|</span>
         <a href="">Select Region</a></div>
         <div class="top-car"> <a href="">  <i class="iconfont">&#xe60c;</i> 购物车 <span>（0）</span></a></div>
         <div class="topico clearfix">
         <a href="">登录</a><span>|</span>
         <a href="">注册</a><span>|</span>
         <a href="one">消息通知</a></div>
        </div>
    </div>
    <div class="header">
        <div class="toprig">
            <div class="header-logo"><a href="#" class="he">小米商城</a>
            </div>
            <div class="header-nav">
                    <ul class="nav-list clearfix">
                         <li class="sx-l">
                            <a href="">全部商品</a>
                        </li>
                        <li class="sx">
                            <a href="">小米手机</a>
                        </li>
                        <li class="sx">
                            <a href="">红米</a>
                        </li>
                        <li class="sx">
                            <a href="">电视</a>
                        </li>
                        <li class="sx">
                            <a href="">笔记本</a>
                        </li>
                        <li class="sx">
                            <a href="">家电</a>
                        </li>
                        <li class="sx">
                            <a href="">新品</a>
                        </li>
                        <li class="sx">
                            <a href="">路由器</a>
                        </li>
                        <li class="sx">
                            <a href="">智能硬件</a>
                        </li>
                        <li class="sx">
                            <a href="">服务</a>
                        </li>
                        <li class="sx">
                            <a href="">社区</a>
                        </li>
                    </ul>
            </div>
            <div class="header-search">
                <form action="" class="searchf">
                    <input type="search" name="keyword" class="searcht">
                    <input type="submit" value="&#xe616;" class="searchbtn iconfont" >
                </form>
            </div>
        </div>
    </div>
    <div class="seckill">
            <div class="seckill-head"></div>
    </div>
    <div></div>
    <div></div>
    <div></div>
</body>
</html>

/*css部分代码*/    

body {
    margin: 0px;
    padding: 0px;
    height: 2500px;
}
.topbar  {
    height: 40px;
    background-color: rgb(31, 24, 24);
    /* border: 1px solid black; */

}
.toprig{
    height: 100px;
    margin: 0 auto;
    width: 1220px;
    /* border: 1px solid black; */
    
}
.toprig a:hover {
    color: rgb(255, 255, 255);
}
.toprig::before ,.toprig::after,.clearfix::before,.clearfix::after
{
    content: "";
    display:table;
}
.toprig::after ,.clearfix::after{
    clear: both;
}
.nav {
    float: left;
    font-size: 0px;
    line-height: 40px;
    height: 40px;;
}


.topico {
    margin-right: 15px;
    float: right;
}
.topico a {
    float: left;
    height: 40px;
    line-height: 40px;
    padding: 0 5px;
}
.topico span {
    float: left;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    font-family: sans-serif;
}
a {
    font-size: 12px;
    font-family: sans-serif;
    color: rgb(93, 98, 102);
    text-decoration: none;
}
.nav span {
    color: black;
    font-size: 12px;
    margin: 0.5em;
}
.top-car {
    float: right;
}
.top-car a {
height: 40px;
line-height: 40px;
display: block;
text-align: center;
width: 120px;
}
.top-car i {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    margin-right: 3px;

}
.top-car a:hover{
  background-color: aliceblue;
  color: rgb(236, 89, 4);
}
.top-car span {
    color: rgb(93, 98, 102);
    margin-left: -4px;
    font-size: 12px;
}
.header {
    height: 100px;
}

.header-logo {
    float: left;    
    height: 55px;
    width: 62px;
    margin-top: 22px;
    /* border: 1px solid black; */
}
.header-logo a {
    display: block;
    height: 55px;
    background: #ff6700 url(../小米商城素材/img/mi-logo.png) no-repeat 50% 50%;
    
}
.header-logo a.he{
    text-indent: -9922em;
}
.header-nav {
    float: left;
    height: 100px;
    width: 820px;
    /* border: 1px solid black; */
}
.header-nav .nav-list {
    width: 820px;
    height: 100px;
    font-size: 40px;
}
.header-nav .nav-list .sx {
    float: left;
}
.header-nav .nav-list .sx-l {
    float: left;
    visibility: hidden;
    text-align: right;
    padding: 26px 0 35px;
    color: #333;
}
 .header-nav .nav-list .sx a{
    display: block;
    padding: 0 10px;
    color: black;
    line-height: 100px;
    height: 100px;
} 
.header-nav .nav-list .sx a:hover{
    color: #ff6700;
}
.header-search {
    float: right;
    height: 50px;
    width: 296px;
    margin-top: 22px;  
    /* border: 1px solid black; */
}
ul,li {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
}

.header-search .searchf {
    position: relative;
    width: 296px;
    height: 50px;
    display: block;
}
.header-search .searchf .searcht {
    position: absolute;
    top: 0px;
    right: 49px;
    outline: 0;
    width: 246px;
    height: 50px;
}
.header-search .searchf .searchbtn {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 50px;
    background-color: rgb(255, 255, 255);
    height: 50px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.header-search .searchf .searchbtn:hover{
    color:black;
    font-size: 20;
    background-color: #ff6700
}

.seckill {
   
    background: #f5f5f5;
}
.seckill .seckill-head {
    margin-top: 19px;
    height: 170px;
    background: url(../小米商城素材/img/seckill-head.jpg) no-repeat 50% 0;
}


