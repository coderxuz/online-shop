const get = async (resurs) => {
  const request = await fetch(resurs);
  const data = await request.json();
  console.log(data);
  return data;
};
const $box = document.querySelector(".box");
const cardData = JSON.parse(localStorage.getItem("cart"));
const cardId = cardData.filter((element, index) => {
  return cardData.indexOf(element) === index;
});
console.log(cardId);
get("http://localhost:3000/products").then((data) => {
    data.map((item) => {
      cardId.map(elem=>{
        if (item.id == elem) {
          const $boxInner = document.createElement("div");
          const $name = document.createElement('h2')
          const $img = document.createElement('img')
          const $title = document.createElement('p')
          const $price = document.createElement('p')

          $name.innerHTML = item.name
          $title.innerHTML = item.title
          $price.innerHTML = item.price
          $img.src = item.img
          $boxInner.classList = 'box-inner'

          $box.appendChild($boxInner)
          $boxInner.appendChild($img)
          $boxInner.appendChild($name)
          $boxInner.appendChild($title)
          $boxInner.appendChild($price)
        }
      })
    });
});
