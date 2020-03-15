const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
  .then(data => {
    console.log(data.info.count)
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
  })
  .then(data => {
    console.log(data.dimension)
  })
  .catch(error => {
    console.error(error)
  })











// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// let url = 'https://rickandmortyapi.com/api/character/';

// function fetchData(url, callback) {
//   let xhttp = new XMLHttpRequest();

//   xhttp.open('GET', url, true);

//   xhttp.onreadystatechange = (event) => {
//     if(xhttp.readyState === 4) {
//       if(xhttp.status === 200) {
//         callback(null, JSON.parse(xhttp.responseText));
//       } else {
//         const error = newError('Error en ' + url);

//         return callback(error, null);
//       }
//     }
//   }

//   xhttp.send();
// }

// fetchData(url, (error1, data1) => {
//   if(error1) return console.error(error1);

//   fetchData(url + data1.results[0].id, (error2, data2) => {
//     if(error2) return console.error(error2);

//     fetchData(data2.origin.url, (error3, data3) => {
//       if(error3) return console.error(error3);

//       console.log(data1.info.count);
//       console.log(data2.name);
//       console.log(data3.dimension);
//     });
//   });
// });