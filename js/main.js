const container = document.getElementById("container")
const print = printCard(amazingevents.events, container)

function printCard(events, element){
    for( let event of events ){
    element.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h5 class="card-title">${event.category}</h5>
            <p class="card-text">${event.description}</p>
            <a href="../html/details.html" class="btn btn-primary">Details</a>
        </div>
    </div>
    `
}
}
