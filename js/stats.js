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
            everyEvent.percentage = 100 *(everyEvent.assistance / everyEvent.capacity)
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
        let past = document.getElementById("past")
        
        let categories = new Set(data.map((event)=> event.category))
        categories = [...categories]
        console.log(categories)
        let stats = categories.map(category => {
            let filter = data.filter(evento => evento.category === category)
            return acumulador(filter)
        })
        stats.forEach(element => {
            past.innerHTML += `
            <tr>
                <td>${element.category}</td>
                <td>${element.renenues}</td>
                <td>${parseInt(element.percentage)}%</td>
            
            </tr>
            `
        })

        function acumulador(array) {
        let inicio = {
        category: "",
        renenues: 0,
        capacity: 0,
        assistance: 0,
        // percentage: 0,
        } 
        let sumas = array.reduce((elemento1, elemento2) =>{
        return{
            category: elemento2.category,
            renenues: elemento1.renenues + elemento2.renenues,
            capacity: elemento1.capacity + elemento2.capacity,
            assistance: elemento1.assistance + elemento2.assistance,
            // percentage: (elemento1.percentage + elemento2.percentage)
        }
        }, inicio)
        // stats.promedio = (100 * stats[propiedad] / stats.capacity)
        sumas.percentage = 100 *(sumas.assistance / sumas.capacity)
        console.log(sumas.capacity)
        console.log(sumas.assistance)
        console.log(sumas.category.length)
        console.log(sumas.percentage)

        return sumas
    }
        
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
            everyEvent.percentage = 100 * (everyEvent.estimate / everyEvent.capacity)
        })
        let upcoming = document.getElementById("upcoming")
        let categories = new Set(data.map((event)=> event.category))
        categories = [...categories]
        console.log(categories)
        let stats = categories.map(category => {
            let filter = data.filter(evento => evento.category === category)
            return acumulador(filter)
        })
        stats.forEach(element => {
            upcoming.innerHTML += `
            <tr>
                <td>${element.category}</td>
                <td>${element.renenues}</td>
                <td>${parseInt(element.percentage)}%</td>
            
            </tr>
            `
        })

        function acumulador(array) {
        let inicio = {
        category: "",
        renenues: 0,
        capacity: 0,
        estimate: 0,
        // percentage: 0,
        } 
        let sumas = array.reduce((elemento1, elemento2) =>{
        return{
            category: elemento2.category,
            renenues: elemento1.renenues + elemento2.renenues,
            capacity: elemento1.capacity + elemento2.capacity,
            estimate: elemento1.estimate + elemento2.estimate,
            // percentage: (elemento1.percentage + elemento2.percentage)
        }
        }, inicio)
        sumas.percentage = 100 *(sumas.estimate / sumas.capacity)
        // sumas.percentage = percentage/ sumas.category.length
        console.log(sumas.estimate)
        console.log(sumas.category.length)
        console.log(sumas.percentage)

        return sumas
    }
        
        return data
}catch(e){console.log(e)}
}
fetchApiUpcoming()