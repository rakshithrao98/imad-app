var button= document.getElementById("counter");
counter=0;
button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById("counter");
    span.innerHTML=counter.toStinng();
}