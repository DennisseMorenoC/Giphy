const search = document.querySelector("button");
const text = document.getElementById("elementos")

search.addEventListener ("click", () =>{
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=HdEp01VTiVecrSQhDOni4sJQXUdzmwFQ&limit=25&rating=G`)
        .then(response => response.json())
        .then(data => {
            console.log(data);//data es un nombre cualquiera
            renderInfo(data);
        })
})

const renderInfo = data => {
    search.innerHTML = data.search;
}