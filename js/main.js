const container = document.getElementById("container")


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
    
    let events = amazingevents.events
    
    
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

// let applied = {}
// let arr = []
// function filter(fn, value) {

//     let categorias = amazingevents.events


//     applied[fn] = value
//     console.log(applied)
//     for (let name in applied) {
//         if (name == 'isCategory') {
//             categorias = categorias.filter(categoria => categoria.category.includes(applied[name]))

//             arr = [...arr, ...categorias]
//             console.dir(arr);
//         }

//         if (name == 'matchesWithText') {
            
//             categorias = categorias.filter(categoria => categoria.name.toLowerCase().includes(applied[name].toLowerCase()))
//             console.log(name)
//             console.log(arr)
//             arr = [...arr, ...categorias]
//             // search = [...arr, ...categorias]
//             console.log(categorias)
//             // console.log(search);
//         }
//     }
//     return categorias
// }

// function updateEventslist(element, data, fn) {
//     element.innerHTML = ''
//     data.forEach(fn)
// }


// const inputCheckBox = document.querySelectorAll('input[type="checkbox"]')
// console.dir(inputCheckBox)

// console.log(inputCheckBox.length);
// for (let i = 0; i < inputCheckBox.length; i++) {
//     inputCheckBox[i].addEventListener('click', (e) => {
//         if (e.target.checked) {
//             activ.push(e.target.value);
//             let categorias = filter('isCategory', e.target.value)
//             console.log("categorias")
//             /* console.dir(categorias)  */
//             //    container.innerHTML = ''
//             //    categorias.forEach(printCard)
//             updateEventslist(container, arr, printCard)

//         }
//         else if (!e.target.checked) {
//             console.log("hmm")
//             activ = activ.filter(element => element !== e.target.value);
//             console.dir(arr)
//             let arr2 = []
//             arr.map(element => {
//                 if (activ.includes(element.category)) {
//                     arr2.push(element)
//                     arr2 = [...new Set(arr2)]
//                     console.log('arr2')
//                     console.dir(arr2);
//                 }
//             })
//             arr = arr2
//             updateEventslist(container, arr, printCard)
//             // let categorias = filter('isCategory', e.target.value)
//             // console.log(categorias)

//             if (arr.length == 0) {
//                 /*  console.log("xddd") */
//                 amazingevents.events.forEach(printCard)
//             }
//         }

//         console.log('active')
//         console.dir(activ);
//     })
// }



const inputSearch = document.getElementById('js-search')

inputSearch.addEventListener('input',(e)=>{
    let categorias = filter('matchesWithText',e.target.value)
    updateEventslist(container, categorias, printCard )
})
