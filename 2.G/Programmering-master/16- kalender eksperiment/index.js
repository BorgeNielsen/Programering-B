
fetch("./kalender.json")
.then( res => res.json())
.then(json => {
    console.log(json)
    json.days.map( door => {
        let div = document.createElement('div')
        div.id = door.date + ' December'
        div.classList.add('door')
        div.style.width = door.width
        div.style.height = door.height
        div.innerHTML = door.date

        //en switch er et loop//
        switch(door.content){
            case 'image':
                setImage(div, door)
                break
            case 'Yt': 
                setYt(div, door)
                
                break
            default:
                break
        }



        document.querySelector('main').append(div)
    })
})

const setImage = (div, obj) => {
    div.style.backgroundImage = `url('${obj.url}')`
}

const setYt = (div, obj) => {
    div.innerhtml = obj.embed
    
}

const setSpecificApi = (div, obj) => {
    
}
