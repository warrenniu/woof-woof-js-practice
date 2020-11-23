/****** Deliverable One ********/
//GET Fetch Request (get ALL dogs)
//Create span with the dog's name
//Add span to the dog bar

/****** Variables ********/
const dogBar = document.querySelector('#dog-bar')
const div = document.querySelector('#dog-info')

/****** GET Fetch Request ********/
fetch('http://localhost:3000/pups')
  .then(response => response.json())
  .then(dogArray => renderHeaderDisplay(dogArray));

  /****** Initial Render on Dog Bar ********/
function headerDisplay(dogObj) {
    const span = document.createElement('span')
    span.dataset.id = dogObj.id
    
    span.textContent = dogObj.name
    
    dogBar.append(span)
}

function renderHeaderDisplay(dogArray) {
    dogArray.forEach((dog) => {
        headerDisplay(dog)
    })
}

/****** Deliverable Two ********/
//Click Event
//GET request
//Dog's info (image, name, status) should show in the div with #dog-info id

/****** Event Listener ********/
dogBar.addEventListener('click', renderDog)

/****** Event Handlers ********/
function renderDog(event) {
    
const dogId = event.target.dataset.id
    

fetch(`http://localhost:3000/pups/${dogId}`)
  .then(response => response.json())
  .then(dogObj => appendDog(dogObj));
}

function appendDog(dogObj) {
    let dogStatus = ""
    div.dataset.id = dogObj.id
    // const dogShow = document.createElement('div')

    if (dogObj.isGoodDog == true) {
        dogStatus = "Good Dog!"
        }
        else if (dogObj.isGoodDog == false) {
        dogStatus = "Bad Dog!"
        }

    div.innerHTML = `
    <img src=${dogObj.image}>
    <h2>${dogObj.name}</h2>
    <button>${dogStatus}</button>
    `
}

/****** Deliverable Three ********/
//Click Event
//Button text should switch from Good to Bad, or Bad to Good
//PATCH request - update isGoodDog attribute

/****** Event Listener ********/
div.addEventListener('click', changeDogStatus)

/****** Event Handlers ********/
function changeDogStatus (event) {
    if (event.target.matches('button')) {
        // const dogDiv = event.target.closest('div')
        // console.log(div)
        const id = div.dataset.id
    //    console.log(id)
        const statusBtn = document.querySelector('div#dog-info button')
        console.log(statusBtn)
        let updatedStatus = ""

       
        if (statusBtn.textContent === "Good Dog!") {
        statusBtn.textContent = "Bad Dog!"
        updatedStatus = false
        }

        else if (statusBtn.textContent === "Bad Dog!") {
        statusBtn.textContent = "Good Dog!"
        updatedStatus = true
        }


fetch(`http://localhost:3000/pups/${id}`, {
  method: 'PATCH', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({isGoodDog: updatedStatus}),
})
.then(response => response.json())
.then(dogObj => {
  console.log('Success:', dogObj);
})

      
    
}
}




























// /****** Variables ********/
// const div = document.querySelector('#dog-info')


//   dogBar.addEventListener('click', renderOneDog)
  
// function clickedDog() 
//   fetch(`http://localhost:3000/pups/${dogObj.id}`)
//   .then(response => response.json())
//   .then(dogObj => renderOneDog(dogObj));

// /****** Rendering Clicked Dog ********/
// function renderOneDog(dogObj) {
//     const dogShow = document.createElement('div')
//     // dogShow.dataset.id = dogObj.id  
    
//     dogShow.innerHTML = `
//     <img src=${dogObj.image}/
//     <h2>${dogObj.name}</h2>
//     <button>Good Dog!</button>
//     `
//     div.append(dogShow)


// }




// function renderAllDogs(dogArray) {
//     dogArray.forEach((dog) => {
//         renderOneDog(dog)
//     })
// }
// /****** Event Handler ********/
// function handleClick(event) {
//     if (event.target.matches('.header')) {
//         function renderOneDog(dogObj) {
//             div.dataset.id = dogObj.id   
            
//             div.innerHTML = `
//             <img src=${dogObj.image}
//             <h2>${dogObj.name}</h2>
//             <button>Good Dog!</button>
//             `
            
//         }
//     }
//     return renderOneDog()
// }