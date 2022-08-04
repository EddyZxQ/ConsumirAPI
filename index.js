
let grid = document.querySelector(".grid")
let fragmento = document.createDocumentFragment()


const obtenerPerros = async (raza) =>{

    let peticionPerretes = await fetch("https://dog.ceo/api/breed/"+raza+"/images")
    
    let jsonPerretes = await peticionPerretes.json()

    

    jsonPerretes.message.forEach(perreteFoto => {

        console.log(perreteFoto)

        const item = document.createElement("div")
        item.className = "item"


        const img = document.createElement("img")
        img.className ="item__photo"
        img.src = perreteFoto




        item.appendChild(img)
        fragmento.appendChild(item)
        
    })



    grid.appendChild(fragmento)


}



let buscador = document.querySelector("#buscador")

buscador.addEventListener("search", ()=>{

    buscador.value !== ""? obtenerPerros(buscador.value) : grid.innerHTML = ""
   

})




