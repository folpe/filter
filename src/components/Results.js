export const Results = ({ data }) => {
  const { title, thumbnailUrl, url } = data
  return `<div style="border: 1px solid #ccc; padding: 12px; margin: 12px">
    <div>Name : ${title} </div>
    <div><img src="${thumbnailUrl}"/></div>
    <a href="${url}">URL : ${url} </a>
  </div>`
}
