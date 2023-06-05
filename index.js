document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "image-container"
      ).innerHTML = `<img src="${data.message}"/>`;
    });

  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("activity-name").textContent = data.activity;
      document.getElementById("type").textContent = "Type: " + data.type;
      document.getElementById("participants").textContent =
        "Dogs: " + data.participants;
      document.getElementById("price").textContent = "Price: " + data.price;
      document.getElementById("link").textContent = data.link;
      document.getElementById("key").textContent = "SKU:" + data.key;
      document.getElementById("accessibility").textContent = data.accessibility;
    });
});
