import { Results } from './components/Results'
import { fetchData } from './utils/fetcher'
import { filterAllKeys } from './utils/filters'

const baseUrl = 'https://jsonplaceholder.typicode.com/'
const endpoint = 'photos' // ['users', 'photos']
const inputSearch = document.getElementById('searchText')
const resultsElem = document.getElementById('results')

let myData = {}
;(async () => {
  myData = await fetchData(baseUrl + endpoint)
  const slicedData = myData.slice(0, 100)
  return slicedData
})()

const removeResults = () => {
  resultsElem.innerHTML = ''
}

const inputHandler = () => {
  const { value } = inputSearch
  if (value.length < 3) return (resultsElem.innerHTML = '')

  removeResults()
  const resultsData = filterAllKeys({
    data: myData,
    search: value,
  })
  displayResults(resultsData)
}

inputSearch.addEventListener('input', inputHandler)

const displayResults = (results) => {
  const myResults = results
    .map((elem, index) => {
      return Results({ data: elem })
    })
    .join('')

  if (myResults.length) {
    resultsElem.innerHTML = myResults
  } else {
    resultsElem.innerHTML = 'pas de résultat'
  }
}
