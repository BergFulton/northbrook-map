//Global variables
var map;
var infowindow; // create global infowindow

//Draw the map. It's centered on the LatLng for Pittsburgh, PA, USA.
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.440625,
            lng: -79.995886
        },
        zoom: 10,
        mapTypeControl: true
    });
}

initMap();
//     // create global infowindow 
//     infowindow = new google.maps.InfoWindow();
//     ko.applyBindings(new ViewModel());
// }

// //Google Maps Error
// function googleError(){
//     alert("Google Has An Error!");
// }
