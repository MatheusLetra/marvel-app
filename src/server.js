const search = (url) => {
    fetch(url,{
        method: 'GET',
        headers :{
          'Accept': 'application/json'
        }
      })
      .then(response =>response.json())
        .then(data => {
          return data
        })       

}

export { search };