var button= document.getElementById("bt1");
var counter=0;
button.onclick=function(){
    counter=counter+1;
    var sp=document.getElementById("counter");
    sp.innerHTML=counter.toString();
}