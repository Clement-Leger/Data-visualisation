//------ CONFIGURATION PREMIER GRAPHIQUE --------//

//Je créé un id au premier tr de l'id table1
 let createId = document.querySelectorAll("#table1 tr");
 createId[1].setAttribute("id", "years");

 //Je sélectionne la ligne des années
 let targetYears = document.querySelectorAll("#years th");

 //Je sélectionne le reste du tableau, contenant le nom des pays et leurs nombres
 let targetNumberOfCrimes = document.querySelectorAll("#table1 td");

 //Tableaux devant contenir les années et le reste du tableau
 let takeYears = [];

// boucle qui permet de récupérer les nombres qui m'intéresse (les années)

for(i=0; i<targetYears.length; i++){
    const content = targetYears[i].textContent; // 'title'  ou '2018'
   const contentAsNumber = parseInt(content); // NaN ou 2018
   if(!isNaN(contentAsNumber)){  
    takeYears.push(contentAsNumber);
   }
};

//Je déclare 2 variables. L'une en string, l'autre en objet.

let currentCountry = '' ;
let dataObject = {};

//J'utilise une boucle for qui se base sur la longueur du tableau
for(i=0; i<targetNumberOfCrimes.length; i++){
  const content = targetNumberOfCrimes[i].textContent.replace(",","."); // contient le contenu du tableau et remplace les , par des .
  const contentAsNumber = parseFloat(content); // vérifie si le contenu est un nombre
  if(isNaN(contentAsNumber) && content !== ":") { // si ce n'est pas un nombre, ou que le contenu n'est pas égal à ":", on créé un nouveau tableau dans la variable dataObject 
    currentCountry = content; //currentCountry reprend le contenu de la cellule NaN
    dataObject[currentCountry] = []; //dataObject se créé un nouveau tableau du nom de la cellule NaN récupérée
  }
  else if (!isNaN(contentAsNumber)) { //vérifie si c'est un nombre
    dataObject[currentCountry].push(contentAsNumber); //place les nombres dans le tableau nouvellement créé
  };
};
const CountryList = Object.keys(dataObject) // La constante reprend les keys de dataObject

let DataArray = [] //La variable reprendra chaque donnée utile

for(i=0; i<CountryList.length; i++){ //boucle for pour reprendre chaque nom de pays, nombres, et créé une couleur pour chacun
  const countryName = CountryList[i];
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  const data = {
     label: countryName,
     data: dataObject[countryName],
     backgroundColor : "#" + randomColor,
     borderColor : "#" + randomColor
  };
  DataArray.push(data)
}

//////----------------- LE PREMIER GRAPHIQUE -------------//////
 
 let createCanvasOne = document.querySelector("#table1");
 let firstCanvas = document.createElement("canvas");
 createCanvasOne.before(firstCanvas);
 
 firstCanvas.setAttribute("id", "canvas1");

const ctx = document.getElementById('canvas1').getContext('2d');
 myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: takeYears,
        datasets: DataArray,
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//------ CONFIGURATION DEUXIEME GRAPHIQUE --------//

//Je créé un id au premier tr de l'id table1
let createSecondId = document.querySelectorAll("#table2 tr");
createSecondId[0].setAttribute("id", "years2");

//Je sélectionne la ligne des années
let targetSecondTableYears = document.querySelectorAll("#years2 th");

//Je sélectionne le reste du tableau, contenant le nom des pays et leurs nombres
let targetNumberOfHomicides = document.querySelectorAll("#table2 td");

//Tableaux devant contenir les années et le reste du tableau
let takeSecondTableYears = [];
let takeNumberOfCrimes = [];

// boucle qui permet de récupérer les nombres qui m'intéresse (les années)

for(i=2; i<targetSecondTableYears.length; i++){
   const content = targetSecondTableYears[i].textContent; // 'title'  ou '2018' 
   takeSecondTableYears.push(content);
};

//Je déclare 2 variables. L'une en string, l'autre en objet.
let currentCountryOfSecondTable = '' ;
let secondDataObject = {};

