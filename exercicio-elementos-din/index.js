alert("Hello World!");
console.log("hello world cursivo");

let largura = window.innerWidth;
let altura = window.innerHeight;
console.log(`Largura: ${largura}, Altura: ${altura}`);

localStorage.setItem('item', 'valor');
let valorArmazenado = localStorage.getItem('item');
console.log('valor:', valorArmazenado);

let div = document.createElement('div');
div.id = 'div';
document.body.appendChild(div);

div.textContent = "texto div";
div.style.color = 'white';
div.style.backgroundColor = 'blue';
div.style.padding = '10px';

let p = document.getElementById('p');
p.textContent = "outro texto";
p.style.backgroundColor = 'yellow';

let img = document.getElementById('img');
img.setAttribute('title', 'img');

let botaoMudar = document.getElementById('botaoMudar');
botaoMudar.addEventListener('click', function() {
    p.textContent = "never gonnaa tanana tanananananana nananana";
    img.src = "exemplo.gif"; 
    img.setAttribute('title', 'Nova imagem'); 
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log("enter");
    }
});

let lista = document.createElement('ul');
document.body.appendChild(lista);

function addItem(texto) {
    let li = document.createElement('li');
    li.textContent = texto;
    let btnRemove = document.createElement('button');
    btnRemove.textContent = 'x';
    btnRemove.addEventListener('click', function() {
        lista.removeChild(li);
    });
    li.appendChild(btnRemove);
    lista.appendChild(li);
}

addItem('item 1');
addItem('item 2');
addItem('item 3');
