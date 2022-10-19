
let captura = location.search
console.log(captura)
let variable = new URLSearchParams(captura)
console.log(variable)
let variable2 = parseInt(variable.get("id"))
console.log(variable2)
let variable3 = amazingevents.events.find((item)=>item._id === variable2)
console.log(variable3)

   let detail = document.getElementById("event") 
   if(variable3.date < amazingevents.currentDate){
   detail.innerHTML =
`<div class="card mb-3" style="max-width: 800px; max-height: 400px;">
        <div class="row g-2">
          <div class="col-md-6">
            <img src=${variable3.image}  class="p-5" alt="cinema">
          </div>
          <div class="col-md-6">
            <div class="card-body">
            <h3 class="card-title">${variable3.name}</h3>
            <p class="card-text"> ${variable3.description}</p>
            <p class="card-text">Date: ${variable3.date}</p>
            <p class="card-text">Category: ${variable3.category}</p>
            <p class="card-text">Place: ${variable3.place}</p>
            <p class="card-text">Capacity: ${variable3.capacity}</p>
            <p class="card-text">Assistance: ${variable3.assistance}</p>
            <p class="card-text">Price: $${variable3.price}</p>
            </div>
          </div>
        </div>
      </div>
      `
    }else{
        detail.innerHTML =
        `<div class="card mb-3" style="max-width: 800px; max-height: 400px;">
        <div class="row g-2">
          <div class="col-md-6">
            <img src=${variable3.image} class="p-5" alt="cinema">
          </div>
          <div class="col-md-6">
            <div class="card-body">
            <h3 class="card-title">${variable3.name}</h3>
            <p class="card-text"> ${variable3.description}</p>
            <p class="card-text">Date: ${variable3.date}</p>
            <p class="card-text">Category: ${variable3.category}</p>
            <p class="card-text">Place: ${variable3.place}</p>
            <p class="card-text">Capacity: ${variable3.capacity}</p>
            <p class="card-text">Estimate: ${variable3.estimate}</p>
            <p class="card-text">Price: $${variable3.price}</p>
            </div>
          </div>
        </div>
      </div>
      `
    }
