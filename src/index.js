//var url = "https://jsonplaceholder.typicode.com/users";
var url = "https://jsonplaceholder.typicode.com/photos";

async function getData(url) {
  let res = await fetch(url);
  let json = await res.json();
  return json;
}

var myData = {};
getData(url).then(result => {
  myData = result;
});

var inputSearch = document.getElementById("searchText");
var resultsElem = document.getElementById("results");

inputSearch.addEventListener("input", function() {
  var inputSearchValue = inputSearch.value;
  if (inputSearchValue !== "" && inputSearchValue.length >= 3) {
    var searchResults = filterData(myData, inputSearchValue);
    displayResults(searchResults, "title");
  } else {
    resultsElem.innerHTML = "";
  }
});

function displayResults(results, key) {
  resultsElem.innerHTML = "";
  results.map(
    (elem, index) => (resultsElem.innerHTML += `<p>${index} - ${elem[key]}</p>`)
  );
}

function filterData(data, searchKey) {
  return data.filter(obj =>
    Object.keys(obj).some(key =>
      obj[key]
        .toString()
        .toLowerCase()
        .includes(searchKey.toLowerCase())
    )
  );
}