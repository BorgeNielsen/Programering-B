const gåVæk = new Audio("./assets/gåVæk.mp3");

var countDownDate = new Date("Dec 24, 2021 00:00:01").getTime();
var JUL = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);



        let nulHour = ''
        if(hours < 10) nulHour = '0'
        
        
        let nulMin = ''
        if(minutes < 10) nulMin = '0'
     
    
        let nulSec = ''
        if(seconds < 10) nulSec = '0'
     
    




    document.getElementById("days").innerHTML = days + ":" 
    document.getElementById("hours").innerHTML = nulHour + hours + ":" 
    document.getElementById("mins").innerHTML = nulMin + minutes + ":" 
    document.getElementById("secs").innerHTML = nulSec + seconds + ""

}, 1000)


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
        div.innerHTML = door.embed


        let lock = document.createElement('div')
            lock.classList.add('lock')
            lock.innerHTML = door.date

            lock.addEventListener('click', () => {
                switch(door.animation){
                        case'slide':
                        lock.classList.toggle('doorLeft')
                        lock.classList.toggle('doorOpen')
                        //lock.innerHTML=''
                        break
                    default:
                        lock.classList.add('doorOpen')
                        //lock.innerHTML=''
                        break
                }
            })
            
            lock.addEventListener('click', () => {
                gåVæk.play()
            })
                
                div.append(lock)
            
            

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
