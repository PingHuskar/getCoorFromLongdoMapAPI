
var map;
var marker = new longdo.Marker({lat:13.75, lon:100.5}, {
  icon: {
    url: 'pin_mark.png',
    offset: { x: 12, y: 84}
  },
});
function init() {
  map = new longdo.Map({
    placeholder: document.getElementById('map')
  });
  map.location({lat:13.75, lon:100.5},false)
  // map.location(longdo.LocationMode.Geolocation);
  map.Overlays.drop(marker)
  
}

const getCoor = async () => {
    // const data = await document.getElementsByClassName('ldmap_contextmenu_info')[0].innerText.replaceAll('\n','')

    // const numbers = /\d+\.\d+,\s\d+\.\d+/.exec(data)[0].substring(5)
    console.log(`${map.location().lat},${map.location().lon}`)
    // const [lat,long] = numbers.split(", ")
    // console.log(lat,long)
    // if (confirm(`Do You Want To Set Coor : ${map.location().lat},${map.location().lon}`)) {
      document.getElementById('lat').value = map.location().lat
      document.getElementById('long').value = map.location().lon
    // }
    marker.move({lat:map.location().lat, lon:map.location().lon}, true);
}