var myBoolValue;
function setAM(boolproj){
	myBoolValue = boolproj;
}

function showLocale(objD)  
{  
	
	var useAm;
	if(myBoolValue){
		useAm = 0;
	} else {
		useAm = 1;
	}
	
    var str,colorhead,colorfoot;  
    var hh = objD.getHours();  
    if(hh<10) hh = '0' + hh;  
    var mm = objD.getMinutes();  
    if(mm<10) mm = '0' + mm;  
    var ss = objD.getSeconds();  
    if(ss<10) ss = '0' + ss;  
    var ww = objD.getDay();  
    if  ( ww==0 )  colorhead="<font color=\"white\">";  
    if  ( ww > 0 && ww < 7 )  colorhead="<font color=\"white\">";  
    if  (ww==0)  ww="SUNDAY";  
    if  (ww==1)  ww="MONDAY";  
    if  (ww==2)  ww="TUESDAY";  
    if  (ww==3)  ww="WEDNESDAY";  
    if  (ww==4)  ww="THURSDAY";  
    if  (ww==5)  ww="FRIDAY";  
    if  (ww==6)  ww="SATURDAY";  
    colorfoot="</font>"  
    if (useAm == 0) {
    	str = colorhead + "<span class=\"thin\">" + hh + ":"  + mm + ":" + ss + "</span>"+ "<br>" + ww  + "  " + colorfoot;
	}else {
		if (hh > 12) {
			hh = hh - 12;
			str = colorhead + "<span class=\"thin\">" + hh + ":"  + mm + ":" + ss + "<span class=\"smaller\">" + "PM" + "</span>"+ "</span>"+ "<br>" + ww  + "  " + colorfoot;
		}else{
			str = colorhead + "<span class=\"thin\">" + hh + ":"  + mm + ":" + ss + "<span class=\"smaller\">" + "AM" + "</span>"+ "</span>"+ "<br>" + ww  + "  " + colorfoot;
		}
	}
    return(str);  
};  
function tick()  
{  
    var today;  
    today = new Date();  
    document.getElementById("localtime").innerHTML = showLocale(today);  
    window.setTimeout("tick()", 1000);  
};  
tick();  