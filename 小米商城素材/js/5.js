var dh1 = document.getElementById("dh1").getElementsByTagName("li");
console.log("dh1");  //获取dh1里面的数组
var list = document.getElementById("active").getElementsByTagName("ul");
console.log("active");

    for(var i = 0;i<dh1.length;i++){   //利用遍历获取数组上的每一项
        dh1[i].onclick = showlist;    //为每一项绑定点击事件
        list[i].onclick = showlist;
    }
    function showlist(){    //点击事件后触发一个showlist方法
        for(var i=0;i<dh1.length;i++){  //在每一个事件上做移动,即想指定的那个li，把那个事件赋值上去
            if(dh1[i]===this){   //做判断看看是否为当前指定的那个li
                dh1[i].className = "dhz"//就触发那个showlist方法成为激活状态
                list[i].className = "active";
            }else
            {
                dh1[i].className = "";//否则为空，不激活
                list[i].className = "";

            }
        }
    }
   var scrollTop = document.documentElement.scrollTop;//获取滚动条高度的接口
  
    var daohang = document.getElementById("daohang")
    console.log(daohang);
   window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    if( scrollTop >= 300 ){ //判断滚动条达到某个高度时开始固定还是跟着滚动条一起滚动
        daohang.className= "daohan seckill-daohanfixed";//大于300时跟着滚动条一起滚动
    }else{
        daohang.className= "daohan";//小于300时固定原来的位置
    }
    console.log(scrollTop); //获取滚动条高度的接口
   }