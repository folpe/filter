var url = "https://jsonplaceholder.typicode.com/users";
//var url = "https://jsonplaceholder.typicode.com/photos";

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
  resultsElem.innerHTML = "";
  var inputSearchValue = inputSearch.value;
  if (inputSearchValue !== "" && inputSearchValue.length >= 1) {
    var searchResults = filterData(myData, inputSearchValue);
    displayResults(searchResults);
  } else {
    resultsElem.innerHTML = "";
  }
});

function displayResults(results) {
  var myResults = results
    .map(
      (elem, index) =>
        `<div>${index}
        <div>Name : ${elem["name"]} - ${elem["username"]}</div>
        <div>Email : ${elem["email"]}
    </div>`
    )
    .join("");
  if (myResults.length) {
    resultsElem.innerHTML = myResults;
  } else {
    resultsElem.innerHTML = "pas de résultat";
  }
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
