
var iSpeed4 = 0; // time delay of print out
var iIndex4 = 0; // start printing array at this posision
var iScrollAt4 = 20; // start scrolling up at this many lines
var iTextPos4 = 0; // initialise text position
var sContents4 = ''; // initialise contents variable
var iRow4; // initialise current row
var aText4 = new Array(
    "<br><br><b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan</b><b style='color:#fff'>$ <b><text style='color:#0f0'>cd experience</text></h5>",
    "<b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan/experience</b><b style='color:#fff'>$ <b><text style='color:#0f0'>cat experience.md/</text></h5><br>",
    "<h4>       ◯  <big style='color:#0f0'>Jun 2019, Summer Internship</big></h4>       |<br>       |  (GoSchedule, Delaware, United States)<br>       |  <big style='color:#ff0000'> Duration: 3 Weeks</big><br>       |<br><h4>       ◯  <b style='color:#0f0'>Jul 2019, ACM Summer School</b></h4>       |<br>       |  (IIIT-Delhi)<br>       |  <big style='color:#ff0000'> Duration: 1 Month</big><br>       |<br><h4>       ◯  <b style='color:#0f0'>Jan 2020, Project Trainee</b></h4>       |<br>       |  (IBM-CIO)<br>       |  <big style='color:#ff0000'> Duration: 10 Months</big><br>       |<br><h4>       ◯  <b style='color:#0f0'>Oct 2020, Software Developer</b></h4>       |<br>       |  (IBM-CIO)<br>       |  <big style='color:#ff0000'> Duration: Oct 2020 - Present</big><br>       |<br><h4>       ◯  <b style='color:#7279fc'>Present</b></h4>"
    );
var iArrLength4 = aText4[0].length; // the length of the text array

function typewriter4(){
    sContents4 =  ' ';
    iRow4 = Math.max(0, iIndex4-iScrollAt4);
    var destination4 = document.getElementById("education");
    
    while ( iRow4 < iIndex4 ) {
      sContents4 += aText4[iRow4];
      iRow4++;
    }
    destination4.innerHTML = sContents4 + aText4[iIndex4].substring(0, iTextPos4) + "_";
    if (iTextPos4++ == iArrLength4){
      iTextPos4 = 0;
      iIndex4++;
      if ( iIndex4 != aText4.length ) {
      iArrLength4 = aText4[iIndex4].length;
      setTimeout("typewriter4()", 500);
      }
    } else {
      setTimeout("typewriter4()", iSpeed4);
    }
}

function callTypeWriter3(){
  
     iSpeed4 = 0; // time delay of print out
     iIndex4 = 0; // start printing array at this posision
     iArrLength4 = aText4[0].length; // the length of the text array
     iScrollAt4 = 40; // start scrolling up at this many lines
     iTextPos4 = 0; // initialise text position
     sContents4 = ''; // initialise contents variable
     iRow4; // initialise current row
    
    typewriter4();
}

function myFunction3(){

    callTypeWriter3();
}