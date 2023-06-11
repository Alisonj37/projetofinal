let buttoHeader = document.createElement("button");
let but = document.createTextNode("buttonEnd1");
let textButton1 = document.createTextNode("Mais produtos");
buttoHeader.appendChild(textButton1);
document.body.appendChild(buttoHeader);

let buttonHeader = document.createElement("button");
let butt = document.createTextNode("buttonEnd1");
let textButton2 = document.createTextNode("Contato");
buttonHeader.appendChild(textButton2);
document.body.appendChild(buttonHeader);

let image = document.createElement('img');
image.src = "logo.jpg";
document.body.appendChild(image);
const produit = [

    {
        id: 1,
        name : "Morango",
    },

    {
        id: 2,
        name : "Manga",
    },

    {
        id: 3,
        name : "Abacaxie",
    },

    {
        id: 4,
        name : "Laranja",
    },

    {
        id: 5,
        name : "Banana",
    },

];

let main = document.createElement("main");
document.getElementsByTagName("body")[0].appendChild(main);

let ul = document.createElement("ul");
ul.classList.add("produitList");

let li = document.createElement("li");
li.classList.add("headerList");


let VidaHeader = document.createElement("p");
let text = document.createTextNode("Vida");
VidaHeader.appendChild(text);


let FrutaHeader = document.createElement("p");
let Fruta = document.createTextNode("Fruta");
FrutaHeader.appendChild(Fruta);

li.appendChild(VidaHeader);
li.appendChild(FrutaHeader);

ul.appendChild(li);

for(let i = 0 ; i < produit.length; i++){
    let liste = document.createElement("li");
    liste.classList.add("produitDetails");

let p1 = document.createElement("p");
let nameProduit = document.createTextNode(produit[i].name);
p1.appendChild(nameProduit);


liste.appendChild(p1);

ul.appendChild(liste);  
}

document.getElementsByTagName("main")[0].appendChild(ul);

let button = document.createElement("button");
button.classList.add("buttonEnd");

let textButton = document.createTextNode("Fruta");
button.appendChild(textButton);

document.getElementsByTagName("main")[0].appendChild(button);