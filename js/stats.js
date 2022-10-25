// la primera parte es sobre eventos del pasado:
// --> el unico evento que tiene el mayor porcentaje de asistencia
// --> el unico evento que tiene el menor porcentaje de asistencia
// --> el primer evento que encuentren de mayor capacidad

// la segunda parte es sobre eventos futuros:
// --> en la primera columna tienen que enlistar todas las categorias
// --> en la segunda la ganancia estimada de cada categoria
// --> en la tercera el porcentaje de asistencia estimado

// la tercera parte es sobre eventos pasados:
// --> en la primera columna tienen que enlistar todas las categorias
// --> en la segunda la ganancia real de cada categoria
// --> en la tercera el porcentaje de asistencia real
// esto:  https://mind-hub.up.railway.app/amazing

// por: https://mh-amazing.herokuapp.com/amazing 


async function fetchApiPast(){
    try{
        let res = await fetch("https://mh-amazing.herokuapp.com/amazing?time=past")
        data = await res.json()
        console.log(res)
        data = data.events
        console.log(data)
        data.map(everyEvent =>{
            everyEvent.renenues = everyEvent.price * everyEvent.assistance
            everyEvent.percentage = everyEvent.assistance / everyEvent.capacity
        })
        console.log(data)
        //assistance
        let ordenadosAsistencia = [...data].sort((evento1, evento2) => evento1.percentage - evento2.percentage)
        console.log(ordenadosAsistencia)
        let mayorAsistencia = ordenadosAsistencia[ordenadosAsistencia.length - 1]
        let menorAsistencia = ordenadosAsistencia[0]
        let ordenadosCapacidad = [...data].sort((evento1, evento2) => evento1.capacity - evento2.capacity)
        let mayorCapacidad = ordenadosCapacidad[ordenadosCapacidad.length - 1]
        // console.log(mayorCapacidad)
        // console.log(ordenadosCapacidad)
        // console.log(mayorAsistencia)
        // console.log(menorAsistencia)
        let itemAsistencia = document.getElementById("item-asistencia")
            itemAsistencia.innerHTML += `
            <td>${mayorAsistencia.name}</td>
            <td>${menorAsistencia.name}</td>
            <td>${mayorCapacidad.name}</td>
            `

        //categorias
        //falta el get

        let categories = new Set(data.map((event)=> event.category))
        categories = [...categories]
        console.log(categories)
        let itemCategory = document.getElementById("past")
        categories.forEach((evento) => {
            itemCategory.innerHTML += `
            <td>${evento}</td>
            `
        })
        console.log(data)
        function sumarGanancia(elemento1,elemento2) {
            let sumaDeGanancias = elemento1.renenues + elemento2.renenues 
            let subTotal = { 
                ganancia: sumaDeGanancias
            }
            return subTotal 
        }
        let zero = {ganancia: 0}
        data.forEach(category=> {
            if(category.category === categories){
                let gananciaTotal =data.reduce((ganancia1, ganancia2)=> sumarGanancia(ganancia1, ganancia2), zero
                )
            }
        })
        // console.log(category)
        // console.log(categories)
        return data
        }
        catch(err){
        console.log(err)
    }
}
fetchApiPast()

async function fetchApiUpcoming(){
    try{
        let res = await fetch("https://mh-amazing.herokuapp.com/amazing?time=upcoming")
        data = await res.json()
        console.log(res)
        data = data.events
        console.log(data)
        data.map(everyEvent =>{
            everyEvent.renenues = everyEvent.price * everyEvent.estimate
            everyEvent.percentage = everyEvent.estimate / everyEvent.capacity
        })
        let categories = new Set(data.map((event)=> event.category))
        categories = [...categories]
        console.log(categories)
        let itemCategory = document.getElementById("upcoming")
        categories.forEach((evento) => {
            itemCategory.innerHTML += `
            <td>${evento}</td>
            `
        })
}catch(e){console.log(e)}
}
fetchApiUpcoming()



