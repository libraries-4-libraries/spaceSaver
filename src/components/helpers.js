const formatLocations = (libraries) => {
  let result = [];
  libraries.forEach((library, index) => {
    result.push({
      id: index,
      title: library,
      selected: false,
      key: 'location'
    })
  })

  return result;
}

export { formatLocations };