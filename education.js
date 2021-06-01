
var iSpeed2 = 0; // time delay of print out
var iIndex2 = 0; // start printing array at this posision
var iScrollAt2 = 20; // start scrolling up at this many lines
var iTextPos2 = 0; // initialise text position
var sContents2 = ''; // initialise contents variable
var iRow2; // initialise current row
var aText2 = new Array(
    "<br><br><br><b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan</b><b style='color:#fff'>$ <b><text style='color:#0f0'>cd education</text></h5>",
    "<b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan/education</b><b style='color:#fff'>$ <b><text style='color:#0f0'>cat education.md/</text></h5><br><h3 style='color:#7279fc'># School</h3><ul style='color:#0f0'><li>* SSC (2010-2014) : <b style='color:#fff'>Mahatma Montessori School, Madurai</b> which is affiliated to Central Board of Secondary Education.</li><li>* HSC (2014-2016):<b style='color:#fff'> Mahatma Montessori Matriculation School, Madurai.</b></li></ul><br><h3 style='color:#7279fc'># College (Undergraduate)</h3><ul style='color:#0f0'><li>* Bachelor of Information Technology in <b style='color:#fff'>Thiagarajar college of Engineering</b>, Madurai which is affiliated to Anna university.(Jul 2016 - Jun 2020)</li><li>* Special Interest Group (SIG): <b style='color:#fff'>Information Security & Privacy</b></li><li>* NCC cadet: <b style='color:#fff'>attended one training camp & completed B-certificate</b></li></ul><br><b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan/education</b><b style='color:#0f0'>$ exit<b></h5><text style='color:#0f0'>returned exit status 1</text>"
    );
var iArrLength2 = aText2[0].length; // the length of the text array

function typewriter2(){
    sContents2 =  ' ';
    iRow2 = Math.max(0, iIndex2-iScrollAt2);
    var destination2 = document.getElementById("education");
    
    while ( iRow2 < iIndex2 ) {
      sContents2 += aText2[iRow2];
      iRow2++;
    }
    destination2.innerHTML = sContents2 + aText2[iIndex2].substring(0, iTextPos2) + "_";
    if (iTextPos2++ == iArrLength2){
      iTextPos2 = 0;
      iIndex2++;
      if ( iIndex2 != aText2.length ) {
      iArrLength2 = aText2[iIndex2].length;
      setTimeout("typewriter2()", 500);
      }
    } else {
      setTimeout("typewriter2()", iSpeed2);
    }
}

function callTypeWriter(){
  
     iSpeed2 = 0; // time delay of print out
     iIndex2 = 0; // start printing array at this posision
     iArrLength2 = aText2[0].length; // the length of the text array
     iScrollAt2 = 20; // start scrolling up at this many lines
     iTextPos2 = 0; // initialise text position
     sContents2 = ''; // initialise contents variable
     iRow2; // initialise current row
    
    typewriter2();
}

function myFunction(){

    callTypeWriter();
}