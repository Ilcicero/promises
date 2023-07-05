const container = document.getElementById("carta");
const row = document.createElement("div");
row.classList.add("row");

fetch("https://striveschool-api.herokuapp.com/books")
  .then(response => response.json())
  .then(data => {
    data.forEach(book => {
      const title = book.title;
      const price = book.price;
      const image = book.img;

      const card = document.createElement("div");
      card.classList.add("col");

      const cardContent = `
        <div class="card" style="width: 14rem">
          <img src="${image}" class="card-img-top" alt="${title}" />

          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">Price: ${price}</p>
            <button class="btn btn-primary">SCARTA</button>
          </div>
        </div>
      `;
      card.innerHTML = cardContent;
 
      const button = card.querySelector("button");
      button.addEventListener("click", () => {
        card.remove();  
      });

      row.appendChild(card);
    });

    container.appendChild(row);
  })
  .catch(error => console.error(error));