///////chapter 31 to 34 //////////////
document.write("<h1>Chapter no. 31 to 34 <br> DATE METHODS </h1><br>")
/////////question 1 ///////////////

var now = new Date();
document.write(now + "<br><br> <hr>")

// ///////////question 2 
// var currentMonth = new Date();
// var b = currentMonth.toString();
// var c = b.slice(4,7);
// if(c === ""){
//     document.write("<br> Current month: November <br> <br> <hr>")
// }

var monNames = ["January","February","March","April","May","June","July","August","September","October","November","december"];
var now = new Date();
var theMon = now.getMonth();
var todayMon = monNames[theMon];
document.write("Current month: ",todayMon)

document.write("<br>")
document.write("<br>")
document.write("<hr>")

///////////////question 3////////////
var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var now =new Date();
var theDay = now.getDay();
var todayDay = dayNames[theDay]
document.write("Today is ",todayDay)

///////////////////question 4///////////////////
var curDay = new Date();
var nowDay = curDay.toString()
var today = nowDay.slice(0,3)
if (today === "Sun"){
    document.write(" "+"It's Fun day")
}
else if (today === "Sat"){
    document.write(" "+"It's Fun day")
}
else if (today === "Mon"){
}
else if (today === "Tue"){
}
else if (today === "Wed"){
}
else if (today === "Thu"){
}
else if (today === "Fri"){
}

document.write("<br>")
document.write("<br>")
document.write("<hr>")

////////////////question 5///////////////
var dt = new Date()
b = dt.toString()
c = b.slice(8,10)
if (c < 15){
    document.write("First fifteen days of the month")
}
else if(c > 15){
    document.write("Last days of the month")
}


document.write("<br>")
document.write("<br>")
document.write("<hr>")

///////////question 6 //////////
var curDat = new Date();
document.write("Current Date: ",curDat,"<br>")
var preMili = new Date("January 01 , 1970")
var abc = preMili.getTime();
document.write("Elapsed milliseconds since January 1, 1970: "+ abc +"<br>")
var jan1min = new Date("Jan 01 , 1970")
var janMin = jan1min.getSeconds()
document.write(janMin)
document.write("<br>")
document.write("<br>")
document.write("<hr>")

/////////////question 7///////////
var now = new Date().getHours();
if (now >= 0 && now < 12){
    document.write("It's AM")
}else(
    document.write("it's PM")
)

document.write("<br>")
document.write("<br>")
document.write("<hr>")
//////////////question 8//////////
var laterDate = new Date("December 31, 2020");
document.write("Later date: " + laterDate);

document.write("<br>")
document.write("<br>")
document.write("<hr>")

////////////question 9//////////
var ramdanDate = new Date("June , 18 2015")
var daysPass = Math.floor(ramdanDate.getTime()/(1000*60*24*365));
document.write(daysPass+" days have passed since 1st Ramdan, 2015 <br>")

document.write("<br>")
document.write("<br>")
document.write("<hr>")

///////////////question 10////////
var dec1 = new Date("Dec , 01 2015");
var dec1Sec = dec1.getTime()
var dec5 = new Date("Dec , 05 2015");
var dec5Sec = dec5.getTime()

var diff = dec5Sec - dec1Sec
var totalSec = diff/(1000)
totalSec = Math.floor(totalSec)

document.write(dec5+", <br>"+totalSec+" seconds had passed since beginning of 2015")

document.write("<br>")
document.write("<br>")
document.write("<hr>")

/////////question 11//////////
var decHour = new Date("Dec , 05 2015");
document.write("current date: "+decHour)
decHour.setHours(2);
document.write("<br> 1 hour ago, it was "+decHour);

document.write("<br>")
document.write("<br>")
document.write("<hr>")

/////////////question 12/////////////
var date = new Date();
var year = new Date();
year.setFullYear("1921")
alert("current date: "+date +" 100 years back "+year)

// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")

//////////////question 13/////////////
var age = +prompt("Enter your age");
var thereAge = new Date().getFullYear()- age
document.write("Your age is "+age+" Your birth year is "+thereAge)

document.write("<br>")
document.write("<br>")
document.write("<hr>")

///////////////question 14////////////
var date =  new Date();
var CurMon = date.getMonth();
var cusName = "Nimra Irfan"
var uniNum = 410
var perUni = 16
var netAmnt = uniNum*perUni
var lateChar = 350
var grossAmnt = netAmnt+lateChar;
document.write("Customer Name: " +cusName +
"<br> Month: "+CurMon+"<br> Number of units: "+uniNum+ 
"<br> Charges per unit: "+perUni+"<br> <br> Net Amount Payable (within Due Date): "+netAmnt+
"<br> Late payment surcharge: "+lateChar+"<br> Gross Amount Payable (after Due Date): "+grossAmnt)