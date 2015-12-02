function init()
{
    return;
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
            name[0]=document.getElementById("login");
            break;
        case 5:
            name[0]=document.getElementById("logout");
            break;
        default:
            break;
    }
    if(name[1].style.display=="block")
        return;
    name[0].style.backgroundColor="rgba(100,100,255,0.8)";
    console.log(id);
}
function onmouseoutbtn(id)
{
    var name =[];
    switch(id)
    {
        case 1:
            name=document.getElementById("main");
            break;
        case 2:
            name=document.getElementById("booksearch");
            break;
        case 3:
            name=document.getElementById("readersearch");
            break;
        case 4:
            name=document.getElementById("login");
            break;
        case 5:
            name=document.getElementById("logout");
            break;
        default:
            break;
    }
    if(name.style.display=="block")
        return;
    name.style.backgroundColor="rgba(0,0,0,0)";
    console.log(id);
}