const container = document.getElementById("container")
const currentDate = amazingevents.currentDate
const upcoming = filterCard(amazingevents.events, currentDate)
const print = printCard(upcoming, container)

function filterCard(array, date ){
    let filtrados = []
    for(card of array){
        if(card.date >= date){
            filtrados.push(card)
        }
    }
    return filtrados
}

function printCard(events, element){
    for( let event of events ){
    element.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h5 class="card-title">${event.category}</h5>
            <p class="card-text">${event.description}</p>
            <a href="#" class="btn btn-primary">Details</a>
        </div>
    </div>

    `
}
}
