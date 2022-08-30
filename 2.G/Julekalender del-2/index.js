


fetch("./kalender.json")
.then( res => res.json())
.then(json => {
    console.log(json)
    json.days.map( door => {
        let div = document.createElement('div')
        div.id = door.date
        div.classList.add('door')
        div.setAttribute('onclick',"toggleDoor")
        div.style.width = door.width
        div.style.height = door.height
        div.innerHTML = door.date


       /* div.onclick = function(){
           document.getElementById(door.date).style.width="100vw"
           document.getElementById(door.date).style.height="100vh"
           
        } 
        */

        //en switch er et loop//
       /*
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
        */

     

        document.querySelector('main').append(div)
        var element = document.querySelectorAll(".door")[0];

        element.addEventListener("click", toggleDoor);
    })
})


function toggleDoor() {
    element.classList.toggle("doorOpen")
}

const setImage = (div, obj) => {
    div.style.backgroundImage = `url('${obj.url}')`
}

const setYt = (div, obj) => {
    div.innerhtml = obj.embed
    
}

const setSpecificApi = (div, obj) => {
    
}