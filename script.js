const table = document.getElementById("theTable");
const thsort = table.querySelectorAll("th");
let trs = table.querySelectorAll("tr:not(:first-child)");
let params = new URLSearchParams(document.location.search);
let currentSort = params.get("sort");

//ORDNING

//Red ut var som är DESC OCH ASC
///lägg till kommentrarer
//Testar lejer

var element = document.createElement("i");

for (var i = 0; i < thsort.length; i++) {
  if (!params.get("sort")) {
    break;
  }
  let currentSort2 = params.get("sort").split("-");
  if (thsort[i].textContent != currentSort2[0]) {
    continue;
  }

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
}

//EVENTLISTENER
const th = table.querySelectorAll("th:not(.nosort)");

th.forEach((element) => {
  element.addEventListener("click", function () {
    const order = element.textContent;
    if (currentSort == order + "-ASC") {
      params.set("sort", order + "-DESC");
      window.location.search = params.toString();
    } else {
      params.set("sort", order + "-ASC");
      window.location.search = params.toString();
    }
  });
});