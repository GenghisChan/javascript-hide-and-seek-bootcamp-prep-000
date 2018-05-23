function getFirstSelector(x) {
 return document.querySelector(x)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div[')
}