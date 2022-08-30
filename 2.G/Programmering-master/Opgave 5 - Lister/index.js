let body = document.querySelector('body')
let main = document.querySelector('main')
let search = document.querySelector('#search')

let namelist = ['Hans Mogens', 'Peter Pilgaard', 'Thomas Toilet', 'Andreas er lækker', 'Jørgen Sørengaard', 'Theis Hougaard','Thomas Hougaard','Vibeke Hougaard','Nikoline Hougaard', 'Helmut', 'Meget sød kat', 'Helmut er smukkere end Miso']

const makeCards = array => {
    array.map( name => {
        let card = document.createElement('div')
        card.classList.add('card') 

        let top = document.createElement('div')    
        top.classList.add('top')

        let bottom = document.createElement('div')    
        bottom.classList.add('bottom')

        let h = document.createElement('h1')
        h.innerHTML = name
        
        let p = document.createElement('p')
        p.innerHTML = 'Telefon: 12 34 56 78 <br>Alder:69'
        
        top.append(h)
        bottom.append(p)
        card.append(top)
        card.append(bottom)
        
        main.append(card) 
    })    
}

makeCards(namelist)

search.addEventListener('input', () => {
    let results = namelist.filter( name => name.includes( search.value ) )
    main.innerHTML = ''
    makeCards(results)  
})


