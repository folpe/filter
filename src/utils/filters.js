export const filterAllKeys = ({ data, search }) => {
  if (!data) return
  return data
    .filter((obj) =>
      Object.keys(obj).some((key) =>
        obj[key].toString().toLowerCase().includes(search.toLowerCase())
      )
    )
    .slice(0, 20)
}
