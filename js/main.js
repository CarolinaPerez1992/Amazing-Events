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

// const category = new Set(categories)

const checkBox = document.getElementById("category")
console.log(checkBox)

categories.forEach((category)=>{
    checkBox.innerHTML += `
    <div class="form-check form-check-inline js-check">
        <input class="form-check-input" type="checkbox" value="${category}">
        <label class="form-check-label" for="inlineCheckbox1">${category}</label>
    </div>
     `
})

let applied = {}

function filter(fn, value) {
    
    let categorias = amazingevents.events
    
    
    applied[fn] = value
    console.log(applied)
    for (let name in applied) {
        if (name == 'isCategory') {
            categorias = categorias.filter(categoria => categoria.category.includes(applied[name]))
        }

        if (name == 'matchesWithText') {
            categorias = categorias.filter(categoria => categoria.name.toLowerCase().includes(applied[name].toLowerCase()))
        }
    }
    return categorias
}

function updateEventslist(element, data, fn) {
    element.innerHTML = ''
    data.forEach(fn)
}

const inputCheckBox = document.querySelectorAll('input[type="checkbox"]')
console.log(inputCheckBox)
// const input = document.querySelector(".js-check")
// console.log(input)
// console.log(checkBox)
let checked=[]
for(let i = 0; i< inputCheckBox.length; i++){
inputCheckBox[i].addEventListener('click', (e) =>{
    if(e.target.checked){
// inputCheckBox.addEventListener('change', (e) =>{
   let categorias= filter('isCategory',e.target.value)
   console.log(categorias)
//    container.innerHTML = ''
//    categorias.forEach(printCard)
updateEventslist(container, categorias, printCard)
    }
})
}


const inputSearch = document.getElementById('js-search')

inputSearch.addEventListener('input',(e)=>{
    let categorias = filter('matchesWithText',e.target.value)
    updateEventslist(container, categorias, printCard )
})
