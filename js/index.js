const $product = document.querySelector(".product-inner");

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
const $search = document.getElementById('search')
const $searchBtn = document.getElementById('searchBtn')
const $productCard = document.createElement("div");
function byName(arr){
  console.log(arr);
  arr.forEach((item) => {
    console.log(item);
    const $productItem = document.createElement("a");
    const $img = document.createElement("img");
    const $h2 = document.createElement("h2");
    const $p = document.createElement("p");
    const $price = document.createElement("p")
  
    $img.src = item.img;
    $h2.innerHTML = item.name;
    $p.innerHTML = item.title;
    $price.innerHTML = `${item.price} USD`
  
    $productItem.classList.value = "product-inner-item";
    $productItem.href = './product.html'
    $productItem.id = item.id
  
    $productCard.classList.value = "product-inner-card";
  
    $productCard.appendChild($productItem);
    $productItem.appendChild($img);
    $productItem.appendChild($h2);
    $productItem.appendChild($p);
    $productItem.appendChild($price)

    $productItem.addEventListener('click' , (e)=>{
      localStorage.setItem('id' , e.target.parentElement.id)
    })
  });
  const $newProductCard = Array.from($productCard.children);
  console.log($newProductCard);
  let $added;
  $newProductCard.forEach((element, index) => {
    if (index % 4 === 0) {
      $added = document.createElement("div");
      $added.classList = "product-inner-card";
      const $add = $product.lastElementChild;
      $product.appendChild($added);
    }
    $added.appendChild(element);
  });
}
let search;
$search.addEventListener('input' , ()=>{
  search = products.filter(e=> e.name.toLowerCase().includes($search.value.toLowerCase()))
  if(search === ''){
    byName(products)
  }
  else{
    byName(search)
  }
})
