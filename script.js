

var map;
try {
  var marker = new longdo.Marker({lat:13.75, lon:100.5}, {
    icon: {
      url: 'pin_mark.png',
      offset: { x: 12, y: 84},
    }    
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
  map.bound({
    "minLat": 0.371667073304601,
    "minLon": 91.19457945227623,
    "maxLat": 21.716946745375022,
    "maxLon": 111.67309507727623
  });
  
  // map.location(longdo.LocationMode.Geolocation);
  // map.Overlays.drop(marker)
  // map.Event.bind('drag',function() {
  //   console.log('drag')
  // })
  map.Event.bind('click', function() {
    var mouseLocation = map.location(longdo.LocationMode.Pointer);
    const currentMapId = document.getElementById("currentMapId").innerText
    // console.log(currentMapId)
    const Id = currentMapId.replace(/[A-z]/g,"")
    // console.log(Id)
    console.log(`Mark map${Id} on ${mouseLocation.lat},${mouseLocation.lon}`)
    document.getElementById(`lat${Id}`).value = mouseLocation.lat
    document.getElementById(`long${Id}`).value = mouseLocation.lon
    removeMarker();
    var markerTemp = new longdo.Marker(mouseLocation, {
      icon: {
        url: 'pin_mark.png',
      },
      draggable :true,
      weight: longdo.OverlayWeight.Top,      
    })
    map.Event.bind('overlayDrop',function() {
      // console.log('overlayDrop')
      var mouseLocation = map.location(longdo.LocationMode.Pointer);
      var currentMapId = document.getElementById("currentMapId").innerText
      // console.log(currentMapId)
      var Id = currentMapId.replace(/[A-z]/g,"")
      // console.log(Id)
      // console.log(`Mark map${Id} on ${mouseLocation.lat},${mouseLocation.lon}`)
      document.getElementById(`lat${Id}`).value = mouseLocation.lat
      document.getElementById(`long${Id}`).value = mouseLocation.lon

    })
    map.Overlays.add(markerTemp);
  });
}

const removeMarker = () => {
  map.Overlays.clear();
}

const ResetCoorId = (i) => {
  // if (confirm(`Do You Want To Set map${i}`)) {
    if (confirm(`Move To last Location ?`)) {
      map.location({lat:document.getElementById(`lat${i}`).value, lon:document.getElementById(`long${i}`).value},false)
    }
    document.getElementById(`lat${i}`).value=null;
    document.getElementById(`long${i}`).value=null;
  // }
}