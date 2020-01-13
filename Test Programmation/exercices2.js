let title = document.getElementById('name');
let description = document.getElementById('paragraphe');
let showNext = document.getElementById('boutonNext');
let screen1 = document.getElementById('screen1');
let screen2 = document.getElementById('screen2');
let displaytab = document.getElementsByTagName('table')

function displayScreen1(display) {
  screen1.style.display = display;

};
function displayScreen2(display) {
  screen2.style.display = display;
};



// boutton
showNext.addEventListener("click", function(display) {
  displayScreen1("none");
  displayScreen2("block");
});





let tab = [["Titre du film","Réalisateur","Nationalité", "Année", "Durée", "Version"],["IN MY ROOM","Ulrich Köhler","Allemagne","2019","2h","vf"],["UN VIOLENT DESIR DE BONHEUR","Clément Schneider","France","2018","1h15","vf"],["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?","Roberto Minervini","Etat-Unis/Italie","2018","2h03","vostfr"],["GRASS","Hong Sang-Soo","Corée du Sud","2018","1h06","vostfr"]];


// Tableau
function display2(array) {
  let i = 1;
  let j = 0;
  let dataHead = array[0];
  let currentElement;
  let currentElement2;
  let table = document.createElement("table");
  document.body.appendChild(table);

  let tableHead = document.createElement("thead");
  table.appendChild(tableHead);
  let tableHeadR = document.createElement("tr");
  tableHead.appendChild(tableHeadR);
  let tableHeadH;

  if (screen1 == true) {
  display2.style.display = none;
  }

  while (j < dataHead.length) {
    currentElement = dataHead[j];
    tableHeadH = document.createElement("th");
    tableHeadR.appendChild(tableHeadH);
    tableHeadH.textContent = currentElement;
    j++;
  }
  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  let tableR;
  let tableD;

  while (i < array.length) {
    currentElement = array[i];
    tableR = document.createElement("tr");
    tableBody.appendChild(tableR);
    j = 0;

    while (j < currentElement.length) {
      currentElement2 = currentElement[j];
      tableD = document.createElement("td");
      tableR.appendChild(tableD);
      tableD.textContent = currentElement2;
      j++;
    }
    i++;
  }
}
display2(tab);
