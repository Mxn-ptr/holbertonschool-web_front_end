function createElement(data) {
  let p = document.createElement('p');
  p.innerHTML = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('get', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true)
  xhr.send();
  xhr.onload = () => {
    if (xhr.status == 200) {
      callback(JSON.parse(xhr.response).query.pages["21721040"].extract);
    }
  }
}
queryWikipedia(createElement);
