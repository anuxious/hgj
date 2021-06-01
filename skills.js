
var iSpeed3 = 0; // time delay of print out
var iIndex3 = 0; // start printing array at this posision
var iScrollAt3 = 20; // start scrolling up at this many lines
var iTextPos3 = 0; // initialise text position
var sContents3 = ''; // initialise contents variable
var iRow3; // initialise current row
var aText3 = new Array(
    "<br><br><b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan</b><b style='color:#fff'>$ <b><text style='color:#0f0'>cd skills/</text></h5>",
    "<b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan/skills</b><b style='color:#fff'>$ <b><text style='color:#0f0'>ls -l </text></h5>",
    "-rwxr--r--@ vasanthvanan 3 5 <b style='color:#0f0'>Programming Language</b> C++<br>-rwxr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Programming Language</b> Python<br>-rwxr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Scripting Language</b> PHP<br>-rwxr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Querying Language</b> MySQL<br>-rwxr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Programming Language</b> JavaScript<br>-rwxr--r--@ vasanthvanan 3 5 <b style='color:#0f0'>Framework</b> Angular<br>-rwxr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Framework</b> ReactJS<br>-rwxr--r--@ vasanthvanan 3 5 <b style='color:#0f0'>Framework</b> Laravel<br>-rw-r--r--@ vasanthvanan 2 5 <b style='color:#0f0'>Framework</b> Spark & Scala<br>-rwxr--r--@ vasanthvanan 3 5 <b style='color:#0f0'>Blockchain</b> Ethereum<br>-rwxr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Blockchain</b> Hyperledger Fabric<br>-rwxr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Web Service</b> REST APIs<br>-rwxr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Version Control</b> Git<br>---xr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Editing</b> Adobe Photoshop<br>---xr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Editing</b> After Effects<br>---xr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Editing</b> Final Cut Pro<br>---xr--r--@ vasanthvanan 3 5 <b style='color:#0f0'>Game Development</b> Unity<br>---xr--r--@ vasanthvanan 3 5 <b style='color:#0f0'>Graphics</b> Blender<br>---xr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Interpersonal</b> Problem Solving<br>---xr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Interpersonal</b> Agile methodologies<br>-rw-r--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Interpersonal</b> Blogging<br>---xr--r--@ vasanthvanan 4 5 <b style='color:#0f0'>Tools</b> Wireshark<br>---xr--r--@ vasanthvanan 3 5 <b style='color:#0f0'>Tools</b> Metasploit<br>",
    "<b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan/skills</b><b style='color:#0f0'>$ exit<b></h5>",
    "<text style='color:#0f0'>returned exit status 1</text>"
    );
var iArrLength3 = aText3[0].length; // the length of the text array

function typewriter3(){
    sContents3 =  ' ';
    iRow3 = Math.max(0, iIndex3-iScrollAt3);
    var destination3 = document.getElementById("education");
    
    while ( iRow3 < iIndex3 ) {
      sContents3 += aText3[iRow3];
      iRow3++;
    }
    destination3.innerHTML = sContents3 + aText3[iIndex3].substring(0, iTextPos3) + "_";
    if (iTextPos3++ == iArrLength3){
      iTextPos3 = 0;
      iIndex3++;
      if ( iIndex3 != aText3.length ) {
      iArrLength3 = aText3[iIndex3].length;
      setTimeout("typewriter3()", 500);
      }
    } else {
      setTimeout("typewriter3()", iSpeed3);
    }
}

function callTypeWriter2(){
  
     iSpeed3 = 0; // time delay of print out
     iIndex3 = 0; // start printing array at this posision
     iArrLength3 = aText3[0].length; // the length of the text array
     iScrollAt3 = 30; // start scrolling up at this many lines
     iTextPos3 = 0; // initialise text position
     sContents3 = ''; // initialise contents variable
     iRow3; // initialise current row
    
    typewriter3();
}

function myFunction2(){

    callTypeWriter2();
}