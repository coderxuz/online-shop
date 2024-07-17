const get = async (resurs) => {
  const request = await fetch(resurs);
  const data = await request.json();
  return data;
};

get("http://localhost:3000/users").then((data) => {
  const userid = localStorage.getItem("userid");
  const $box = document.querySelector("div");
  const $user = document.createElement("h2");
  const $password = document.createElement("h2");
  const $id = document.createElement("h2");
  $box.appendChild($id);
  $box.appendChild($user);
  $box.appendChild($password);
  console.log(userid);
  const dataArr = Array.from(data);
  console.log(dataArr);
  dataArr.map((item) => {
    if (item.id == userid) {
      $id.innerHTML = `Id: ${item.id}`;
      $user.innerHTML = `Username: ${item.user}`;
      $password.innerHTML = `Password: ${item.password}`;
    }
  });
});
