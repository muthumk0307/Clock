function clock(){
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today=new Date();
document.getElementById('Date').innerHTML=(days[today.getDay()]+' '+today.getDate()+ " "+months[today.getMonth()]+" "+today.getFullYear());
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
var day=h<11?' AM':' PM';

if(h<10){
    h='0'+h;
}
else if(h>12)
    {
        h='0'+(h-12);
    }
    else{
        h=h;
    }
m=m<10?'0'+m:m;
s=s<10?'0'+s+day:s+day;
document.getElementById('h').innerHTML=h;
document.getElementById('min').innerHTML=m;
document.getElementById('sec').innerHTML=s;
}var inter=setInterval(clock,400);