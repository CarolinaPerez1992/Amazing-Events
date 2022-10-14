const container = document.getElementById("container")


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

const categories = new Set(amazingevents.events.map((event)=> event.category))

const category = new Set(categories)

const checkBox = document.getElementById("category")

category.forEach((category)=>{
    checkBox.innerHTML += `
    <div class="form-check form-check-inline js-check">
        <input class="form-check-input" type="checkbox" value="${category}">
        <label class="form-check-label" for="inlineCheckbox1">${category}</label>
    </div>
     `
})

function updateEventslist(element, data, fn) {
    element.innerHTML = ''
    data.forEach(fn)
}

// const input = document.querySelector(".js-check")
// console.log(input)
// console.log(checkBox)
checkBox.addEventListener('change', (e) =>{
   let categorias= amazingevents.events.filter((value)=>value.category.includes(e.target.value))
   console.log(categorias)
//    container.innerHTML = ''
//    categorias.forEach(printCard)
updateEventslist(container, categorias, printCard )
})

const inputSearch = document.getElementById('js-search')

inputSearch.addEventListener('input',(e)=>{
    let categorias = amazingevents.events.filter((event)=> event.name.toLowerCase().includes(e.target.value.toLowerCase()))
    updateEventslist(container, categorias, printCard )
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
