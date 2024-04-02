let wrapper = document.querySelector("#product");
let arr = [
  {
    name: "IPhone 6",
    color: "black",
    price: "150$",
    imgsrc: "https://images.uzum.uz/cnineh5bl7rtgkb8t5i0/original.jpg",
  },
  {
    name: "IPhone 7",
    color: "gold",
    price: "230$",
    imgsrc: "https://images.uzum.uz/cltcms3pvnpo2vtqmqsg/original.jpg",
  },
  {
    name: "IPhone 14 pro",
    color: "silver",
    price: "800$",
    imgsrc: "https://images.uzum.uz/clfkkinn7c6qm23k4630/original.jpg",
  },
  {
    name: "IPhone 15 pro ",
    color: "white",
    price: "1500$",
    imgsrc: "https://images.uzum.uz/cm8lorp25ku1lubqs4qg/original.jpg",
  },
];

arr.forEach(({ name, color, price, imgsrc }) => {
  wrapper.innerHTML += `<div class="card">
            <h1>${name}</h1>
            <p>${color}</p>
            <p>${price}</p>
            <img class="img" src="${imgsrc}" alt="" width="150" height="200" />
        </div>`;
});
