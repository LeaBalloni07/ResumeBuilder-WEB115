function createResume() {

    var CheckEmail = validateEmail();
    if (CheckEmail == false) {   
        alert("Please enter a valid email address.");
    } else {

    newResume = ("<html>\n<head>\n<title>Generated Resume</title>");
    resumeStyle(); 
    newResume += ("</head>");
    resumeHeader(); 
    proffesionalSummary(); 
    eduCation();
    profSkills(); 
    workExperience();
    workReferences();
    newResume += ("</body>");
    newResume += ("</html");
    document.write(newResume);
}
}

function resumeStyle() {
    var fontFamily = "Helvetica, arial, sans-serif";

    style = "<style>";
    style += "body { font-size: 14px; font-family: " + fontFamily + "; }"; 
    style += "header { background-color:#183f60; color:#f1f1f1; padding: 5px; font-weight:lighter; text-align:center; }"; 
    style += "h1 { font-size:28px; color:#f1f1f1; }";
    style += "h2 { color:white; font-size:18px; }"; ;
    style += "ul { color:white; }";
    style += "ul li { display:inline; padding:10px }";
    style += "#capital { padding-left:20px; }";
    style += "#capital { padding-right:20px; }";
    style += "#capital h1 { color:#9aaaba; }"; 
    style += "#capital ul li { display:block; color:black; list-style-type:circle; margin-left:-3.7%; }";
    style += "#section { padding-left:20px; }";
    style += "#section { padding-right:20px; }"; 
    style += "#section { width:47%; float:left; }"; 
    style += "#right { width:47%; float:right; }";
    style += "#section h1 { color:#9aaaba; }"; 
    style += "h3 { color:#f4562b; }"; 
    style += "#exp h1 { color:#9aaaba; }";
    style += "#exp { clear:both; }"; 
    style += "#exp { padding-left:20px; }";
    style += "#exp { padding-right:20px; }";
    style += "#exp p { font-size:14px; margin-bottom: -5px; }";
    style += "#exp h3 { color:black; margin-bottom: -5px;}";
    style += "#ref h1 { color:#9aaaba; }";
    style += "#ref { padding-left:20px; }";
    style += "#ref { padding-right:20px; }";
    style += "</style>"; 

    newResume += (style);  
}


function resumeHeader() {

    var user = document.getElementById("fullName").value;
    var title = document.getElementById("title").value
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var number = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var portfolio = document.getElementById("portfolio").value;
    var linkedIn = document.getElementById("linkedIn").value;
    var gitHub = document.getElementById("gitHub").value;
     
    

    header = ("<header><h1>" + user.toUpperCase() + "</h1>");
    header += ("<h2>" + title.toUpperCase() + "</h2>"); 
    header += ("<h5>" + city.toUpperCase() + ", " + state + "</h5>");
    header += ("<ul><li>" + " ◆ " + number + "</li><li>" + " ◆ " + email + "</li><li>" + " ◆ " + portfolio + "</li><li>" + " ◆ " + linkedIn + "</li><li>" + " ◆ " + gitHub + "</li></ul></header>");

    newResume += (header);  
}
 

function validateEmail() {

    var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regEx.test(document.getElementById("email").value);
}

function proffesionalSummary() {

    var codingSkills = document.getElementById("codingSkills").value;
    var workEthic = document.getElementById("workEthic").value;
    var writingSkills = document.getElementById("writingSkills").value; 

    profSum = ("<div id=capital><h1>Professional Summary</h1>");
    profSum += ("<ul><li>" + "<span style=color:#f4562b;> ▸ </span>"  + codingSkills + "</li><li>" + "<span style=color:#f4562b;> ▸ </span>" + workEthic + "</li><li>" + "<span style=color:#f4562b;> ▸ </span>" + writingSkills + "</li></ul><hr>");
    profSum += ("</div>");

    newResume += (profSum); 
}

function eduCation() {

    var uni = document.getElementById("university").value;
    var cty = document.getElementById("cty").value;
    var st = document.getElementById("st").value;
    var degree = document.getElementById("degree").value;
    var year = document.getElementById("year").value;
    var descr = document.getElementById("description").value;

    edu = ("<div id=section><h1>Education</h1>");
    edu += ("<h3>" + uni +  " - " + "<em>" + cty + "</em>" + ", " + "<em>" + st + "</em></h3>");
    edu += ("<p style=margin-bottom:-9px;><b>" + degree + "</b></p>");
    edu += ("<p style=color:#6f777f;><em>" + year + "</em></p>");  
    edu += ("<p>" + descr + "</p>");
    edu += ("</div>");

    newResume += (edu);
}

