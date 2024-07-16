const products = [
  {
    id: 1,
    name: "air conditioner",
    img: "./img/products/conditioner.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque impedit dolorem voluptatem officiis culpa repellat ea soluta id voluptatum!",
    price: 15,
  },
  {
    id: 2,
    name: "s23 fe",
    img: "./img/products/s23_fe.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque impedit dolorem voluptatem officiis culpa repellat ea soluta id voluptatum!",
    price: 20,
  },
  {
    id: 3,
    name: "honor x8b",
    img: "./img/products/honor_x8b.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque impedit dolorem voluptatem officiis culpa repellat ea soluta id voluptatum!",
    price: 18,
  },
  {
    id: 4,
    name: "iphone se",
    img: "./img/products/iphone_se.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque impedit dolorem voluptatem officiis culpa repellat ea soluta id voluptatum!",
    price: 19,
  },
  {
    id: 5,
    name: "iphone se",
    img: "./img/products/iphone_se.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque impedit dolorem voluptatem officiis culpa repellat ea soluta id voluptatum!",
    price: 19,
  },
  {
    id: 6,
    name: "iphone se",
    img: "./img/products/iphone_se.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque impedit dolorem voluptatem officiis culpa repellat ea soluta id voluptatum!",
    price: 19,
  },
];
const localId = localStorage.getItem('id')
products.map((item)=>{
    if(item.id == localId){
        const $boxImg = document.getElementById('boxImg')
        $boxImg.src = item.img
        $name = document.querySelector('h2')
        $name.innerHTML = item.name
        $title  = document.querySelector('p')
        $title.innerHTML = item.title
        $price = document.getElementById('price')
        $price.innerHTML = item.price
    }
})