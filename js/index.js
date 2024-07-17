const $product = document.querySelector(".product-inner");

const get = async (resurs) => {
  const request = await fetch(resurs);
  const data = await request.json();
  return data;
};
const cart = [];

get("http://localhost:3000/products").then((data) => {
  const $search = document.getElementById("search");
  const $productCard = document.createElement("div");
  function byName(arr) {
    console.log(arr);
    $product.innerHTML = "";
    arr.forEach((item) => {
      console.log(item);
      const $productItem = document.createElement("a");
      const $img = document.createElement("img");
      const $h2 = document.createElement("h2");
      const $p = document.createElement("p");
      const $price = document.createElement("p");
      const $cartBtn = document.createElement("button");
      const $cardDiv = document.createElement("Div");

      $img.src = item.img;
      $h2.innerHTML = item.name;
      $p.innerHTML = item.title;
      $price.innerHTML = `${item.price} USD`;
      $cartBtn.innerHTML = "add";

      $productItem.classList.value = "product-inner-item";
      $productItem.href = "./product.html";
      $productItem.id = item.id;
      $productCard.classList.value = "product-inner-card";

      $productCard.appendChild($productItem);
      $productItem.appendChild($img);
      $productItem.appendChild($h2);
      $productItem.appendChild($p);
      $productItem.appendChild($cardDiv);
      $cardDiv.appendChild($price);
      $cardDiv.appendChild($cartBtn);

      $productItem.addEventListener("click", (e) => {
        e.preventDefault();
        window.open("../product.html");
        localStorage.setItem("id", e.target.parentElement.id);
      });
      $cartBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        cart.push(e.target.parentElement.parentElement.id);
        localStorage.setItem('cart',JSON.stringify(cart) )
      });
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
  $search.addEventListener("input", () => {
    search = data.filter((e) =>
      e.name.toLowerCase().includes($search.value.toLowerCase())
    );
    byName(search);
  });
  byName(data);
});
const $sign = document.getElementById('sign')
const $account = document.getElementById('account')

