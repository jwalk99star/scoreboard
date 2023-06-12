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