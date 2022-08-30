

let data


fetch('./data/artifact.json')
    .then( res => res.json() )
    .then (json => {
            console.log(json)
           console.log(json)
            data = json.artifacts
            document.querySelector('#title').innerHTML = json.description
            json.artifacts.map( artifacts => {
                newCard(artifacts)
            })

        }  )



        
    
    const newCard = (artif) =>{
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let middle = document.createElement('div')
        let nature = document.createElement('div')

        card.classList.add('card')
        middle.classList.add('members')
        heading.innerHTML = artif.name
        middle.innerHTML = artif.synonyms
        middle.innerHTML = artif.qualities
        nature.innerHTML = artif.nature
        
        
        card.append(heading)
        card.append(middle)
        card.append(nature)

        
        
        let list = ''
        artif.synonyms.map(synonyms =>list += '<li>' + synonyms + '</li>')
        artif.qualities.map(qualities =>list += '<li>' + qualities + '</li>')
        
        document.querySelector('main').append(card)
        middle.innerHTML = list
        
    }

