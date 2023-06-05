// Aggiunge un listener al click sul pulsante "get-activity"
document.getElementById("get-activity").addEventListener("click", function () {

  // Chiamata API per ottenere un'immagine casuale di un cane
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      // Aggiorna il contenitore dell'immagine con l'immagine ottenuta dalla risposta dell'API
      document.getElementById("image-container").innerHTML = `<img src="${data.message}"/>`;
    });

  // Chiamata API per ottenere un'attività casuale
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Stampa i dati della risposta nella console
      // Aggiorna gli elementi dell'interfaccia utente con i dati ottenuti dalla risposta dell'API
      document.getElementById("activity-name").textContent = data.activity;
      document.getElementById("type").textContent = "Type: " + data.type;
      document.getElementById("participants").textContent = "Dogs: " + data.participants;
      document.getElementById("price").textContent = "Price: " + data.price;
      document.getElementById("link").textContent = data.link;
      document.getElementById("key").textContent = "SKU:" + data.key;
      document.getElementById("accessibility").textContent = data.accessibility;
    });
});
