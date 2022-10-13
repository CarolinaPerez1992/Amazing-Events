const container = document.getElementById("container")
//const print = printCard(amazingevents.events, container)


function printCard(event){
    container.innerHTML += `
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
amazingevents.events.forEach(printCard)

//task4

const categories = amazingevents.events.map((event)=> event.category)
// .reduce((a, b)=> a + b, [])

const category = new Set(categories)

const checkBox = document.getElementById("category")
category.forEach((category)=>{
    checkBox.innerHTML += `
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${category}">
        <label class="form-check-label" for="inlineCheckbox1">${category}</label>
    </div>
     `
})
// function printCheckBox(event){
//     checkBox.innerHTML += `
//     <div class="form-check form-check-inline">
//         <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${event.category}">
//         <label class="form-check-label" for="inlineCheckbox1">${event.category}</label>
//     </div>
//     `
// }
// amazingevents.events.forEach(printCheckBox)

// let categoryFilter = amazingevents.events.filter((value)=>{
//     if(value.category === categor)
// }
// )
