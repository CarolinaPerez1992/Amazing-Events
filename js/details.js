
let captura = location.search
console.log(captura)
let variable = new URLSearchParams(captura)
console.log(variable)
let id = parseInt(variable.get("id"))
console.log(id)
let variable3 = amazingevents.events.find((item)=>item._id === id)
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

    // function getEvents(){
    //   let id = location.search.slice(4)
    //   console.log(id)
    //   let event = amazingevents.events.filter(e => e._id === id)
    //   event = event[0]
    //   console.log(event)
    //   printDetails(event)
    // }

    // getEvents()

    // function printDetails(event) {
    //   document.getElementById("event").innerHTML = `
    //   <div class="card mb-3" style="max-width: 800px; max-height: 400px;">
    //     <div class="row g-2">
    //       <div class="col-md-6">
    //         <img src=${event.image} class="p-5" alt="cinema">
    //       </div>
    //       <div class="col-md-6">
    //         <div class="card-body">
    //         <h3 class="card-title">${event.name}</h3>
    //         <p class="card-text"> ${event.description}</p>
    //         <p class="card-text">Date: ${event.date}</p>
    //         <p class="card-text">Category: ${event.category}</p>
    //         <p class="card-text">Place: ${event.place}</p>
    //         <p class="card-text">Capacity: ${event.capacity}</p>
    //         <p class="card-text">Estimate: ${event.estimate}</p>
    //         <p class="card-text">Price: $${event.price}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   `
    // }
