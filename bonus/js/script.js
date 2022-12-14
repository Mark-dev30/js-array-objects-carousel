const items = [
    {
        image: "./img/01.webp",
        title: "Marvel's Spiderman Miles Morale",
        description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    },
    {
        image: "./img/02.webp",
        title: "Ratchet and Clank",
        description: "Ratchet & Clank is a series of platform-adventure video games developed by Insomniac Games and published by Sony Computer Entertainment."
    },
    {
        image: "./img/03.webp",
        title: "Fortnite",
        description: "Fortnite is a 2017 third-person shooter video game developed by People Can Fly and published by Epic Games for consoles and PC."
    },
    {
        image: "./img/04.webp",
        title: "Stray",
        description: "Stray is a 2022 dynamic adventure video game developed by BlueTwelve Studio and published by Annapurna Interactive for PlayStation 4, PlayStation 5 and Microsoft Windows."
    },
    {
        image: "./img/05.webp",
        title: "Marvel's Avengers",
        description: "Marvel's Avengers is an action-adventure video game developed by Crystal Dynamics and Eidos Montréal, and published by Square Enix."
    }
];


function createElements(){
    let thumbanils = document.querySelector(".thumbnails");
    let cont_items = document.querySelector(".cont-items");
    for(let i=0; i<items.length; i++){
        let item = items[i];
        cont_items.innerHTML += `
        <div class="items">
        <img src="${item.image}" >
            <div class="cont-descr">
                <h2 class="title">${item.title}</h2>
                <p class="description">${item.description}</p>
            </div>
        </div>`;
        thumbanils.innerHTML += `
        <div class="item-thumbnails">
            <img src="${item.image}">
            <div class="layer"></div>
        </div>`;
    }
};

createElements();

const single_item = document.getElementsByClassName('items'); //Si trasforma in un array
let itemActive = 0;
single_item[itemActive].classList.add('active');

const next = document.querySelector(".btn-next")
const prev = document.querySelector(".btn-prev")

const circle = document.getElementsByClassName('circle');

circle[itemActive].classList.add('active');
const layer = document.getElementsByClassName('layer');
layer[itemActive].classList.add('no_layer')



next.addEventListener('click', function(){

    single_item[itemActive].classList.remove('active');
    circle[itemActive].classList.remove('active');
    layer[itemActive].classList.remove('no_layer')
    if(itemActive == 4){
        itemActive = -1;
    }
    itemActive++
    single_item[itemActive].classList.add('active');
    circle[itemActive].classList.add('active');
    layer[itemActive].classList.add('no_layer')
});

prev.addEventListener('click', function(){

    single_item[itemActive].classList.remove('active');
    circle[itemActive].classList.remove('active');
    layer[itemActive].classList.remove('no_layer')
    if(itemActive == 0){
        itemActive = 5;
    }
    itemActive--
    single_item[itemActive].classList.add('active');
    circle[itemActive].classList.add('active');
    layer[itemActive].classList.add('no_layer')
    
});

setInterval(function(){
    single_item[itemActive].classList.remove('active');
    circle[itemActive].classList.remove('active');
    layer[itemActive].classList.remove('no_layer')
    if(itemActive == 4){
        itemActive = -1;
    }
    itemActive++
    single_item[itemActive].classList.add('active');
    circle[itemActive].classList.add('active');
    layer[itemActive].classList.add('no_layer')
}, 3000);