const pokecontainer = document.querySelector('.poke_container');
const selectGen = document.querySelector('#select_gen');
const btn_gen = document.querySelector('.btn_generar');
const btn_buscar = document.querySelector('.btn_buscar');
const searchBar = document.querySelector('.input_nombre')
let pokeBox ;

function getPokemons(count,limit){
    
    fetch('https://pokeapi.co/api/v2/pokemon/'+count)
    .then(data => data.json())
    .then(data => {

    const div = document.createElement('div');
        
    template = 
    `<div class="poke_box">
        <h2 class="poke_name">${FirstLetterUpperCase(data.name)}</h2>
        <img class="poke_img" src="${data.sprites.front_default}"> 
    </div>`
    
    div.innerHTML = template;

    pokecontainer.append(div.firstElementChild);
    if(count>=1 && limit>count){

        getPokemons(count+1,limit)
    
    }

    if(count===limit){
    pokeBox = document.getElementsByClassName("poke_box");
    pokeBox = Array.from(pokeBox);
    console.log(pokeBox)
    searchBar.removeAttribute('disabled')


    }

    })

}

function FirstLetterUpperCase(str){
    return str[0].toUpperCase()+str.slice(1);
}

btn_gen.addEventListener('click', ()=>{
    searchBar.setAttribute('disabled','true')
    pokecontainer.innerHTML= '';

    values = selectGen.value.split(",");
    values[0] = parseInt(values[0])
    values[1] = parseInt(values[1])

    getPokemons(values[0],values[1])
    
})

searchBar.addEventListener('keyup', ()=>{
 
function filterOfNames(el){
    const pokeName = searchBar.value.toLowerCase();
    const actualElement = el.firstElementChild.innerText.toLowerCase()
    
    return  actualElement.includes(pokeName)
}

const filteredSearch = pokeBox.filter(n => filterOfNames(n))

pokecontainer.innerHTML = ''
filteredSearch.forEach(el => {
    pokecontainer.append(el)
});

})