var button= document.getElementById("counter");

button.onclick=function(){
    var sp=document.getElementById("count");
    counter=int(sp.innerHTML);
    counter=counter+1;
    sp.innerHTML=counter.toString();
    
};