(function(){
    var ttObj = null;
    var djIterations = 0;

    // Get the room manager object
    for (var prop in window) { 
        if (window.hasOwnProperty(prop) && window[prop] instanceof roommanager){ 
            ttObj = window[prop];
            break;
        } 
    }

    if(ttObj === null){
        alert("Couldn't auto find the roommanger object.");
        return;
    }
 
    // Main loop - repeat every 5 seconds
    setInterval(function() {
        if(ttObj.current_dj) {
            if(ttObj.current_dj[0] != ttObj.myuserid) { 
                ttObj.callback('upvote');
            }
        }
    }, 5000);
})();
