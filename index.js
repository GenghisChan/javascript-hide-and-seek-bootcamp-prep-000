function getFirstSelector(x) {
 return document.querySelector(x)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild() {
  const lis = document.getElementById('grand-node').querySelectorAll('div')
  return lis[3]
}

function increasRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(let i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(i + 1)
  }
}