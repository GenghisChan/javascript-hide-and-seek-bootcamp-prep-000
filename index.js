function getFirstSelector(x) {
 return document.querySelector(x)
}

function nestedTarget(x){
  return document.getElementById('nested').querySelector('div.x div')
}