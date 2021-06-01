
var iSpeed7 = 0; // time delay of print out
var iIndex7 = 0; // start printing array at this posision
var iScrollAt7 = 20; // start scrolling up at this many lines
var iTextPos7 = 0; // initialise text position
var sContents7 = ''; // initialise contents variable
var iRow7; // initialise current row
var aText7 = new Array(
    "<br><br><b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan</b><b style='color:#fff'>$ <b><text style='color:#0f0'>cat recent_projects.txt</text></h5>",
    "----------------------------------------------------------------------------------<br><br>     &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>Data Model Standardiser using Hypderledger Fabric</b><br>                   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(Apr 2021)<br><br>An intelligent blockchain network that can maintain the data model integrity across FMS with various attributes rules.<br><br>----------------------------------------------------------------------------------<br><br>     &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>Zero Hunger using Ethereum Blockchain</b><br>                   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(Aug 2019)<br><br>An automated food assistance system using ethereum blockchain is managed to donate <br>food to people with a decentralised authority.<br><br>----------------------------------------------------------------------------------<br><br>       &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b style='color:#0f0'>AR-Bots using Augumented Reality</b><br>                   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(Sep 2018)<br><br>This project is an Augmented Reality - Tour Guide,which is an automated android app that lets user to share the Information without a Human Resource<br><br>----------------------------------------------------------------------------------<br><br>",
    "<b><h5 style='color:#ff0000'>root@vasanth-vanan <b style='color:#7279fc'>~/vasanth-vanan</b><b style='color:#0f0'>$ exit<b></h5>",
    "<text style='color:#0f0'>returned exit status 1</text>"
    );
var iArrLength7 = aText7[0].length; // the length of the text array

function typewriter7(){
    sContents7 =  ' ';
    iRow7 = Math.max(0, iIndex7-iScrollAt7);
    var destination7 = document.getElementById("education");
    
    while ( iRow7 < iIndex7 ) {
      sContents7 += aText7[iRow7];
      iRow7++;
    }
    destination7.innerHTML = sContents7 + aText7[iIndex7].substring(0, iTextPos7) + "_";
    if (iTextPos7++ == iArrLength7){
      iTextPos7 = 0;
      iIndex7++;
      if ( iIndex7 != aText7.length ) {
      iArrLength7 = aText7[iIndex7].length;
      setTimeout("typewriter7()", 500);
      }
    } else {
      setTimeout("typewriter7()", iSpeed7);
    }
}

function callTypeWriter6(){
  
     iSpeed7 = 0; // time delay of print out
     iIndex7 = 0; // start printing array at this posision
     iArrLength7 = aText7[0].length; // the length of the text array
     iScrollAt7 = 30; // start scrolling up at this many lines
     iTextPos7 = 0; // initialise text position
     sContents7 = ''; // initialise contents variable
     iRow7; // initialise current row
    
    typewriter7();
}

function myFunction6(){

    callTypeWriter6();
}