//J'utilise une boucle for qui se base sur la longueur du tableau
for(i=0; i<targetNumberOfHomicides.length; i++){
 const content = targetNumberOfHomicides[i].textContent.replace(",","."); // contient le contenu du tableau et remplace les , par des .
 const contentAsNumber = parseFloat(content); // vérifie si le contenu est un nombre
 if(isNaN(contentAsNumber) && content !== ":") { // si ce n'est pas un nombre, ou que le contenu n'est pas égal à ":", on créé un nouveau tableau dans la variable secondDataObject 
   currentCountryOfSecondTable = content; //currentCountryOfSecondTable reprend le contenu de la cellule NaN
   secondDataObject[currentCountryOfSecondTable] = []; //secondDataObject se créé un nouveau tableau du nom de la cellule NaN récupérée
 }
 else if (!isNaN(contentAsNumber)) { //vérifie si c'est un nombre
   secondDataObject[currentCountryOfSecondTable].push(contentAsNumber); //place les nombres dans le tableau nouvellement créé
 };
};

const secondCountryList = Object.keys(secondDataObject) // La constante reprend les keys de secondDataObject

let secondDataArray = [] //La variable reprendra chaque donnée utile

for(i=0; i<secondCountryList.length; i++){ //boucle for pour reprendre chaque nom de pays, nombres, et créé une couleur pour chacun
 const countryName = secondCountryList[i];
 var randomColor = Math.floor(Math.random()*16777215).toString(16);
 const data = {
    label: countryName,
    data: secondDataObject[countryName],
    backgroundColor : "#" + randomColor,
    borderColor : "#" + randomColor
 };
 secondDataArray.push(data)

}

//////----------------- LE DEUXIEME GRAPHIQUE -------------//////
 
let createCanvasTwo = document.querySelector("#table2");
let secondCanvas = document.createElement("canvas");
createCanvasTwo.before(secondCanvas);

secondCanvas.setAttribute("id", "secondCanvas");

const ctx2 = document.getElementById('secondCanvas').getContext('2d');

 myChart2 = new Chart(ctx2, {
   type: 'bar',
   data: {
       labels: takeSecondTableYears,
       datasets: secondDataArray,
   },
   options: {
       scales: {
           y: {
               beginAtZero: true
           }
       }
   }
});


// -------------- Json DATA & API ---------- //


let createCanvasJson = document.querySelector("#bodyContent");
let CanvasJson = document.createElement("canvas");
createCanvasJson.before(CanvasJson);

let apiLabelArray = [];

CanvasJson.setAttribute("id", "CanvasJson");

const ctxJson = document.getElementById('CanvasJson').getContext('2d');

 const myChart3 = new Chart(ctxJson, {
  type : 'line',
  data: {
    labels : "Data Api",
    datasets : [{
      label : "Data Api",
      data: [],
      borderColor : "#" + randomColor,
      backgroundColor :"#" + randomColor,
  }]
  },
  options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});

// Fonction qui refresh les datas du chart Api
function updateData(apiChart,apiLabel, apiData) {
  apiChart.data.labels = apiLabel;
  apiChart.data.datasets.forEach((apiDataSets) => {
    apiDataSets.data = apiData;
  });
  apiChart.update();
};

//Fonction qui va chercher les datas dans l'url
function updateChart(){

async function fetchData(){
  const url= 'https://canvasjs.com/services/data/datapoints.php';
  const response = await fetch(url, {cache : "reload"});
  
  const datapoints = await response.json(); 

  return datapoints;
};
fetchData().then(datapoints => {
  for(i=0; i<datapoints.length; i++){
    console.log(datapoints[i][0])
   apiLabelArray[i] = datapoints[i][0];
   updateData(myChart3, apiLabelArray, datapoints);
  }
})
 console.log(apiLabelArray)
}
// Interval pour espacer la récupération des données actualisées de l'url
setInterval(updateChart, 3000)