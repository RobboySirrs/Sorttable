const table = document.getElementById("theTable");
const thsort = table.querySelectorAll("th");

//ORDNING

//Red ut var som är DESC OCH ASC
///lägg till kommentrarer
//Testar lejer

/* var element = document.createElement("i");

for (var i = 0; i < thsort.length; i++) {
  
  if (thsort[i].dataset.type === "number") {
    if (currentSort2[1] === "DESC") {
      element.classList.add("down", "arrow");
      thsort[i].appendChild(element);
      Array.from(trs)
        .sort((a, b) => b.cells[i].textContent - a.cells[i].textContent)
        .forEach((tr) => table.appendChild(tr));
      break;
    } else {
      element.classList.add("up", "arrow");

      thsort[i].appendChild(element);
      Array.from(trs)
        .sort((a, b) => a.cells[i].textContent - b.cells[i].textContent)
        .forEach((tr) => table.appendChild(tr));
      break;
    }
  }

  if (currentSort2[1] === "DESC") {
    element.classList.add("down", "arrow");
    thsort[i].appendChild(element);

    Array.from(trs)
      .sort((a, b) =>
        a.cells[i].textContent.toLowerCase() <
        b.cells[i].textContent.toLowerCase()
          ? 1
          : -1
      )
      .forEach((tr) => table.appendChild(tr));
    break;
  } else {
    element.classList.add("up", "arrow");
    thsort[i].appendChild(element);


    Array.from(trs)
      .sort((a, b) =>
        a.cells[i].textContent.toLowerCase() >
        b.cells[i].textContent.toLowerCase()
          ? 1
          : -1
      )
      .forEach((tr) => table.appendChild(tr));
    break;

  }
} */
const acsSort = (element, dataSort) => {

  let trs = table.querySelectorAll("tr:not(:first-child)");
  let elements = Array.from(element.parentNode.children)
  elements.forEach((x) => x.removeAttribute("data-sort"));
  //Index of the table Row.
  let index = elements.indexOf(element)
  element.setAttribute("data-sort", "ACS");
  //check if if it so be sortet as number or text or date???
  if(element.dataset.type === "number") {
      Array.from(trs)
        .sort((a, b) => b.cells[index].textContent - a.cells[index].textContent)
        .forEach((tr) => table.appendChild(tr));
      } else {
        Array.from(trs)
        .sort((a, b) =>
          a.cells[index].textContent.toLowerCase() >
          b.cells[index].textContent.toLowerCase()
            ? 1
            : -1
        )        .forEach((tr) => table.appendChild(tr));

      }
      

}

const decsSort = (element, dataSort) => {
  let trs = table.querySelectorAll("tr:not(:first-child)");
  let elements = Array.from(element.parentNode.children)
  elements.forEach((x) => x.removeAttribute("data-sort"));
  //Index of the table Row.
  let index = Array.from(element.parentNode.children).indexOf(element)
  element.setAttribute("data-sort", "DECS");

  //check if if it so be sortet as number or text or date???
  if(element.dataset.type === "number") {
      Array.from(trs)
        .sort((a, b) => a.cells[index].textContent - b.cells[index].textContent)
        .forEach((tr) => table.appendChild(tr));
      } else {
        Array.from(trs)
        .sort((a, b) =>
          a.cells[index].textContent.toLowerCase() <
          b.cells[index].textContent.toLowerCase()
            ? 1
            : -1
        )        .forEach((tr) => table.appendChild(tr));

      }
  
}


const sort = (element, dataSort) => {
  
  if (dataSort == "ACS") {
    decsSort(element, dataSort); 
    return;
  }
  acsSort(element, dataSort); 
}

//EVENTLISTENER
const th = table.querySelectorAll("th:not(.nosort)");

th.forEach((element) => {
  element.addEventListener("click", function () {
   let dataSort = element.getAttribute("data-sort")
    sort(element, dataSort) 
  });
});