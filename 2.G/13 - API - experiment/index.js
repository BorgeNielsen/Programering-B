let api_key = 'B029lCm5yi64xaDS5x0V78VZmsLYKFP9' 

fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + api_key + '&rating=pg-13&limit=20')
    .then( response => response.json() )
    //.then( json => console.log(json) )
    .then( json => {
        json.data.map( image => insertImage(image.images.fixed_width.url))
    })

const insertImage = (url) => {
    let img = document.createElement('img')
    img.src = url
    document.querySelector('body').append(img)
}

