// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigo = [];
const inputTexto = document.getElementById('amigo');
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado')


function agregarAmigo(){

        if (listaAmigo.includes(inputTexto.value)) {
            alert('El nombre ya está en la lista.');
        } else {
        listaAmigo.push(inputTexto.value);
        ulListaAmigos.innerHTML += `<li>${inputTexto.value}</li>`;
        console.log(listaAmigo);
        }
    }
    
function sortearAmigo(){
    //aqui me estoy quedando, ya encontre el numero maximo para calcular el numero aleatorio
    const random = Math.floor((Math.random()*listaAmigo.length));
    const amigoSecreto = listaAmigo[random];
    
    if (listaAmigo.length === 0){
        alert('No hay personas para sortear')
    } else {
    ulResultado.innerHTML = `<l1> El amigo secreto es: ${amigoSecreto}`;
    console.log(amigoSecreto);
    return;
    }  
}


