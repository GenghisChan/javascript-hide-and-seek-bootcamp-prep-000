function getFirstSelector(x) {
 return document.querySelector(x)
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div.target div')
}