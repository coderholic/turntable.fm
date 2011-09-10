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
            else { // We're the current DJ
                // Only DJ for a fixed number of iterations
                djIterations++;
                if(djIterations > 8) {
                    djIterations = 0;
                    setTimeout(function() { ttObj.callback('stop_song'); }, 100);
                }
            }
        }

        // Check to see if we're in the DJ queue or not
        if(!ttObj.myuserid in ttObj.djs_uid) {
            // We're not! Become a DJ
            ttObj.callback('become_dj');
        }
    }, 5000);
})();
