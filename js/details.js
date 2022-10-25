async function getEvent(id){
  try{
  let response = await fetch(`https://mh-amazing.herokuapp.com/amazing/${id}`)
  let data = await response.json()
  let event = data.event
  console.log(event)
  let detail = document.getElementById("event")
  console.log(event.date) 
  // if(event.date < amazingevents.currentDate){
  detail.innerHTML =
  // if()
`<div class="card mb-3" style="max-width: 800px; max-height: 400px;">
       <div class="row g-2">
         <div class="col-md-6">
           <img src=${event.image} style="max-width: 700px; max-height: 300px"  class="p-5" alt="cinema">
         </div>
         <div class="col-md-6">
           <div class="card-body">
           <h3 class="card-title">${event.name}</h3>
           <p class="card-text"> ${event.description}</p>
           <p class="card-text">Date: ${event.date}</p>
           <p class="card-text">Category: ${event.category}</p>
           <p class="card-text">Place: ${event.place}</p>
           <p class="card-text">Capacity: ${event.capacity}</p>
           <p class="card-text">Assistance: ${event.assistance}</p>
           <p class="card-text">Price: $${event.price}</p>
           </div>
         </div>
       </div>
     </div>
     `
  }catch (e) {
    console.error(e)
  }
  //  }else{
  //      detail.innerHTML =
  //      `<div class="card mb-3" style="max-width: 800px; max-height: 400px;">
  //      <div class="row g-2">
  //        <div class="col-md-6">
  //          <img src=${variable3.image} class="p-5" alt="cinema">
  //        </div>
  //        <div class="col-md-6">
  //          <div class="card-body">
  //          <h3 class="card-title">${variable3.name}</h3>
  //          <p class="card-text"> ${variable3.description}</p>
  //          <p class="card-text">Date: ${variable3.date}</p>
  //          <p class="card-text">Category: ${variable3.category}</p>
  //          <p class="card-text">Place: ${variable3.place}</p>
  //          <p class="card-text">Capacity: ${variable3.capacity}</p>
  //          <p class="card-text">Estimate: ${variable3.estimate}</p>
  //          <p class="card-text">Price: $${variable3.price}</p>
  //          </div>
  //        </div>
  //      </div>
  //    </div>
  //    `
  //  }
}
getEvent(location.search.slice(4))
console.log(location.search)