function profSkills() {

    var webDevelopment = document.getElementById("webDev").value;
    var artDes = document.getElementById("artsDesign").value;

    skills = ("<div id=right><h1 style=color:#9aaaba>Technical Skills</h1>");
    skills += ("<h3>Web Development Skills</h3>");
    skills += ("<p>" + webDevelopment + "</p>");
    skills += ("<h3>Graphic Arts and Designs Skills</h3>");
    skills += ("<p>" + artDes + "</p></div>");
    

    newResume += (skills);
}

function workExperience () {

    var company1 = document.getElementById("company1").value; 
    var position1 = document.getElementById("position1").value;
    var loc1 = document.getElementById("location1").value;
    var workHistory1 = document.getElementById("workHistory1").value;

    var company2 = document.getElementById("company2").value;
    var position2 = document.getElementById("position2").value;
    var loc2 = document.getElementById("location2").value;
    var workHistory2 = document.getElementById("workHistory2").value;

    var company3 = document.getElementById("company3").value;
    var position3 = document.getElementById("position3").value;
    var loc3 = document.getElementById("location3").value;
    var workHistory3 = document.getElementById("workHistory3").value;


    exp = ("<div id=exp><hr><h1>Experience</h1>");
    exp += ("<h3>" + company1 + "</h3>");
    dateString1();
    exp += ("<p>" + "<span style=color:#f4562b;>" + position1 + "</span>" + " | <b>"  + loc1 + "</b></p>");
    exp += ("<p>" + workHistory1 + "</p>");
    exp += ("<br>");

    exp += ("<h3>" + company2 + "</h3>");
    dateString2();
    exp += ("<p>" + "<span style=color:#f4562b;>" + position2 + "</span>" + " | <b>" + loc2 + "</b></p>");
    exp += ("<p>" + workHistory2 + "</p>");
    exp += ("<br>");

    exp += ("<h3>" +  company3 + "</h3>");
    dateString3();
    exp += ("<p>" + "<span style=color:#f4562b;>" + position3 + "</span>" + " | <b>" + loc3 + "</b></p>");
    exp += ("<p>" + workHistory3 + "</p><br>"); 
    exp += ("</div>");

    newResume += (exp);
}

function dateString1() {
  
    var startDate = document.getElementById("entryDate1").value;
    var endDate = document.getElementById("exitDate1").value;
    var dateStr = getDateString(startDate, endDate); 
  
    exp += ("<p style=font-size:12px;>" + dateStr + "</p>"); 
  }

function dateString2() {
  
    var startDate = document.getElementById("entryDate2").value;
    var endDate = document.getElementById("exitDate2").value;
    var dateStr = getDateString(startDate, endDate); 
  
    exp += ("<p style=font-size:12px;>" + dateStr + "</p>"); 
  }

function dateString3() {
  
    var startDate = document.getElementById("entryDate2").value;
    var endDate = document.getElementById("exitDate2").value;
    var dateStr = getDateString(startDate, endDate); 
  
    exp += ("<p style=font-size:12px;>" + dateStr + "</p>"); 
  }
  
  
function getDateString(start, end) {
    var startMonth = start.charAt(5) + start.charAt(6);
    var startYear = start.substr(0, 4);
    var endMonth = end.charAt(5) + end.charAt(6);
    var endYear = end.substr(0, 4);
  
    var dateString = getMonthString(startMonth) + " " + startYear + " - ";
    dateString += getMonthString(endMonth) + " " + endYear;
  
    return dateString;
  }
  
  
function getMonthString(month) {
    var months = ["Jan.", "Feb.", "March", "April", "May", "June",
                  "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    return months[parseInt(month) - 1];
  }


function workReferences() {

    var reference = document.getElementById("references").value;

    ref = ("<div id=ref><hr><h1>References</h1>");
    ref += ("<p>" + reference + "</p>");
    ref += ("</div>"); 

    newResume += (ref);
}

