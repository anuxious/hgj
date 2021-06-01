
var iSpeed5 = 0; // time delay of print out
var iIndex5 = 0; // start printing array at this posision
var iScrollAt5 = 20; // start scrolling up at this many lines
var iTextPos5 = 0; // initialise text position
var sContents5 = ''; // initialise contents variable
var iRow5; // initialise current row
var aText5 = new Array(
    "<br><br><b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/</b><b style='color:#fff'>$ <b><text style='color:#0f0'>cd contacts/</text></h5>",
    "<b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/contacts</b><b style='color:#fff'>$ <b><text style='color:#0f0'>grep -n -w -e 'Vasanth' contacts.txt</text></h5>",
    "<h5><text style='color:#0f0'>------------------<br>      &nbsp;6 results found!<br>------------------</text></h5>",
    "<p>15: <text>Name: <b style='color:#000;background-color:#f5d442'>Vasanth</b> Vanan</text></p><p>16: Repostories: <a href='https://bit.ly/33ulJHz'>[Github]</a><text style='color:#4287f5'>(https://github.com/<b style='color:#000;background-color:#f5d442'>Vasanth</b>Vanan)</text></p><p>17: Twitter: <a href='https://bit.ly/3uA95ml'>[Twitter Profile]</a><b style='color:#4287f5'>(https://twitter.com/<b style='color:#000;background-color:#f5d442'>vasanth</b>__vanan)</b> </p><p>18: LinkedIn: <a href='https://bit.ly/3vUXcYg'>[LinkedIn Profile]</a><b style='color:#4287f5'>(https://www.linkedin.com/in/<b style='color:#000;background-color:#f5d442'>vasanth</b>avanan/)</b> </p><p>19: Instagram: <a href='https://bit.ly/3bd9iUK'>[Instagram Profile]</a><b style='color:#4287f5'>(https://www.instagram.com/<b style='color:#000;background-color:#f5d442'>vasanth</b>_vanan/)</b> </p><p>20: Blogs: <a href='https://bit.ly/3vXDzib'>[Medium]</a><b style='color:#4287f5'>(https://medium.com/@<b style='color:#000;background-color:#f5d442'>vasanth</b>avanan59439) </b></p><b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/contacts</b><b style='color:#0f0'>$ exit<b></h5><text style='color:#0f0'>returned exit status 1</text>",
    );
var iArrLength5 = aText5[0].length; // the length of the text array

function typewriter5(){
    sContents5 =  ' ';
    iRow5 = Math.max(0, iIndex5-iScrollAt5);
    var destination5 = document.getElementById("education");
    
    while ( iRow5 < iIndex5 ) {
      sContents5 += aText5[iRow5];
      iRow5++;
    }
    destination5.innerHTML = sContents5 + aText5[iIndex5].substring(0, iTextPos5) + "_";
    if (iTextPos5++ == iArrLength5){
      iTextPos5 = 0;
      iIndex5++;
      if ( iIndex5 != aText5.length ) {
      iArrLength5 = aText5[iIndex5].length;
      setTimeout("typewriter5()", 500);
      }
    } else {
      setTimeout("typewriter5()", iSpeed5);
    }
}

function callTypeWriter4(){
  
     iSpeed5 = 0; // time delay of print out
     iIndex5 = 0; // start printing array at this posision
     iArrLength5 = aText5[0].length; // the length of the text array
     iScrollAt5 = 30; // start scrolling up at this many lines
     iTextPos5 = 0; // initialise text position
     sContents5 = ''; // initialise contents variable
     iRow5; // initialise current row
    
    typewriter5();
}

function myFunction4(){

    callTypeWriter4();
}
