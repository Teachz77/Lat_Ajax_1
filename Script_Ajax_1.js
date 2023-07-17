const fetchPikachu = async ()=>{
    try{
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/25/`);
        let pikas = await url.json();
        console.log(pikas);
        let gambarPoke = pikas.sprites.front_default;
        console.log (gambarPoke);
        let level = pikas.id;
        let types = pikas.types[0].type.name;
        let poke = pikas.name;
        isiData (gambarPoke, level, types, poke);
    } catch{
        console.log(error);
        return;
    }
};

function isiData(gambarPoke, level, types, poke){
    let img = document.getElementById('image');
    img.src = gambarPoke;

    let power = document.querySelector('.card .number');
    power.innerHTML = level;

    let username = document.querySelector('.card .name');
    username.innerHTML = poke;

    let tipe = document.querySelector('.card .type');
    tipe.innerHTML = types;
}
