const searchParam = new URLSearchParams(location.search)
var nMap = parseInt(searchParam.get('nMap')) || 2
const coorBox = document.getElementById('coorBox')
coorBox.innerHTML = "<br>"
for (var i = 1; i<nMap+1;i++) {
  document.getElementById('coorBox').innerHTML += `<div>
  <label for="lat${i}">Latitude${i}</label>
  <input type="number" id="lat${i}" placeholder="13.123456789" required disabled>
  <label for="long${i}">Longitude${i}</label>
  <input type="text" id="long${i}" placeholder="100.123456789" required disabled>
  <a class="cursor-pointer bg-lime-300" onclick="document.getElementById('currentMapId').innerText='map${i}';map.location({lat:parseFloat(document.getElementById('lat${i}').value), lon:parseFloat(document.getElementById('long${i}').value)},true);">Select</button>
  <a class=" cursor-pointer bg-red-500" onclick="ResetCoorId(${i});">Reset Coor${i}</button>
  </div>`
}
document.getElementById('coorBox').innerHTML += `<div><button class="cursor-pointer bg-green-500" type="submit">Submit</button>
<button class="bg-red-700" type="reset">RESET</button></div>`