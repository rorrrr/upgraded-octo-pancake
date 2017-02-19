
window.onload = function() {

  var url = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image,info,lore,stats&api_key=RGAPI-74b55f1b-abee-4a11-9b31-dc052253a8fd';
  var request = new XMLHttpRequest();
  request.open("GET", url);

  request.onload = function () {
    if (request.status === 200) {
      var jsonString = request.responseText;
      var champions = JSON.parse(jsonString).data;
      main(champions);
    }
  };
  request.send();

};


var main = function (champions) {

  // var championNames = JSON.parse(responseText).data;
  populateSelect(champions);

  var championsDeets = [];

  for (championObject in champions){

    championsDeets.push(
    {
      key: championObject,
      name: champions[championObject]['name'],
      title: champions[championObject]['title'],
      image: champions[championObject]['image'],
      lore: champions[championObject]['lore'],
      info: champions[championObject]['info']
    })
  }


  
  var cached = localStorage.getItem("selectedChampion");
  var selected = champions[0];
  // console.log(cached)

  if(cached) {
    selected = JSON.parse(cached);
    var selector = document.querySelector('#champions').selectedIndex = selected.index +1;
    // updateDisplay(selected);

  }
  document.querySelector('#details').style.display = 'block';
}

var populateSelect = function (champions) {
  var parent = document.querySelector('#champions');

  var championsDeets = [];

  for (championObject in champions){

    championsDeets.push(
    {
      key: championObject,
      name: champions[championObject]['name'],
      title: champions[championObject]['title'],
      image: champions[championObject]['image'],
      lore: champions[championObject]['lore'],
      info: champions[championObject]['info']
    })
  }



  championsDeets.forEach(function (item, index) {
    item.index = index;
    var option = document.createElement("option");
    option.value = index.toString();
    option.text = item.name;
    parent.appendChild(option);
  });

  parent.style.display = 'block';

  parent.addEventListener('change', function(event) {
    var index = this.value;
    console.log(index)
    var champion = championsDeets[index];
    console.log(champion)
    updateDisplay(champion);
    localStorage.setItem("selectedChampion",JSON.stringify(champion));
  });

};

var updateDisplay = function(deets) {
  var tags = document.querySelectorAll('#details *');
  // console.log(deets)
  tags[0].innerText = deets.name;
  tags[1].innerText = deets.title;
  tags[2].innerHTML = "<h3>LORE: </h3>" + deets.lore;
};





// var updateDisplay = function(details) {
  //   var tags = document.querySelectorAll('#champions');
  //   tags[0].innerText = details['name'];
  //   tags[1].innerText = details['title'];
  //   tags[2].innerText = details['lore'];
  // };


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




