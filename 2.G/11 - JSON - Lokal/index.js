let data

fetch('./data/birds.json')
    .then(res => res.json())
    .then(json => {
        //console.log(json)
        data = json.birds
        document.querySelector('#title').innerHTML = json.description
        json.birds.map(bird => {
        newCard(bird)
        
        })
    })
    
    document.querySelector('#input').addEventListener('input',() => {
        let q=includes(document.querySelector('#input').value)
        
        let result = data.filter(bird => 
        bird.family.q
        || bird.members.q)

        document.querySelector('main').innerHTML = ''
        result.map(bird => newCard(bird))
    })

    const newCard = (bird) => {
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let members = document.createElement('div')
        card.classList.add('card')
        members.classList.add('members')
        card.append(heading)
        card.append(members)
        heading.innerHTML = bird.family
        let list = ''
        bird.members.map(member => list +='<li>' + member)
        members.innerHTML =list
        document.querySelector('main').append(card)
    }

    document.querySelector('#searchicon').addEventListener('click', () =>{
        document.querySelector('#searchbar').classList.add('show')
    })


    document.querySelector('#close').addEventListener('click', () =>{
        document.querySelector('#searchbar').classList.remove('show')
    })

