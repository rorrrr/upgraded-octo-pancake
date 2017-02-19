
window.onload = function() {

  var url = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image,info,lore,stats&api_key=RGAPI-74b55f1b-abee-4a11-9b31-dc052253a8fd';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  
  request.onload = function() {
    if (request.status === 200) {

    loadChampionList(request.responseText);
    main(champions);
    }
    // var championNames = JSON.parse(responseText);
    // console.log(championNames)
  };

};

var main = function (champions) {

  // var championNames = JSON.parse(responseText).data;
  populateSelect(champions);
  var selected = championNames[0];
  console.log(selected);

}

var populateSelect = function (champions) {
    var parent = document.querySelector('#champions');
    championsNames.forEach(function (item, index) {
        item.index = index;
        var option = document.createElement("option");
        option.value = index.toString();
        option.text = item.name;
        parent.appendChild(option);
    });
    parent.style.display = 'block';

    parent.addEventListener('change', function(event) {
        var index = this.value;
        var country = countries[index];
        updateDisplay(country);
        localStorage.setItem("selectedCountry",JSON.stringify(country));
    });
};


// var loadChampionList = function(responseText) {
//   var championNames = JSON.parse(responseText).data;
  
//   var nameList = Object.keys(championNames);

//   // console.log(championNames)
//   championDeets = [];

//   for (championName in championNames){

//     championDeets.push(
//     {
//       // key: champion,
//       name: championNames[championName]['name'],
//       title: championNames[championName]['title'],
//       image: championNames[championName]['image'],
//       lore: championNames[championName]['lore'],
//       info: championNames[championName]['info']
//     })
//   }

  // console.log(championDeets)





