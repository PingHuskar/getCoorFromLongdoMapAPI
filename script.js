
var map;
function init() {
  map = new longdo.Map({
    placeholder: document.getElementById('map')
  });
}

const getCoor = () => {
    const data = document.getElementsByClassName('ldmap_contextmenu_info')[0].innerText
    const lat = /\d{1,2}\.\d+/.exec(data)[0]
    const long = /(9|10)\d\.\d+/.exec(data)[0]
    document.getElementById('lat').value = lat
    document.getElementById('long').value = long
}