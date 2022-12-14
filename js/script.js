const items = [
    {
        image: "./img/01.webp",
        title: "Marvel's Spiderman Miles Morale",
        description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    },
    {
        image: "./img/02.webp",
        title: "ciccio",
        description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    },
    {
        image: "./img/03.webp",
        title: "Marvel's Spiderman Miles Morale",
        description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    },
    {
        image: "./img/04.webp",
        title: "Marvel's Spiderman Miles Morale",
        description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    },
    {
        image: "./img/05.webp",
        title: "Marvel's Spiderman Miles Morale",
        description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    }
];


function createElements(){

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
        </div>`
    }
}

createElements();

const single_item = document.getElementsByClassName('items');
let itemActive = 0;
single_item[itemActive].classList.add('active');

const next = document.querySelector(".btn-next")
const prev = document.querySelector(".btn-prev")

next.addEventListener('click', function(){

    single_item[itemActive].classList.remove('active');
    itemActive++
    single_item[itemActive].classList.add('active');
})