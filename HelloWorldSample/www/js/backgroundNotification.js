var reminders;
var connections = new Array();  
var port;


self.addEventListener("connect", function (e) {  
    port = e.ports[0];
    
    port.addEventListener("message", function (e) {  
      var data = e.data;
      if (!data['id']) {
        port.postMessage({value: "Please identify yourself."});
      } else {
        switch (data['cmd']) {
          case 'connect':
            if (!(data['id'] in connections)) {
              connections[data['id']] = null;
              connections.length++;
              port.postMessage({value: data['id'] + " has connected on port #" + connections.length + "."});
            }   
            port.postMessage({value: "Received cmd of '" + data['cmd'] + "' from " + data['id'] + "."});
            if (connections.length == 1) {
              importScripts("js/user.js");
              port.postMessage({value: "Starting calculation of Pi."});
              notifications(port);
            }
            break;
        }
      }
    }, false);  
    port.start();  
}, false);

function getLocation() {
  if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("location-home").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location-home").innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location-home").innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById("location-home").innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location-home").innerHTML = "An unknown error occurred."
            break;
    }
}

//go off every minute
function notifications(port) {
  var time = new Date();
  setTimeout(notifications, 60000);
  for (var i = 0; i < reminders.length; i++) {
    var remtime = reminders[i].getTime();
    if (remtime[0] == time.getHour() && remtime[1] == time.getMinute()) {
      var win=window.open(reminders[i].getTitle(),null,"height=400,width=600,status=yes,toolbar=no,scrollbars=yes,menubar=no,location=no");
      reminders.splice(i, 1);
    }
  }
}