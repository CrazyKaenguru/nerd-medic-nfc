scanButton= document.getElementById("scanbutton");

window.onload=init;
function init()
{
    document.getElementById("console").innerHTML+="init";
}

function nfcAction()
{

    const ndef = new NDEFReader();
    ndef.scan().then(() => {
      console.log("Scan started successfully.");
      ndef.onreadingerror = () => {
        console.log("Cannot read data from the NFC tag. Try another one?");
        document.getElementById("console").innerHTML+="Cannot read data from the NFC tag. Try another one?";
      };
      ndef.onreading = event => {
        console.log("NDEF message read.");
        document.getElementById("console").innerHTML+="NDEF message read.";
      };
    }).catch(error => {
      console.log(`Error! Scan failed to start: ${error}.`);
      document.getElementById("console").innerHTML+="Error! Scan failed to start: ${error}.";
    });
    
 
  
  
}