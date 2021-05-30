const pokecontainer = document.querySelector('.poke_container');

function getPokemons(){
 for(i=0; i<=151;i++){

    fetch('https://pokeapi.co/api/v2/pokemon/'+i)
    .then(data => data.json())
    .then(data => {

    const div = document.createElement('div');
        
    template = 
    `<div class="poke_box">
        <h2 class="poke_name">${data.name}</h2>
        <img class="poke_img" src="${data.sprites.front_default}"> 
    </div>`
    
    div.innerHTML = template;

    pokecontainer.append(div.firstElementChild);

    })
 }
   
}
getPokemons()
