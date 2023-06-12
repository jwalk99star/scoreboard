let visitorScore = 0

function scoreVisitor1() {
  visitorScore += 1
  console.log(visitorScore);
  
  
  let visitorElement = document.getElementById('visitor')
  console.log('visitorElement:', visitorElement);
  visitorElement.innerText = visitorScore
  
}