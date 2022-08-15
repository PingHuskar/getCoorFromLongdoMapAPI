

var map;
try {
  var marker = new longdo.Marker({lat:13.75, lon:100.5}, {
    icon: {
      url: 'pin_mark.png',
      offset: { x: 12, y: 84}
    },
  });
}
catch(err) {
  document.write('No Internet connection or Invalid API Key');
  // document.getElementById("map").style.display = "none";
  
  setTimeout(function() {
    document.getElementById("map").style.height = "0px";
    document.getElementById("container").style.display = "none";}
    , 1000)
}
function init() {
  map = new longdo.Map({
    placeholder: document.getElementById('map')
  });
  map.Ui.DPad.visible(false);
  map.Ui.Zoombar.visible(false);
  map.Ui.Geolocation.visible(false);
  map.Ui.Toolbar.visible(false);
  map.Ui.LayerSelector.visible(true);
  map.Ui.Fullscreen.visible(false);
  map.Ui.Crosshair.visible(false);
  map.location({lat:13.75, lon:100.5},false)
  
  // map.location(longdo.LocationMode.Geolocation);
  // map.Overlays.drop(marker)
  map.Event.bind('click', function() {
    var mouseLocation = map.location(longdo.LocationMode.Pointer);
    const currentMapId = document.getElementById("currentMapId").innerText
    // console.log(currentMapId)
    const Id = currentMapId.replace(/[A-z]/g,"")
    // console.log(Id)
    console.log(`Mark map${Id} on ${mouseLocation.lat},${mouseLocation.lon}`)
    document.getElementById(`lat${Id}`).value = mouseLocation.lat
    document.getElementById(`long${Id}`).value = mouseLocation.lon
    var markerTemp = new longdo.Marker(mouseLocation)
    map.Overlays.add(markerTemp);
    setTimeout(function() {
      map.Overlays.remove(markerTemp)}
      , 5000) //milliseconds 
  });
  // map.Event.bind('drag', function(event) {
  //   xsum += event.x;
  //   ysum += event.y;
  //   console.log('x: ' + xsum + ' y: ' + ysum)
  // });
  
  // map.Event.bind('drop', function() {
  //   ysum = 0;
  //   xsum = 0;
  // });
}

const getCoor = async () => {
    // const data = await document.getElementsByClassName('ldmap_contextmenu_info')[0].innerText.replaceAll('\n','')

    // const numbers = /\d+\.\d+,\s\d+\.\d+/.exec(data)[0].substring(5)
    
    console.log(`Current Coor : ${map.location().lat},${map.location().lon}`)
    // const [lat,long] = numbers.split(", ")
    // console.log(lat,long)
    // if (confirm(`Do You Want To Set map${Id} : ${map.location().lat},${map.location().lon}`)) {
      // document.getElementById(`lat${Id}`).value = map.location().lat
      // document.getElementById(`long${Id}`).value = map.location().lon
    // }
    marker.move({lat:map.location().lat, lon:map.location().lon}, true);
}

const ResetCoorId = (i) => {
  if (confirm(`Do You Want To Set map${i}`)) {
    if (confirm(`Move To last Location ?`)) {
      map.location({lat:document.getElementById(`lat${i}`).value, lon:document.getElementById(`long${i}`).value},false)
    }
    document.getElementById(`lat${i}`).value=null;
    document.getElementById(`long${i}`).value=null;
  }
}