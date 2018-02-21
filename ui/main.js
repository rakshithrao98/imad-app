var button= document.getElementById("counter");
var counter=0;
button.onclick=function(){
    var sp=document.getElementById("count");
    counter=counter+1;
    sp.innerHTML=counter.toString();
};