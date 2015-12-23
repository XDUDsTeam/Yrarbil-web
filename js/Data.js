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
        if(logindata_obj.status=="failed")
        {
            alert("错误"+logindata_obj.reason);
            pwd.value="";
        }
        else
        {
            sessionStorage.readername=name;
            sessionStorage.tidk=logindata_obj.tidk;
            sessionStorage.time=logindata_obj.time;
            //sessionStorage.page=1;
            document.location="page.html";
        }
    }
    else
    {
        alert("服务器出错，请重试！");
        pwd.value="";
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
        if(logoutdata_obj.status=="failed")
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
        alert("服务器出错，请重试！");
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
        alert("服务器出错，请重试！");
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
        if(bookorderoffdata_obj.status=="failed")
        {
            alert("取消预约失败"+bookorderoffdata_obj.reason);
            //
        }
        else
        {
            alert("取消预约成功");
        }
    }
    else
    {
        alert("服务器出错，请重试！");
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
        else if(BookStatus_obj.status=="off")
        {
            alert("图书不在架");
        }
        else
        {
            //
        }
    }
    else
    {
        alert("服务器出错，请重试！");
    }
}

function BookStatusSearchISBN(isbn)
{
    var url="http://qinka-yrarbilbackend.daoapp.io:80/423472651c/ons"+"?isbn="+isbn+"&p="+Math.random();
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
            return 1;
        }
        else if(BookStatus_obj.status=="off")
        {
            return 0;
        }
        else
        {
            //
        }
    }
    else
    {
        return -1;
    }
}

function BookInfoSearch()
{
    var bssi=document.getElementById("BookInfoSearch");
    var bookinfo=document.getElementById("BookInfo");
    if(bssi.value=="")
    {
        alert("请输入图书ISBN码！");
    }
    else
    {
        var url="http://qinka-yrarbilbackend.daoapp.io:80/423472651c/ons"+"?isbn="+bssi.value+"&type=json"+"&p="+Math.random();
        bookinfo.innerHTML=""
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
        var bookinfosearchdata=xhr.responseText;
        var bookinfosearchdata_obj=eval("("+bookinfosearchdata+")");
        if(bookinfosearchdata_obj.status="failed")
        {
            alert("查询失败");
        }
        else
        {
            bookinfo.innerHTML="<table border=\"1\">";
            
            bookinfo.innerHTML+="<tr><th>name</th><th>";
            bookinfo.innerHTML+=bookinfosearchdata_obj.name;
            bookinfo.innerHTML+="</th></tr>";
            
            bookinfo.innerHTML+="<tr><th>author</th><th>";
            bookinfo.innerHTML+=bookinfosearchdata_obj.author;
            bookinfo.innerHTML+="</th></tr>";
            
            bookinfo.innerHTML+="<tr><th>publishLocation</th><th>";
            bookinfo.innerHTML+=bookinfosearchdata_obj.publishLocation;
            bookinfo.innerHTML+="</th></tr>";
            
            bookinfo.innerHTML+="<tr><th>pressHouse</th><th>";
            bookinfo.innerHTML+=bookinfosearchdata_obj.pressHouse;
            bookinfo.innerHTML+="</th></tr>";
            
            bookinfo.innerHTML+="<tr><th>publishDate</th><th>";
            bookinfo.innerHTML+=bookinfosearchdata_obj.publishDate;
            bookinfo.innerHTML+="</th></tr>";
            
            bookinfo.innerHTML+="<tr><th>ISBN</th><th>";
            bookinfo.innerHTML+=bookinfosearchdata_obj.ISBN;
            bookinfo.innerHTML+="</th></tr>";
        
            bookinfo.innerHTML+="<tr><th>location</th><th>";
            bookinfo.innerHTML+=bookinfosearchdata_obj.location;
            bookinfo.innerHTML+="</th></tr>";
            
            bookinfo.innerHTML+="</table>";
            if(BookStatusSearchISBN(bookinfosearchdata_obj.ISBN)==1)
            {
                bookinfo.innerHTML+="<tr><th>status</th><th>";
                bookinfo.innerHTML+="在架";
                bookinfo.innerHTML+="</th></tr>";
            }
            else if(BookStatusSearchISBN(bookinfosearchdata_obj.ISBN)==0)
            {
                bookinfo.innerHTML+="<tr><th>status</th><th>";
                bookinfo.innerHTML+="不在架";
                bookinfo.innerHTML+="</th></tr>";
            }
            else
            {
                alert("error");
            }
            bookinfo.innerHTML+="</table>";
        }
    }
    else
    {
        alert("服务器出错，请重试！");
    }
}

