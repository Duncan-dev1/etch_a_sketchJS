const reset = document.querySelector(".reset");

const box = document.querySelector(".box");
const container = document.querySelector(".container");
let gridNum = 0;

function makeGrids() {
  for (var i = 0; i < 16; i++) {
    var row = document.createElement("div");
    row.className = "row";
    row.id = "row" + i;

    for (var j = 0; j < 16; j++) {
      var box = document.createElement("div");
      box.className = "box";
      row.appendChild(box);
    
      
    }
    container.appendChild(row);
  }
  //test

  return container;
}
makeGrids();



 function hover(){
   
box.style.backgroundColor='green';
}

function resetGrid() {
  var gridNum = prompt("Enter a number between 16 and 100");
    container.innerHTML = "";
  // return gridNum;
  for (var i = 0; i < gridNum; i++) {
    var row = document.createElement("div");
    row.className = "row";
    row.id = "row" + i;

    for (var j = 0; j < gridNum; j++) {
      var box = document.createElement("div");
      box.className = "box";
      row.appendChild(box);
    }
    container.appendChild(row);
  }
return container;
}   
reset.onclick = resetGrid;
box.onmouseover =hover;

//const div = document.createElement('div');
//console.log(makeGrids())
