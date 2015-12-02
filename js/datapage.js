function readerLogIn(userkind)
{
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
        var url="http://hostname:port/1daa54e7c5a9caaa0c5043eadea9d824/"+hex_md5(name.value)+pwd.value;
    }
    else//游客登陆
    {
        var url="http://hostname:port/1daa54e7c5a9caaa0c5043eadea9d824/"+hex_md5(name.value)+pwd.value;
    }
    var xhr;
    if(window.XMLHttpRequest)
        xhr=new XMLHttpRequest();
    else
        xhr=new ActiveXObject("Microsoft.XMLHTTP");//兼容ie7以下
    xhr.onreadystatechange=function()//设置监听
    {
        if(xhr.readyState==4&&xhr.status==200)
        {
            var lidata=xhr.responseText;
            var lidata_obj=eval("("+logindata+")");
            sessionStorage.userkind="reader";
            sessionStorage.tidk=lidata_obj.tidk;
            sessionStorage.time=lidata_obj.time;
            sessionStorage.page=1;
            document.location="page.html";
        }
    }
    xhr.open('POST',url,false);
    xhr.send();
}


