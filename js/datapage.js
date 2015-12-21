function LogIn(userkind)
{
    sessionStorage.userkind=userkind;
    if(userkind=="reader")//用户登录
    {
        var name=document.getElementById("username");
        var pwd=document.getElementById("password");
        if(name.value==""||pwd.value=="")
        {
            alert("用户名或密码不能为空");
            return;
        }
        pwd.value=hex_md5(pwd.value);
        var readerloginstr="uid="+name.value+"&key="+pwd.value;
        var url="http://qinka-yrarbilbackend.daoapp.io:80/1daa62b/authentication/b8ab91a6/login/5ece85ba/reader";
    }
    else//游客登陆
    {
        document.location="page.html";
        return;
    }
    var xhr;
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");//兼容ie7以下
    xhr.open("POST",url,false);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(readerloginstr);
    if(xhr.readyState==4&&xhr.status==200)
    {
        var logindata=xhr.responseText;
        var logindata_obj=eval("("+logindata+")");
        sessionStorage.readername=name;
        sessionStorage.tidk=logindata_obj.tidk;
        sessionStorage.time=logindata_obj.time;
        //sessionStorage.page=1;
        document.location="page.html";
    }
    else
    {
        //异常处理
    }
}

function LogOut()
{
    var readerlogoutstr="uid="+sessionStorage.readername+"&tidk="+sessionStorage.tidk;
    var url="http://qinka-yrarbilbackend.daoapp.io:80/1daa62b/authentication/5ece85ba/logout/fc8252b7/reader";
    var xhr;
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");//兼容ie7以下
    xhr.open("POST",url,false);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(readerlogoutstr);
    if(xhr.readyState==4&&xhr.status==200)
    {
        
        var logoutdata=xhr.responseText;
        var logoutdata=eval("("+logoutdata+")");
        if(logoutdata_obj.status=="failure")
        {
            alert("登出失败");
            return;
        }
        else
        {
            sessionStorage.userkind="visiter";
            sessionStorage.readername="";
           //sessionStorage.page=1;
            document.location="page.html";
        }
    }
    else
    {
        //异常处理
    }
}

function BookOrder(barcode)
{
    var bookorderstr="tidk="+sessionStorage.tidk+"&barcode="+barcode;
    var url="http://qinka-yrarbilbackend.daoapp.io:80/1d224726/appointment/on";
    var xhr;
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");//兼容ie7以下
    xhr.open("POST",url,false);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(bookorderstr);
    if(xhr.readyState==4&&xhr.status==200)
    {
        var bookorderdata=xhr.responseText;
        var bookorderdata_obj=eval("("+bookorderdata+")");
        if(bookorderdata_obj.status=="failed")
        {
            alert("预约失败"+bookorderdata_obj.reason);
        }
        else
        {
            //修改图书预约状态
        }
    }
    else
    {
        //异常处理
    }
}

function BookOrderOff(barcode)
{
    var bookorderoffstr="tidk="+sessionStorage.tidk+"&barcode="+barcode;
    var url="http://qinka-yrarbilbackend.daoapp.io:80/1d224726/appointment/off";
    var xhr;
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");//兼容ie7以下
    xhr.open("POST",url,false);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(bookorderoffstr);
    if(xhr.readyState==4&&xhr.status==200)
    {
        var bookorderoffdata=xhr.responseText;
        var bookorderoffdata_obj=eval("("+bookorderdata+")");
        if(bookorderoffdata_obj.status=="success")
        {
            alert("预约成功");
        }
        else
        {
            alert("预约失败"+bookorderoffdata_obj.reason);
        }
    }
    else
    {
        //异常处理
    }
}

function BookStatusSearchBid()
{
    var bssb=document.getElementById("BookStatusSearchBid");
    if(bssb.value!="")
    {
        alert("请输入图书条码！");
    }
    else
    {
        var url="http://qinka-yrarbilbackend.daoapp.io:80/423472651c/ons"+"?bid="+bssb.value+"&p="+Math.random();
    }
    var xhr;
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");//兼容ie7以下
    xhr.open("GET",url,false);
    xhr.send();
    if(xhr.readyState==4&&xhr.status==200)
    {
        var BookStatus=xhr.responseText;
        var BookStatus_obj=eval("("+BookStatus+")");
        if(BookStatus_obj.status=="on")
        {
            alert("图书在架");
        }
        else
        {
            alert("图书不在架");
        }
    }
    else
    {
        //异常处理
    }
}

function BookStatusSearchISBN()
{
    var bssi=document.getElementById("BookStatusSearchISBN");
    if(bssi.value!="")
    {
        alert("请输入图书ISBN码！");
    }
    else
    {
        var url="http://qinka-yrarbilbackend.daoapp.io:80/423472651c/ons"+"?isbn="+bssi.value+"&p="+Math.random();
    }
    var xhr;
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");//兼容ie7以下
    xhr.open("GET",url,false);
    xhr.send();
    if(xhr.readyState==4&&xhr.status==200)
    {
        var BookStatus=xhr.responseText;
        var BookStatus_obj=eval("("+BookStatus+")");
        if(BookStatus_obj.status=="on")
        {
            alert("图书在架");
        }
        else
        {
            alert("图书不在架");
        }
    }
    else
    {
        //异常处理
    }
}

function BookInfoSearch(isbn)
{
    var url="http://qinka-yrarbilbackend.daoapp.io:80/423472651c/9c4f7bfef"+"?isbn="+isbn+"&type=json"+"&p="+Math.random();
    var xhr;
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");//兼容ie7以下
    xhr.open("GET",url,false);
    xhr.send();
    if(xhr.readyState==4&&xhr.status==200)
    {
        var bookinfosearchdata=xhr.responseText;
        var bookinfosearchdata_obj=eval("("+bookinfosearchdata+")");
        //表单处理
            
    }
    else
    {
        
    }
}