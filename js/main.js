const container = document.getElementById("container")

async function fetchApi(){
    try{
        let res = await fetch("https://mh-amazing.herokuapp.com/amazing")
        data = await res.json()
        console.log(res)
        data = data.events
        console.log(data)
        data.forEach(printCard)
        let categories = new Set(data.map((event)=> event.category))
        categories = [...categories]
        let checkBox = document.getElementById("category")
        console.log(checkBox)
        
        categories.forEach((category)=>{
            checkBox.innerHTML += `
            <div class="form-check form-check-inline js-check">
                <input class="form-check-input" type="checkbox" value="${category}">
                <label class="form-check-label" for="inlineCheckbox1">${category}</label>
            </div>
            `
        })
        const inputCheckBox = Array.from(document.querySelectorAll('input[type="checkbox"]'))
        //Array.from es otra manera de pasar el contenido a array

        const inputSearch = document.getElementById('js-search')

        inputCheckBox.forEach(e => e.addEventListener("click", filterCards))
        inputSearch.addEventListener('input', filterCards)

        function filterCards(){
            let checkFilter = checkBoxFilter(data)
            console.log(checkFilter)
            let crossFilters = searchFilter(checkFilter, inputSearch.value)
            console.log(inputSearch.value)
            console.log(crossFilters)
            if(crossFilters.length > 0){
                container.innerHTML = ""
            }
            crossFilters.forEach(printCard)
        }

        function checkBoxFilter(evento){
            let checkBoxFilters = inputCheckBox.filter(check=> check.checked).map(check => check.value)
            if(checkBoxFilters.length > 0){
                let checkBox = evento.filter(event => checkBoxFilters.includes(event.category))
                return checkBox
            }
            return evento
        }

        function searchFilter(array, element){
        let searchFilters = array.filter(event => event.name.toLowerCase().includes(element))
        if(searchFilters.length 
            === 0){
            container.innerHTML = `
            <h1>No obtuvimos resultados en su búsqueda</h1>
            `
            return []
        }
        return searchFilters
        }
        return data
    } catch(err){
        console.log(err)
    }
}
fetchApi()

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



