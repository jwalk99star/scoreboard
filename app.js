// ✅make 4 buttons, 2 for each team. A +1 point, and a +3 points.
// ✅write the 'functions' to add points to correct team when buttons are clicked
// ✅make 2 scoreboards, 1 for each team that displays those growing totals
// ✅refactor down to 2 functions..?
// ☑️❌refactor down to 1 function..? *NOTE: Jeremy said that may be tricky at this point. multiple parameters and arguments.
//  I'll hold off on that one.
// ☑️make a reset button/function to set scores back to zero and start over
// ☑️make it look cool (figma for reference)



let visitorScore = 0
let homeScore = 0

// function scoreVisitor1() {
//   visitorScore += 1
//   console.log(`visitor score: `, visitorScore);  
//   let visitorElement = document.getElementById('visitor')
//   console.log('visitorElement:', visitorElement);
//   visitorElement.innerText = visitorScore  
// }

function scoreVisitor(num) {
  visitorScore += num
  console.log(`visitor score: `, visitorScore);
  let visitorElement = document.getElementById('visitor')
  // console.log('visitorElement:', visitorElement);
  visitorElement.innerText = visitorScore
}

function scoreHome(num) {
  homeScore += num
  console.log(`home score: `, homeScore);  
  let homeElement = document.getElementById('home')
  // console.log('homeElement:', homeElement);
  homeElement.innerText = homeScore  
}

// function scoreHome3() {
  //   homeScore += 3
  //   console.log(`home score: `, homeScore);
  //   let homeElement = document.getElementById('home')
  //   console.log('homeElement:', homeElement);
  //   homeElement.innerText = homeScore
  // }
  
  function reset() {
    
    let visitorScore = 0
    let visitorElement = document.getElementById('visitor')
    visitorElement.innerText = visitorScore
    
    let homeScore = 0
    let homeElement = document.getElementById('home')
    homeElement.innerText = homeScore  
    
    localStorage.removeItem(visitorScore, homeScore)

    console.log(visitorScore, homeScore)

    console.log('reset button');
}