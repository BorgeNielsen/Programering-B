let people = [
    {
        name: 'Peter Emil',
        surname: 'Amitzbøl',
        age: 27,
        hobbies: ['kommunisme', 'fattigdom', 'fællesspisning', 'klatkager', 'farven rød'],
        Chaus: {
            name: 'Claus', 
            age: '5½'
        }
    },    
    {
        name: 'Jørgen',
        surname: 'Hansen',
        age: 58,
        hobbies: ['alkohol indtag i levernedbrydende mængder', 'kokasser', 'råbe af udlændninge', 'pisse op af nettoen på Valby Langgade',],
        Chaus: {
            name: 'Gustav', 
            age: 12
        }
    },    
    {
        name: 'Henrik',
        surname: 'Henrik',
        age: '34-72',
        hobbies: ['besøge børnehaven', 'blive råbt af af sure forældre', 'blive arresteret af politiet', 'sidde i fængsel i mange år',],
        Chaus: {
            name: 'Fistor løgsovs', 
            age: 'så ung som mulig'
        }
    },    
    {
        name: 'Melliza',
        surname: 'Sønderby',
        age: 92,
        hobbies: ['kørre bil uden briller', 'klatrer i træer', 'komme på skadestuen', 'pisse i bleen så den skal skiftets',],
        Chaus: {
            name: 'Szymankowszczyzna', 
            age: 94
        }
    }    
    ]

people.map( person => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>' + person.name + ' ' + person.surname + '</h1>' 
    htmlString += '<p>' + person.age + '</p>'
    htmlString += '<p>' + person.hobbies.join(', ') + '</p>'
    htmlString += '<p>Chaus: ' + person.Chaus.name + '</p>'
    htmlString += '<p>Chaus alder: ' + person.Chaus.age + '</p>'
    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )