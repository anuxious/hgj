
var iSpeed6 = 0; // time delay of print out
var iIndex6 = 0; // start printing array at this posision
var iScrollAt6 = 20; // start scrolling up at this many lines
var iTextPos6 = 0; // initialise text position
var sContents6 = ''; // initialise contents variable
var iRow6; // initialise current row
var aText6 = new Array(
    "<br><br><b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/</b><b style='color:#fff'>$ <b><text style='color:#0f0'>curl -i -H 'Content-Type: application/json' -X GET https://api.profile.com/vasanth_vanan/awards</text></h5>",
    "<p><text style='color:#fff'>⬤ 200 OK</text></p>",
    "{<br>    &emsp;<b style='color:#0f0'>'result'</b>: {<br>        &emsp;&emsp;&emsp;<b style='color:#0f0'>'id-1'</b> : {<br>        	&emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>'name'</b>: 'CIO-SIS Hackathon - WINNER',<br>	        &emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>'date'</b>: 'Apr 2021',<br>	        &emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>'tech_used'</b>: 'hyperledger fabric',<br>	        &emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>'description'</b>: 'Won first position in Friday Hacks conducted by CIO-SIS &emsp;&emsp;&emsp;&emsp; for developing a Data Standardisation Model using Hyperledger Fabric &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;Blockchain'<br>        &emsp;&emsp;&emsp;&emsp;},<br>        &emsp;&emsp;&emsp;<b style='color:#0f0'>'id-2'</b> : {<br>        	&emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>'name'</b>: 'IBM Business Hackathon 2020 - RUNNER',<br>	        &emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>'date'</b>: 'Sep 2020',<br>	        &emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>'tech_used'</b>: 'Watson Discovery, Elastic Search, React',<br>	        &emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>'description'</b>: 'Secured 2nd position (out of 20+ teams) in IBM Business &emsp;&emsp;&emsp;&emsp;Hackathon 2020 for developing Cognitive Procurement tool with ElasticSearch &emsp;&emsp;&emsp;&emsp;in React framework'<br>     &emsp;&emsp;&emsp; },<br>       &emsp;&emsp;}<br>}",
    "<b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/contacts</b><b style='color:#0f0'>$ exit<b></h5>",
    "<text style='color:#0f0'>returned exit status 1</text>"
    );
var iArrLength6 = aText6[0].length; // the length of the text array

function typewriter6(){
    sContents6 =  ' ';
    iRow6 = Math.max(0, iIndex6-iScrollAt6);
    var destination6 = document.getElementById("education");
    
    while ( iRow6 < iIndex6 ) {
      sContents6 += aText6[iRow6];
      iRow6++;
    }
    destination6.innerHTML = sContents6 + aText6[iIndex6].substring(0, iTextPos6) + "_";
    if (iTextPos6++ == iArrLength6){
      iTextPos6 = 0;
      iIndex6++;
      if ( iIndex6 != aText6.length ) {
      iArrLength6 = aText6[iIndex6].length;
      setTimeout("typewriter6()", 500);
      }
    } else {
      setTimeout("typewriter6()", iSpeed6);
    }
}

function callTypeWriter5(){
  
     iSpeed6 = 0; // time delay of print out
     iIndex6 = 0; // start printing array at this posision
     iArrLength6 = aText6[0].length; // the length of the text array
     iScrollAt6 = 30; // start scrolling up at this many lines
     iTextPos6 = 0; // initialise text position
     sContents6 = ''; // initialise contents variable
     iRow6; // initialise current row
    
    typewriter6();
}

function myFunction5(){

    callTypeWriter5();
}