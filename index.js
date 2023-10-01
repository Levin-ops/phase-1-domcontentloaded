// Your code goes here
document.addEventListener(`DOMContentLoaded`,()=>{
    function updateParagraph(text){
        let update=document.getElementById(`text`);
        update.textContent=text
    }
    updateParagraph(`This is really cool!`)
})

// console.log(`I did not Wait for the dome to load, I have Infrontness!`)