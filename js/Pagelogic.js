function init()
{
    var userkind=sessionStorage.userkind;
    if(userkind=="reader")
    {
        document.getElementById("login").innerHTML="<span>"+sessionStorage.readername+"</span>";
        document.getElementById("logout").style.display="block";
    }
    else
    {
        document.getElementById("logout").style.display="none";
    }
    document.getElementById("main").style.backgroundColor="rgba(255,255,255,1)";
    document.getElementById("main").style.color="black";
}

function onmouseoverbtn(id)
{
    var name =[];
    switch(id)
    {
        case 1:
        {
            name[0]=document.getElementById("main");
            name[1]=document.getElementById("mainpage");
        }
            break;
        case 2:
        {
            name[0]=document.getElementById("booksearch");
            name[1]=document.getElementById("booksearchpage");
        }
            break;
        case 3:
        {
            name[0]=document.getElementById("readersearch");
            name[1]=document.getElementById("readersearchpage");
        }
            break;
        case 4:
        {
            if(sessionStorage.userkind=="reader")
                return;
            else
            {
                document.getElementById("login").style.backgroundColor="rgba(255,255,255,0.6)";
                return;
            }
        }
            break;
        case 5:
        {
            document.getElementById("logout").style.backgroundColor="rgba(255,255,255,0.6)";
            return;
        }
            break;
        default:
            break;
    }
    if(name[1].style.display=="block")
        return;
    name[0].style.backgroundColor="rgba(255,255,255,0.6)";
}

function onmouseoutbtn(id)
{
    var name =[];
    switch(id)
    {
        case 1:
        {
            name[0]=document.getElementById("main");
            name[1]=document.getElementById("mainpage");
        }
            break;
        case 2:
        {
            name[0]=document.getElementById("booksearch");
            name[1]=document.getElementById("booksearchpage");
        }
            break;
        case 3:
        {
            name[0]=document.getElementById("readersearch");
            name[1]=document.getElementById("readersearchpage");
        }
            break;
        case 4:
        {
            if(sessionStorage.userkind=="reader")
                return;
            else
            {
                document.getElementById("login").style.backgroundColor="rgba(255,255,255,0)";
                return;
            }
        }
            break;
        case 5:
        {
            document.getElementById("logout").style.backgroundColor="rgba(255,255,255,0)";
            return;
        }
            break;
        default:
            break;
    }
    if(name[1].style.display=="block")
        return;
    name[0].style.backgroundColor="rgba(255,255,255,0)";
}

function clickbtn(id)
{
    var name =[];
    name[0]=document.getElementById("main");
    name[1]=document.getElementById("mainpage");
    
    name[2]=document.getElementById("booksearch");
    name[3]=document.getElementById("booksearchpage");
    
    name[4]=document.getElementById("readersearch");
    name[5]=document.getElementById("readersearchpage");
    switch(id)
    {
        case 1:
        {
            if(name[1].style.display=="block")
                return;
            else
            {
                name[0].style.backgroundColor="rgba(255,255,255,1)";
                name[0].style.color="black";
                name[2].style.backgroundColor="rgba(255,255,255,0)";
                name[2].style.color="white";
                name[4].style.backgroundColor="rgba(255,255,255,0)";
                name[4].style.color="white";
                name[1].style.display="block";
                name[3].style.display="none";
                name[5].style.display="none";
            }
        }
            break;
        case 2:
        {
            if(name[3].style.display=="block")
                return;
            else
            {
                name[2].style.backgroundColor="rgba(255,255,255,1)";
                name[2].style.color="black";
                name[0].style.backgroundColor="rgba(255,255,255,0)";
                name[0].style.color="white";
                name[4].style.backgroundColor="rgba(255,255,255,0)";
                name[4].style.color="white";
                name[3].style.display="block";
                name[1].style.display="none";
                name[5].style.display="none";
            }
        }
            break;
        case 3:
        {
            if(sessionStorage.userkind=="visiter")
            {
                alert("游客不可用，请先登录！");
                return;
            }
            if(name[5].style.display=="block")
                return;
            else
            {
                name[4].style.backgroundColor="rgba(255,255,255,1)";
                name[4].style.color="black";
                name[0].style.backgroundColor="rgba(255,255,255,0)";
                name[0].style.color="white";
                name[2].style.backgroundColor="rgba(255,255,255,0)";
                name[2].style.color="white";
                name[5].style.display="block";
                name[1].style.display="none";
                name[3].style.display="none";
            }
        }
            break;
        case 4:
        {
            if(sessionStorage.userkind=="reader")
                return;
            else
            {
                document.location="login.html";
                return;
            }
        }
            break;
        case 5:
        {
            LogOut();
            return;
        }
            break;
        default:
            break;
    }
}

