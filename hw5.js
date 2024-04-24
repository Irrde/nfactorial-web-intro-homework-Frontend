
// First task
let ageTable = document.getElementById("age-table");

let labelsInAgeTable = document.querySelectorAll("#age-table label");

let firstTdInAgeTable = document.querySelector("#age-table td:first-of-type");

let searchForm = document.querySelector("form[name='search']");

let firstInputInSearchForm = document.querySelector("form[name='search'] input");

let searchFormInputs = document.querySelectorAll("form[name='search'] input");
let lastInputInSearchForm = searchFormInputs[searchFormInputs.length - 1];

// Second task

  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет? выведет BODY





