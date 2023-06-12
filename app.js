let visitorScore = 0
let homeScore = 0

function scoreVisitor1() {
  visitorScore += 1
  console.log(`visitor score: `, visitorScore);  
  let visitorElement = document.getElementById('visitor')
  console.log('visitorElement:', visitorElement);
  visitorElement.innerText = visitorScore  
}

function scoreVisitor3() {
  visitorScore += 3
  console.log(`visitor score: `, visitorScore);
  let visitorElement = document.getElementById('visitor')
  console.log('visitorElement:', visitorElement);
  visitorElement.innerText = visitorScore
}


function scoreHome1() {
  homeScore += 1
  console.log(`home score: `, homeScore);  
  let homeElement = document.getElementById('home')
  console.log('homeElement:', homeElement);
  homeElement.innerText = homeScore  
}

function scoreHome3() {
  homeScore += 3
  console.log(`home score: `, homeScore);
  let homeElement = document.getElementById('home')
  console.log('homeElement:', homeElement);
  homeElement.innerText = homeScore
}