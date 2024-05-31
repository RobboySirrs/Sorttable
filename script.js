const acsSort = (element, table) => {
  let trs = table.querySelectorAll("tr:not(:first-child)");
  let elements = Array.from(element.parentNode.children);
  elements.forEach((x) => x.removeAttribute("data-sort"));
  //Index of the table Row.
  let index = elements.indexOf(element);
  element.setAttribute("data-sort", "ACS");
  //check if if it so be sorted as number or text or date???
  if (element.dataset.type === "number") {
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
      )
      .forEach((tr) => table.appendChild(tr));
  }
};

const decsSort = (element, table) => {
  let trs = table.querySelectorAll("tr:not(:first-child)");
  let elements = Array.from(element.parentNode.children);

  elements.forEach((x) => x.removeAttribute("data-sort"));
  //Index of the table Row.
  let index = elements.indexOf(element);
  element.setAttribute("data-sort", "DECS");
  //check if if it so be sortet as number or text or date???
  if (element.dataset.type === "number") {
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
      )
      .forEach((tr) => table.appendChild(tr));
  }
};

const sort = (element, dataSort, table) => {
  if (dataSort == "ACS") {
    decsSort(element, table);
    return;
  }
  acsSort(element, table);
};

//const tableAll = document.querySelectorAll("table");
const tableAll = document.querySelectorAll("[table-sort]");

tableAll.forEach((table) => {
  let th = table.querySelectorAll("th:not([no-sort])");

  th.forEach((element) => {
    element.addEventListener("click", function () {
      let dataSort = element.getAttribute("data-sort");
      sort(element, dataSort, table);
    });
  });
});
