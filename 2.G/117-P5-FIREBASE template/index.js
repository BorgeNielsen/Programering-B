//model - lokal kopi af databasen
let model = {}
//view - den visning vi har valgt at lave. Det brugeren ser
let htmlWords
//other html elements 


function setup(){
    //opret reference til html view
    //opret reference til andre html elementer 
    //vi vil ikke have et p5 canvas
    noCanvas()
    //controller - 
    db.collection('collection-name').doc('doc-id')
        //.onSnapshot er reaktiv og henter dataen
        .onSnapshot( doc => {
            //opdater model
            //opdater view
            // når der kommer input fra slutbrugeren, opdateres MODELLEN
                //console.log(htmlWords.html())
            })
            //update database with model on input
        }

function draw(){
    //console.log(htmlWords.elt.scrollTop, htmlWords.elt.scrollHeight)
}