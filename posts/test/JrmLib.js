export let convertBooleanToText = bool => {
  if (bool === true) {
    return 'si'
  }
  if (bool === false) {
    return 'no'
  }
}

export let addRow = (table, object) => {
  let tableRow = document.createElement('tr')
  for (let property in object) {
    let tableData = document.createElement('td')
    if (typeof(object[property]) === 'boolean') {
      object[property] = convertBooleanToText(object[property])
    }

    tableData.innerText = object[property]
    tableRow.appendChild(tableData)
  }
  table.appendChild(tableRow)
}