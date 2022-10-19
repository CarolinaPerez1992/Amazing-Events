const container = document.getElementById("container")
const currentDate = amazingevents.currentDate
// const upcoming = filterCard(amazingevents.events, currentDate)
const past = amazingevents.events.filter(everyEvent => everyEvent.date < currentDate)


function printCard(event){
    container.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <h6> ${event.category}</h6>
            <p class="card-text">${event.description}</p>
            <a href="../html/details.html?id=${event._id}" class="btn btn-primary">Details</a>
        </div>
    </div>
    `
}
past.forEach(printCard)

//task4

const categories = new Set(past.map((event)=> event.category))

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
    
    let events = past
    
    
    applied[fn] = value
    console.log(applied)
    for (let name in applied) {
        if (name == 'isCategory') {
            events = events.filter(categoria => categoria.category.includes(applied[name]))
        }

        if (name == 'matchesWithText') {
            events = events.filter(categoria => categoria.name.toLowerCase().includes(applied[name].toLowerCase()))
        }
    }
    return events
}

function updateEventslist(element, data, fn) {
    element.innerHTML = ''
    data.forEach(fn)
}

const inputCheckBox = document.querySelectorAll('input[type="checkbox"]')
console.log(inputCheckBox)
// const input = document.querySelector(".js-check")
let checked=[]

for(let i = 0; i< inputCheckBox.length; i++){
inputCheckBox[i].addEventListener('click', (e) =>{
    if(e.target.checked){
        
   let categorias= filter('isCategory',e.target.value)
   console.log(categorias)

updateEventslist(container, categorias, printCard)
    }
})
}


const inputSearch = document.getElementById('js-search')

inputSearch.addEventListener('input',(e)=>{
    let categorias = filter('matchesWithText',e.target.value)
    updateEventslist(container, categorias, printCard )
})


