let fishList = [
  ["Ordre", "Famille", "Nom vernaculaire", "Nom binomal"],
  ["Aulopiforme", "Synodontidea", "Poisson lézard", "Synodus saurus"],
  ["Aulopiforme", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiforme", "Congridae", "Congre", "Conger conger"],
  ["Antheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
];
function display(array) {
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
  tableHead.style.color = "red";
  tableHead.style.fontWeight = "bold";


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
      let fontId = currentElement2[3]
      tableD = document.createElement("td");
      tableR.appendChild(tableD);
      tableD.textContent = currentElement2;
      j++;
    }
    i++;
  }
}
display(fishList);
