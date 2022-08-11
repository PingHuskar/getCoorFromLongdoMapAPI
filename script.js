
var map;
function init() {
  map = new longdo.Map({
    placeholder: document.getElementById('map')
  });
}

const getCoor = async () => {
    const data = await document.getElementsByClassName('ldmap_contextmenu_info')[0].innerText.replaceAll('\n','')

    const numbers = /\d+\.\d+,\s\d+\.\d+/.exec(data)[0].substring(5)

    const [lat,long] = numbers.split(", ")
    console.log(lat,long)
    if (confirm(`Do You Want To Set Coor : ${numbers}`)) {
      document.getElementById('lat').value = lat
      document.getElementById('long').value = long
    }
}