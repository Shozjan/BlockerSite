var webSites = ["www.w3schools.com", "www.24ur.com", "www.rtvslo.si"];

setInterval(function() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var link=document.createElement('a');
         link.href= tabs[0].url;
        
         var i;
            for (i = 0; i < webSites.length; i++) { 
                if(link.host==webSites[i])
                {
                   chrome.tabs.update(undefined,{url: "newtab.html"});
                }
            }      
    });

  }, 1);

 