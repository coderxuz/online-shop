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
        localStorage.setItem("cart", JSON.stringify(cart));
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
get("http://localhost:3000/users").then((data) => {
  const $sign = document.getElementById("sign");
  const $account = document.getElementById("account");
  const userid = localStorage.getItem("userid");
  console.log(userid);
  const dataArr = Array.from(data);
  console.log(dataArr);
  dataArr.map((item) => {
    if (item.id == userid) {
      console.log(true);
      $sign.style.display = "none";
      $account.innerHTML = `${item.user} <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 350 350" xml:space="preserve">
<g>
	<path d="M175,171.173c38.914,0,70.463-38.318,70.463-85.586C245.463,38.318,235.105,0,175,0s-70.465,38.318-70.465,85.587
		C104.535,132.855,136.084,171.173,175,171.173z"/>
	<path d="M41.909,301.853C41.897,298.971,41.885,301.041,41.909,301.853L41.909,301.853z"/>
	<path d="M308.085,304.104C308.123,303.315,308.098,298.63,308.085,304.104L308.085,304.104z"/>
	<path d="M307.935,298.397c-1.305-82.342-12.059-105.805-94.352-120.657c0,0-11.584,14.761-38.584,14.761
		s-38.586-14.761-38.586-14.761c-81.395,14.69-92.803,37.805-94.303,117.982c-0.123,6.547-0.18,6.891-0.202,6.131
		c0.005,1.424,0.011,4.058,0.011,8.651c0,0,19.592,39.496,133.08,39.496c113.486,0,133.08-39.496,133.08-39.496
		c0-2.951,0.002-5.003,0.005-6.399C308.062,304.575,308.018,303.664,307.935,298.397z"/>
</g>
</svg>`;
    }
  });
});
