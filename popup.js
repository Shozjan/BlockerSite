
var sec = 0;

$(document).ready(function(){
  chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var link=document.createElement('a');
     link.href= tabs[0].url;

    $("#current").val(link.host);

   

     //dodan listener za spremembo tab-a v statistiko
        var elStats = document.getElementById('toStatistics');
        if(elStats){
          elStats.addEventListener('click', spremeniStatiskika, false);
        }

        //dodan listener za spremembo tab-a v prvotno
        var elStran = document.getElementById('toStran');
        if(elStran){
          elStran.addEventListener('click', spremeniVpodatke, false);
        }


    
});
});

function timer(){
  var timer = setInterval(function(){
      document.getElementById('cas').innerHTML=sec+" sekund";
      sec++;    
  }, 1000);
}


chrome.storage.local.set({"cas": "2"}, function() {

});

chrome.storage.sync.set({'cas': "2"}, function() {
  console.log("Uspesno");
});

chrome.storage.local.get(['cas'], function(result) {
  console.log('Value currently is ' + result.cas);
});
 


function spremeniStatiskika(){
  window.location.href='statistika.html';
}

function spremeniVpodatke(){
  window.location.href='popup.html';
}


