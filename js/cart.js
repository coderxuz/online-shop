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
get("https://dummyjson.com/c/fc6c-0144-433e-8879").then((data) => {
  cardId.map((element) => {
    data.map((item) => {
      if (item.id == element) {
        $boxInner = document.createElement("div");
        $name = document.querySelector('h2')
        $name.innerHTML = item.name
        $title  = document.querySelector('p')
        $title.innerHTML = item.title
        $price = document.getElementById('price')
        $price.innerHTML = item.price

        $box.appendChild($boxInner)
        $boxInner.appendChild($name)
      }
    });
  });
});
